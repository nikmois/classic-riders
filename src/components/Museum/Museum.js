import React from "react";

import {
  Container,
  Header,
  ImageCont,
  PaymentContainer,
  SmallCont,
  TextContainer,
} from "./MuseumStyles";
import Image from "next/image";

const Museum = () => (
  <Container id="museum">
    <Header>MUUSEUM</Header>
    <TextContainer>
      С 2021 года в Нарва на бастионе Глория в здании бывшей котельной района
      создаётся мотомузей. Здесь будет находиться мототехника произведённая как
      в советском союзе, так и в других странах. Ожидается, что в выставочный
      зал музея первые посетители попадут в 2023 году.
      <SmallCont>
        <PaymentContainer>
          Для создания музея нам нужна Ваша помощь. Мы будем благодарны всем,
          кто поможет создать мотомузей.
          <br />
          Реквизиты переводов:
          <br />
          Получатель: MTÜ Classic Riders AMC
          <br />
          Счёт получателя: EE562200221061274816
          <br />
          Пояснение: Muuseumi toetus
          <br />
          Также можно передать деньги или оказать иную помощь в создание музея
          по адресу Vestervalli 17a, Narva.
        </PaymentContainer>
        <ImageCont>
          <Image src="/images/Moto.jpg" alt="Motonurk" layout="fill" objectFit="cover"/>
        </ImageCont>
      </SmallCont>
      <br />
      <br />
      <p style={{ fontSize: "2rem" }}>
        Спасибо всем, кто поддерживает создание музея!
      </p>
    </TextContainer>
  </Container>
);

export default Museum;
