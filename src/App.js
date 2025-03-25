import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  text-align: left;
  line-height: 1.8;
  color: #2d3748;
`;

const Title = styled.h1`
  color: #1a73e8;
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? '#1557b3' : '#1a73e8')};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #1557b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const PolicyText = styled.div`
  margin-top: 30px;
  padding: 25px;
  background-color: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  white-space: pre-wrap;
  font-size: 15px;
  color: #4a5568;
  line-height: 1.8;
  overflow-y: auto;
  max-height: 500px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
  }
`;

// Textos da Política de Privacidade
const policyTexts = {
  pt: `
  📚 Política de Privacidade do Subiblio

  Última Atualização: 22 de Março de 2025
  
  1. Introdução
  Bem-vindo ao Subiblio, uma plataforma dedicada à troca e doação de livros, promovendo a leitura e o compartilhamento de conhecimento. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações quando você utiliza nosso aplicativo. Ao usar o Subiblio, você concorda com as práticas descritas nesta política.
  
  2. Informações que Coletamos
  Para fornecer uma experiência personalizada e segura, coletamos os seguintes tipos de dados:
  
  - Informações Pessoais:
    - Nome, endereço de e-mail, senha e data de nascimento.
    - Foto de perfil (opcional).
    - Biografia e interesses literários (opcional).
  
  - Dados de Uso:
    - Histórico de interações (livros trocados, favoritos, mensagens enviadas).
    - Preferências de leitura e atividades no aplicativo.
  
  - Dados do Dispositivo:
    - Endereço IP, tipo de dispositivo, sistema operacional e identificadores únicos.
    - Dados de localização (se permitido pelo usuário).
  
  - Conteúdo Gerado pelo Usuário:
    - Mensagens, comentários, avaliações e uploads de livros.
  
  3. Como Usamos Suas Informações
  Utilizamos seus dados para:
  - Fornecer, manter e melhorar nossos serviços.
  - Personalizar sua experiência no aplicativo.
  - Facilitar a comunicação entre usuários.
  - Garantir a segurança e prevenir atividades fraudulentas.
  - Enviar notificações e atualizações relevantes.
  - Realizar análises e pesquisas para melhorar o aplicativo.
  
  4. Compartilhamento de Dados
  Seus dados são compartilhados apenas nas seguintes situações:
  - Com outros usuários, para facilitar trocas e interações.
  - Com prestadores de serviços terceirizados (como hospedagem de dados e análise de uso).
  - Para cumprir obrigações legais ou responder a solicitações governamentais.
  - Em caso de fusão, aquisição ou venda de ativos, onde seus dados podem ser transferidos.
  
  5. Segurança dos Dados
  Implementamos medidas de segurança robustas, incluindo:
  - Criptografia de dados em trânsito e em repouso.
  - Autenticação de dois fatores (2FA) para contas.
  - Monitoramento contínuo para detectar e prevenir violações.
  
  6. Direitos do Usuário
  Você tem o direito de:
  - Acessar, corrigir ou atualizar suas informações pessoais.
  - Solicitar a exclusão de sua conta e dados associados.
  - Revogar consentimentos concedidos anteriormente.
  - Obter uma cópia dos dados que coletamos sobre você.
  
  7. Retenção de Dados
  Mantemos seus dados apenas pelo tempo necessário para fornecer nossos serviços ou cumprir obrigações legais. Após a exclusão da conta, seus dados serão removidos de nossos sistemas.
  
  8. Menores de Idade
  O Subiblio é destinado a usuários com 16 anos ou mais. Menores de idade devem ter o consentimento dos pais ou responsáveis para utilizar o aplicativo.
  
  9. Alterações na Política
  Podemos atualizar esta política periodicamente. Notificaremos os usuários sobre mudanças significativas por meio do aplicativo ou e-mail.
  
  10. Contato
  Para dúvidas, solicitações ou preocupações, entre em contato conosco em:
  E-mail: associa.adv@gmail.com
  Endereço: [inserir endereço físico]
  `,
  en: `
  📚 Subiblio Privacy Policy

  Last Updated: [Insert Date]
  
  1. Introduction
  Welcome to Subiblio, a platform dedicated to book exchange and donation, promoting reading and knowledge sharing. This Privacy Policy explains how we collect, use, share, and protect your information when you use our app. By using Subiblio, you agree to the practices described in this policy.
  
  2. Information We Collect
  To provide a personalized and secure experience, we collect the following types of data:
  
  - Personal Information:
    - Name, email address, password, and date of birth.
    - Profile picture (optional).
    - Biography and literary interests (optional).
  
  - Usage Data:
    - Interaction history (books exchanged, favorites, messages sent).
    - Reading preferences and app activities.
  
  - Device Data:
    - IP address, device type, operating system, and unique identifiers.
    - Location data (if permitted by the user).
  
  - User-Generated Content:
    - Messages, comments, reviews, and book uploads.
  
  3. How We Use Your Information
  We use your data to:
  - Provide, maintain, and improve our services.
  - Personalize your app experience.
  - Facilitate communication between users.
  - Ensure security and prevent fraudulent activities.
  - Send relevant notifications and updates.
  - Conduct analysis and research to improve the app.
  
  4. Data Sharing
  Your data is shared only in the following situations:
  - With other users to facilitate exchanges and interactions.
  - With third-party service providers (e.g., data hosting and usage analysis).
  - To comply with legal obligations or respond to government requests.
  - In case of merger, acquisition, or asset sale, where your data may be transferred.
  
  5. Data Security
  We implement robust security measures, including:
  - Encryption of data in transit and at rest.
  - Two-factor authentication (2FA) for accounts.
  - Continuous monitoring to detect and prevent breaches.
  
  6. User Rights
  You have the right to:
  - Access, correct, or update your personal information.
  - Request deletion of your account and associated data.
  - Revoke previously granted consents.
  - Obtain a copy of the data we collect about you.
  
  7. Data Retention
  We retain your data only as long as necessary to provide our services or fulfill legal obligations. After account deletion, your data will be removed from our systems.
  
  8. Minors
  Subiblio is intended for users aged 16 and above. Minors must have parental consent to use the app.
  
  9. Policy Changes
  We may update this policy periodically. Users will be notified of significant changes via the app or email.
  
  10. Contact
  For questions, requests, or concerns, contact us at:
  Email: [insert email]
  Address: [insert physical address]`,
  es: `
  📚 Política de Privacidad de Subiblio

  Última Actualización: [Insertar Fecha]
  
  1. Introducción
  Bienvenido a Subiblio, una plataforma dedicada al intercambio y donación de libros, promoviendo la lectura y el intercambio de conocimientos. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestra aplicación. Al usar Subiblio, usted acepta las prácticas descritas en esta política.
  
  2. Información que Recopilamos
  Para proporcionar una experiencia personalizada y segura, recopilamos los siguientes tipos de datos:
  
  - Información Personal:
    - Nombre, dirección de correo electrónico, contraseña y fecha de nacimiento.
    - Foto de perfil (opcional).
    - Biografía e intereses literarios (opcional).
  
  - Datos de Uso:
    - Historial de interacciones (libros intercambiados, favoritos, mensajes enviados).
    - Preferencias de lectura y actividades en la aplicación.
  
  - Datos del Dispositivo:
    - Dirección IP, tipo de dispositivo, sistema operativo e identificadores únicos.
    - Datos de ubicación (si el usuario lo permite).
  
  - Contenido Generado por el Usuario:
    - Mensajes, comentarios, reseñas y cargas de libros.
  
  3. Cómo Usamos Su Información
  Utilizamos sus datos para:
  - Proporcionar, mantener y mejorar nuestros servicios.
  - Personalizar su experiencia en la aplicación.
  - Facilitar la comunicación entre usuarios.
  - Garantizar la seguridad y prevenir actividades fraudulentas.
  - Enviar notificaciones y actualizaciones relevantes.
  - Realizar análisis e investigaciones para mejorar la aplicación.
  
  4. Compartir Datos
  Sus datos se comparten solo en las siguientes situaciones:
  - Con otros usuarios para facilitar intercambios e interacciones.
  - Con proveedores de servicios terceros (por ejemplo, alojamiento de datos y análisis de uso).
  - Para cumplir con obligaciones legales o responder a solicitudes gubernamentales.
  - En caso de fusión, adquisición o venta de activos, donde sus datos pueden ser transferidos.
  
  5. Seguridad de los Datos
  Implementamos medidas de seguridad robustas, que incluyen:
  - Cifrado de datos en tránsito y en reposo.
  - Autenticación de dos factores (2FA) para cuentas.
  - Monitoreo continuo para detectar y prevenir violaciones.
  
  6. Derechos del Usuario
  Usted tiene derecho a:
  - Acceder, corregir o actualizar su información personal.
  - Solicitar la eliminación de su cuenta y los datos asociados.
  - Revocar consentimientos otorgados previamente.
  - Obtener una copia de los datos que recopilamos sobre usted.
  
  7. Retención de Datos
  Mantenemos sus datos solo durante el tiempo necesario para proporcionar nuestros servicios o cumplir con obligaciones legales. Después de la eliminación de la cuenta, sus datos se eliminarán de nuestros sistemas.
  
  8. Menores de Edad
  Subiblio está destinado a usuarios mayores de 16 años. Los menores deben tener el consentimiento de sus padres o tutores para utilizar la aplicación.
  
  9. Cambios en la Política
  Podemos actualizar esta política periódicamente. Los usuarios serán notificados de cambios significativos a través de la aplicación o por correo electrónico.
  
  10. Contacto
  Para preguntas, solicitudes o inquietudes, contáctenos en:
  Correo electrónico: [insertar correo electrónico]
  Dirección: [insertar dirección física]
  `,
};

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState('pt');

  return (
    <Container>
      <Title>📖 Política de Privacidade | Privacy Policy | Política de Privacidad</Title>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button active={language === 'pt'} onClick={() => setLanguage('pt')}>🇧🇷 Português</Button>
        <Button active={language === 'en'} onClick={() => setLanguage('en')}>🇺🇸 English</Button>
        <Button active={language === 'es'} onClick={() => setLanguage('es')}>🇪🇸 Español</Button>
      </div>
      <PolicyText>{policyTexts[language]}</PolicyText>
    </Container>
  );
};

export default PrivacyPolicy;