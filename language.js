document.addEventListener('DOMContentLoaded', () => {
    i18next.init({
        lng: 'es', // default language
        fallbackLng: 'en',
        debug: true,
        resources: {
            es: {
                translation: {
                    nav: {
                        home: "Inicio",
                        coder_profile: "Perfil Coder",
                        lawyer_profile: "Perfil Legal",
                        contact: "Contacto",
                        privacy_policy: "Política de Privacidad"
                    },
                    lawyer: {
                        page_title: "Perfil Profesional :: [Isaac Sandiumenge]"
                    },
                    privacy: {
                        page_title: "Política de Privacidad :: Legal Coder",
                        title: "Política de Privacidad de Legal Coder",
                        effective_date: "Fecha de entrada en vigor: 21 de septiembre de 2025",
                        section1_title: "1. Introducción",
                        section1_p1: "En Legal Coder, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona a través de nuestro sitio web.",
                        section2_title: "2. Información que Recopilamos",
                        section2_p1: "Podemos recopilar la siguiente información:",
                        section2_li1: "Información de uso del sitio web: dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia en el sitio, datos de geolocalización aproximada (a través de herramientas analíticas como Google Analytics).",
                        section2_li2: "Datos de interacción con el asistente de IA: el texto de los 'prompts' o consultas ingresadas en el asistente de inteligencia artificial.",
                        section2_p_analytics: "En el caso de utilizar servicios como Google Analytics u otras herramientas de seguimiento, se entenderá que se recopilan datos de uso anónimos para mejorar la experiencia del usuario y el rendimiento del sitio. Esta recopilación se realiza conforme a las directrices de privacidad de dichas herramientas y del RGPD.",
                        section3_title: "3. Uso de la Información",
                        section3_p1: "La información recopilada se utiliza para:",
                        section3_li1: "Proporcionar y mejorar nuestros servicios, adaptándolos a las necesidades de nuestros usuarios.",
                        section3_li2: "Responder a consultas, solicitudes de información o soporte técnico.",
                        section3_li3: "Enviar comunicaciones relevantes sobre nuestros servicios, actualizaciones o noticias, siempre y cuando se haya obtenido el consentimiento expreso del usuario.",
                        section3_li4: "Cumplir con las obligaciones legales y regulatorias aplicables, incluyendo la respuesta a solicitudes de autoridades competentes.",
                        section3_p_legal_basis: "La base legal para el tratamiento de sus datos personales puede variar según la finalidad, incluyendo su consentimiento, la necesidad de ejecutar un contrato o la existencia de un interés legítimo de Legal Coder.",
                        section4_title: "4. Compartición de la Información",
                        section4_p1: "Legal Coder se compromete a no compartir su información personal con terceros, a menos que se presente alguna de las siguientes circunstancias:",
                        section4_li1: "Cuando sea estrictamente necesario para la prestación de los servicios solicitados por usted (por ejemplo, con proveedores de servicios tecnológicos que actúen bajo nuestras instrucciones).",
                        section4_li2: "Para cumplir con obligaciones legales, requerimientos judiciales, o responder a solicitudes legítimas de autoridades gubernamentales.",
                        section4_li3: "Con su consentimiento expreso e inequívoco, otorgado de forma previa a la compartición de datos.",
                        section4_p_third_parties: "Nos aseguramos de que cualquier tercero con quien compartamos información personal se comprometa a protegerla con el mismo nivel de diligencia y cumplimiento del RGPD que nosotros.",
                        section5_title: "5. Seguridad de la Información",
                        section5_p1: "Implementamos medidas de seguridad técnicas, organizativas y físicas robustas para proteger su información personal contra accesos no autorizados, alteración, divulgación, pérdida o destrucción. Estas medidas incluyen el uso de cifrado, controles de acceso estrictos, auditorías de seguridad periódicas y la formación de nuestro personal en materia de protección de datos.",
                        section5_p_no_guarantee: "A pesar de nuestros esfuerzos, ninguna transmisión de datos por Internet o sistema de almacenamiento puede garantizar una seguridad del 100%. Por lo tanto, aunque nos esforzamos por proteger su información personal, no podemos garantizar su seguridad absoluta.",
                        section6_title: "6. Derechos del Usuario (RGPD)",
                        section6_p1: "Conforme al Reglamento General de Protección de Datos (RGPD), usted tiene derecho a:",
                        section6_li1: "Acceso: Obtener confirmación sobre si estamos tratando sus datos personales y, en su caso, acceder a ellos.",
                        section6_li2: "Rectificación: Solicitar la corrección de sus datos personales que sean inexactos o incompletos.",
                        section6_li3: "Supresión (Derecho al Olvido): Solicitar la eliminación de sus datos personales cuando, entre otros motivos, ya no sean necesarios para los fines que fueron recogidos.",
                        section6_li4: "Oposición: Oponerse al tratamiento de sus datos personales en determinadas circunstancias, incluyendo el marketing directo.",
                        section6_li5: "Limitación del tratamiento: Solicitar la limitación del tratamiento de sus datos en ciertas situaciones, en cuyo caso solo los conservaremos para el ejercicio o la defensa de reclamaciones.",
                        section6_li6: "Portabilidad: Recibir los datos personales que nos haya facilitado en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento.",
                        section6_p2: "Para ejercer estos derechos, puede contactarnos a través de <a href=\"mailto:isaac.sandi98@gmail.com\">isaac.sandi98@gmail.com</a>. Responderemos a su solicitud en el plazo legalmente establecido.",
                        section6_p_complaint: "También tiene derecho a presentar una reclamación ante la autoridad de control competente en materia de protección de datos (por ejemplo, la Agencia Española de Protección de Datos).",
                        section7_title: "7. Cambios en la Política de Privacidad",
                        section7_p1: "Legal Coder se reserva el derecho de modificar o actualizar esta Política de Privacidad en cualquier momento para reflejar cambios en nuestras prácticas de datos o en la legislación aplicable. Las modificaciones entrarán en vigor tan pronto como sean publicadas en esta página. Si los cambios son sustanciales, se lo notificaremos a través de un aviso destacado en nuestro sitio web o por otros medios (por ejemplo, correo electrónico si tenemos su consentimiento para ello).",
                        section7_p_review: "Le recomendamos revisar periódicamente esta Política de Privacidad para estar informado sobre cómo protegemos su información.",
                        section8_title: "8. Contacto",
                        section8_p1: "Si tiene alguna pregunta, inquietud o desea ejercer sus derechos relacionados con esta Política de Privacidad o el tratamiento de sus datos personales, no dude en contactarnos:",
                        section8_li1: "Correo electrónico: <a href=\"mailto:isaac.sandi98@gmail.com\">isaac.sandi98@gmail.com</a>",
                        section8_li2: "Dirección postal: [dirección física, si aplica]",
                        section8_p3: "Esta política ha sido elaborada considerando las mejores prácticas y ejemplos de políticas de privacidad para sitios web de servicios legales y ha sido adaptada para cumplir con los requisitos del RGPD, basándose en la información disponible sobre el sitio `LegalCoder`."
                    },
                    footer: {
                        rights: "Todos los derechos reservados."
                    }
                }
            },
            en: {
                translation: {
                    nav: {
                        home: "Home",
                        coder_profile: "Coder Profile",
                        lawyer_profile: "Legal Profile",
                        contact: "Contact",
                        privacy_policy: "Privacy Policy"
                    },
                    lawyer: {
                        page_title: "Professional Profile :: [Isaac Sandiumenge]"
                    },
                    privacy: {
                        page_title: "Privacy Policy :: Legal Coder",
                        title: "Legal Coder Privacy Policy",
                        effective_date: "Effective Date: September 21, 2025",
                        section1_title: "1. Introduction",
                        section1_p1: "At Legal Coder, we are committed to protecting the privacy of our users and clients. This Privacy Policy describes how we collect, use, and protect the personal information you provide to us through our website.",
                        section2_title: "2. Information We Collect",
                        section2_p1: "We may collect the following information:",
                        section2_li1: "Website usage information: IP address, browser type, pages visited, time spent on the site, approximate geolocation data (via analytical tools such as Google Analytics).",
                        section2_li2: "AI assistant interaction data: the text of 'prompts' or queries entered into the artificial intelligence assistant.",
                        section2_p_analytics: "In the case of using services like Google Analytics or other tracking tools, it will be understood that anonymous usage data is collected to improve user experience and site performance. This collection is carried out in accordance with the privacy guidelines of these tools and the GDPR.",
                        section3_title: "3. Use of Information",
                        section3_p1: "The information collected is used to:",
                        section3_li1: "Provide and improve our services, adapting them to the needs of our users.",
                        section3_li2: "Respond to inquiries, requests for information, or technical support.",
                        section3_li3: "Send relevant communications about our services, updates, or news, provided that explicit user consent has been obtained.",
                        section3_li4: "Comply with applicable legal and regulatory obligations, including responding to requests from competent authorities.",
                        section3_p_legal_basis: "The legal basis for processing your personal data may vary depending on the purpose, including your consent, the necessity of executing a contract, or the existence of a legitimate interest of Legal Coder.",
                        section4_title: "4. Sharing of Information",
                        section4_p1: "Legal Coder commits not to share your personal information with third parties, unless one of the following circumstances arises:",
                        section4_li1: "When strictly necessary for the provision of services requested by you (e.g., with technology service providers acting under our instructions).",
                        section4_li2: "To comply with legal obligations, judicial requirements, or to respond to legitimate requests from governmental authorities.",
                        section4_li3: "With your express and unequivocal consent, granted prior to data sharing.",
                        section4_p_third_parties: "We ensure that any third party with whom we share personal information commits to protecting it with the same level of diligence and GDPR compliance as us.",
                        section5_title: "5. Information Security",
                        section5_p1: "We implement robust technical, organizational, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, loss, or destruction. These measures include the use of encryption, strict access controls, periodic security audits, and training of our staff in data protection.",
                        section5_p_no_guarantee: "Despite our efforts, no data transmission over the Internet or storage system can guarantee 100% security. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.",
                        section6_title: "6. User Rights (GDPR)",
                        section6_p1: "In accordance with the General Data Protection Regulation (GDPR), you have the right to:",
                        section6_li1: "Access: Obtain confirmation as to whether or not your personal data is being processed, and, where that is the case, access to the personal data.",
                        section6_li2: "Rectification: Request the correction of your personal data that is inaccurate or incomplete.",
                        section6_li3: "Erasure (Right to be Forgotten): Request the deletion of your personal data when, among other reasons, it is no longer necessary for the purposes for which it was collected.",
                        section6_li4: "Objection: Object to the processing of your personal data in certain circumstances, including direct marketing.",
                        section6_li5: "Restriction of processing: Request the restriction of the processing of your data in certain situations, in which case we will only retain it for the exercise or defense of claims.",
                        section6_li6: "Data portability: Receive the personal data that you have provided to us in a structured, commonly used, and machine-readable format, and to transmit it to another controller.",
                        section6_p2: "To exercise these rights, you can contact us via <a href=\"mailto:isaac.sandi98@gmail.com\">isaac.sandi98@gmail.com</a>. We will respond to your request within the legally established period.",
                        section6_p_complaint: "You also have the right to lodge a complaint with the competent data protection supervisory authority (e.g., the Spanish Data Protection Agency).",
                        section7_title: "7. Changes to the Privacy Policy",
                        section7_p1: "Legal Coder reserves the right to modify or update this Privacy Policy in any time to reflect changes in our data practices or applicable legislation. The modifications will take effect as soon as they are published on this page. If the changes are substantial, we will notify you through a prominent notice on our website or by other means (e.g., email if we have your consent to do so).",
                        section7_p_review: "We recommend that you periodically review this Privacy Policy to stay informed about how we protect your information.",
                        section8_title: "8. Contact",
                        section8_p1: "If you have any questions, concerns, or wish to exercise your rights related to this Privacy Policy or the processing of your personal data, please do not hesitate to contact us:",
                        section8_li1: "Email: <a href=\"mailto:isaac.sandi98@gmail.com\">isaac.sandi98@gmail.com</a>",
                        section8_li2: "Dirección postal: [dirección física, si aplica]",
                        section8_p3: "This policy has been prepared considering best practices and examples of privacy policies for legal service websites and has been adapted to comply with GDPR requirements, based on the information available on the `LegalCoder` site."
                    },
                    footer: {
                        rights: "Todos los derechos reservados."
                    }
                }
            }
        }
    }, function(err, t) {
        updateContent();
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            let translatedText = i18next.t(key);
            
            // For the page title, update the <title> tag
            if (element.tagName === 'TITLE') {
                element.textContent = translatedText;
            } else {
                element.innerHTML = translatedText;
            }
        });
        // Update the lang attribute of the HTML element
        document.documentElement.lang = i18next.language;
    }

    document.getElementById('lang-es').addEventListener('click', () => {
        i18next.changeLanguage('es', updateContent);
        localStorage.setItem('i18nextLng', 'es'); // Save language preference
    });

    document.getElementById('lang-en').addEventListener('click', () => {
        i18next.changeLanguage('en', updateContent);
        localStorage.setItem('i18nextLng', 'en'); // Save language preference
    });

    // Set initial language based on browser preference or a saved setting
    const userLang = navigator.language || navigator.userLanguage;
    const initialLang = localStorage.getItem('i18nextLng') || (userLang.startsWith('es') ? 'es' : 'en');
    i18next.changeLanguage(initialLang, updateContent);
});