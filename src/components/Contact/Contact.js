import React, { useState, forwardRef  } from 'react';
import { Button, ContactItem, Contacts, ContactsContainer, Container, Form, Title } from './ContactStyles';
import { Home,  MailOutline, Phone} from "@material-ui/icons";
import { useForm} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from "emailjs-com"
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { et, ru, en } from '../../constants/translations';
import ClipLoader from "react-spinners/FadeLoader";
const Input = forwardRef((props, ref) => {
    return (
        <TextField variant="filled" margin="normal" inputRef={ref} fullWidth {...props} inputProps={{style: {fontSize: 17}}} InputLabelProps={{style: {fontSize: 17, zIndex: 0}}}/>
    )
});

const Activities = () => {
const router = useRouter();
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;

    const [open, setOpen] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, "Eesnimi ei pea sisaldama numbreid").required("Eesnimi on kohustuslik väli").matches(/^[a-zA-Z]+$/, "Eesnimi väli peab sisaldama ainult ladina tähestiku tähti"),
    lastName: yup.string().matches(/^([^0-9]*)$/, "Perekonnanimi ei pea sisaldama numbreid").required("Perekonnanimi on kohustuslik väli").matches(/^[a-zA-Z]+$/, "Perekonnanimi väli peab sisaldama ainult ladina tähestiku tähti"),
    email: yup.string().email("Palun sisestage korrektne email").required("Email on kohustuslik väli"),
    message: yup.string().required("Sõnum on kohustuslik väli"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })
  const [loading,setLoading] = useState(false);

  const onSubmit = async (data,e) => {
    setLoading(true)
    await emailjs.sendForm('smtpservice', 'template_g279l9p', e.target, process.env.NEXT_PUBLIC_EMAIL_API)
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });
    e.target.reset()
    setOpen(true)
    setLoading(false)
  }

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    
    setOpen(false);
    };
      
    const action = (
    <React.Fragment>
        <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        >
        <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
    );

  return (
      <>
    <Container id="contacts">
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>

      <Title>{t.form}</Title>
      <Input {...register("firstName")} id="firstName" type="text" label={t.name} name="firstName" required error={!!errors.firstName} helperText={errors?.firstName?.message} />
      <Input {...register("lastName")} id="lastName" type="text" label={t.surname} name="lastName" required error={!!errors.lastName} helperText={errors?.lastName?.message} />
      <Input {...register("email")} id="email" type="email" label="E-mail" name="email" required error={!!errors.email} helperText={errors?.email?.message} />
      <TextField
        {...register("message")}
        id="outlined-multiline-static"
        label={t.mess}
        name="message"
        multiline
        required 
        error={!!errors.message}
        minRows={5}
        variant="filled"
        style={{margin: "1rem 0"}}
        inputProps={{style: {fontSize: 17, lineHeight: 2}}} InputLabelProps={{style: {fontSize: 17, zIndex: 0}}}
        />
        <div style={{display: "flex", alignItems: "center", gap: "2rem"}}>
      <Button type="submit">{t.sendmessage}</Button>
      <ClipLoader
        color="black"
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      </Form>
      <ContactsContainer>
      <Contacts>
      <Title style={{lineHeight: "1"}}>{t.contacts}</Title>
      <ContactItem style={{fontWeight: "700"}}>{t.motom} Motonurk:</ContactItem>
            <ContactItem><Home style={{marginRight:"20px", transform: "scale(1.5)"}}/>
            Narva, Vestervalli 17a<br/>
            www.motonurk.ee
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"20px", transform: "scale(1.5)"}}/>
                +372 55959334
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"20px", transform: "scale(1.5)"}}/>
                info@motonurk.ee
            </ContactItem>
      </Contacts>
      
    
    </ContactsContainer>
    </Container>
    <iframe
  width="100%"
  height="380"
  style={{border: "0", marginBottom: "10vh"}}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJH11o2943lEYRVjIbbfWH09k&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
</iframe>
    <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        action={action}
        sx={{ bottom: { xs: 20, sm: 20 } }}
        >
        <Alert onClose={handleClose} severity="success" style={{ width: '100%', fontSize: "18px" }}>
        Teie sõnum on saadetud!
        </Alert>
    </Snackbar>
    </>
  );
};

export default Activities;
