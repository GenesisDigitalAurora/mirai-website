import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AvisosLegales() {
  return (
    <>
      <Head>
        <title>Avisos Legales - MIRAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Avisos legales, condiciones de uso, aviso de privacidad y política de cookies de MIRAI" />
        <meta property="og:title" content="Avisos Legales - MIRAI" />
        <meta property="og:description" content="Avisos legales, condiciones de uso, aviso de privacidad y política de cookies de MIRAI" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Título Principal */}
            <div className="text-center mb-12">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#921B95' }}
              >
                Avisos Legales
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Información legal importante sobre el uso de nuestro sitio web, 
                política de privacidad y uso de cookies.
              </p>
            </div>

            {/* Anchor para Condiciones de Uso */}
            <div id="condiciones-uso" className="h-0 -mt-24 pt-24"></div>
            
            {/* Condiciones de Uso */}
            <section className="mb-16">
              <div className="p-6 md:p-8">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#921B95' }}
                >
                  Condiciones de Uso
                </h2>
                
                <div className="space-y-6 text-black leading-relaxed text-sm md:text-base text-justify">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      1. Identidad del titular
                    </h3>
                    <p className="mb-4">
                      El sitio web www.mirai.legal (el "Sitio Web") es propiedad y está administrado por 
                      Asesores Legales Mirai, Sociedad Civil ("Mirai"). Mirai es una sociedad con domicilio 
                      social en Córdoba 42, piso 5, Suite B, Alcaldía Cuauhtémoc, C.P. 06700. CDMX.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      2. Aceptación del usuario
                    </h3>
                    <p className="mb-4">
                      Al acceder y navegar por este Sitio Web, el usuario acepta de manera expresa estas 
                      Condiciones de uso, nuestra Política de privacidad y nuestra 
                      Política de cookies. Con este acto, el usuario reconoce haber leído y comprendido 
                      los términos que rigen su navegación por el Sitio Web.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      3. Propiedad intelectual e industrial
                    </h3>
                    <p className="mb-4">
                      Mirai posee todos los derechos de propiedad intelectual e industrial sobre el Sitio Web y sus contenidos. 
                      Mirai no transfiere al usuario ningún derecho de propiedad intelectual o industrial sobre los elementos 
                      del Sitio Web. El usuario sólo está autorizado a visualizar el contenido para su uso personal y privado. 
                      Se prohíbe de forma expresa la reproducción, distribución o comunicación pública de los contenidos del 
                      Sitio Web por cualquier medio o procedimiento, a menos que Mirai lo autorice explícitamente 
                      o la ley lo permita.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      4. Acceso al sitio web
                    </h3>
                    <p className="mb-4">
                      Para navegar por el Sitio Web, no es necesario que el usuario se registre ni facilite datos personales 
                      a Mirai. Sin embargo, para acceder a ciertos servicios, el usuario deberá registrarse mediante un 
                      formulario específico y proporcionar algunos datos personales. En cada formulario, se le pedirá al 
                      usuario que acepte una cláusula de privacidad que contendrá toda la información necesaria sobre el 
                      tratamiento de sus datos. Mirai implementa y mantendrá las medidas técnicas y organizativas adecuadas 
                      para proteger los datos personales del usuario, evitando su alteración, pérdida o acceso no autorizado. 
                      Dichas medidas cumplen con la normativa aplicable, considerando el estado de la técnica y los riesgos 
                      inherentes a la naturaleza de los datos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      5. Uso correcto del sitio web
                    </h3>
                    <p className="mb-4">
                      El contenido del Sitio Web, creado por Mirai, tiene un carácter meramente informativo y puede ser 
                      modificado o eliminado en cualquier momento sin previo aviso. Este material podría no estar actualizado, 
                      por lo que no debe considerarse un sustituto del asesoramiento profesional. El usuario no debe basarse 
                      en la información del Sitio Web para tomar decisiones sin consultar a un profesional previamente. 
                      El acceso al material del Sitio Web no establece ninguna relación profesional o de otro tipo entre 
                      Mirai y el usuario. El usuario se compromete a utilizar el Sitio Web de acuerdo con estas 
                      Condiciones de uso, nuestra Política de privacidad, nuestra 
                      Política de cookies, y a actuar siempre de buena fe, respetando la normativa 
                      aplicable y el orden público. Queda prohibido utilizar el Sitio Web con fines ilícitos o de manera 
                      que pueda interferir, impedir o dañar su funcionamiento normal o el de sus contenidos. El usuario 
                      también se abstendrá de dañar los bienes y derechos de Mirai o de otros usuarios.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      6. Uso internacional
                    </h3>
                    <p className="mb-4">
                      El usuario que acceda al Sitio Web desde un país que no sea México lo hará bajo su propia responsabilidad. 
                      Es su obligación cumplir con las leyes del país desde el que accede.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      7. Modificación de las condiciones de uso
                    </h3>
                    <p className="mb-4">
                      Mirai se reserva el derecho de modificar el contenido de estas Condiciones de uso 
                      en cualquier momento y a su entera discreción.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      8. Responsabilidades
                    </h3>
                    <p className="mb-4">
                      Mirai declara que ha tomado y continuará tomando todas las medidas necesarias y razonables, 
                      dentro de sus posibilidades tecnológicas, para garantizar el correcto funcionamiento del Sitio Web. 
                      No obstante, Mirai no se hace responsable de los posibles daños que puedan derivarse 
                      de desconexiones, interferencias o interrupciones en el acceso al Sitio Web. Tampoco asume responsabilidad 
                      por los daños al usuario o a terceros causados por la existencia y propagación de virus informáticos 
                      u otros elementos maliciosos. Mirai tampoco será responsable de los errores u omisiones en el contenido 
                      del Sitio Web, ni de las acciones que el usuario pueda tomar basándose en dicho contenido.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      9. Enlaces a terceros
                    </h3>
                    <p className="mb-4">
                      Estas Condiciones de uso no aplican a los enlaces, sitios web o aplicaciones de 
                      terceros a los que se pueda acceder a través del Sitio Web. Dichos enlaces se ofrecen únicamente 
                      para la conveniencia del usuario y no implican una recomendación o aprobación de su contenido por 
                      parte de Mirai. Es responsabilidad del usuario leer y aceptar las condiciones de 
                      uso y políticas de privacidad de los sitios web enlazados. Mirai no asume ninguna responsabilidad 
                      derivada de ellos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      10. Comunicaciones
                    </h3>
                    <p className="mb-4">
                      Para cualquier consulta relacionada con estas Condiciones de uso, el usuario puede 
                      contactar a Mirai a través de la dirección de correo electrónico: 
                      contacto@mirai.legal
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      11. Nulidad e ineficacia
                    </h3>
                    <p className="mb-4">
                      Si alguna cláusula de estas Condiciones de uso es declarada total o parcialmente nula o ineficaz, 
                      dicha nulidad o ineficacia sólo afectará a esa disposición o a la parte correspondiente. Las demás 
                      cláusulas seguirán siendo válidas y plenamente vigentes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      12. Ley aplicable y jurisdicción
                    </h3>
                    <p className="mb-4">
                      La relación entre Mirai y el usuario se rige por la legislación mexicana. 
                      Cualquier disputa o controversia será sometida a los tribunales competentes de la Ciudad de México. 
                      Mirai ejercerá todas las acciones civiles y penales que le correspondan para perseguir cualquier 
                      incumplimiento de estas Condiciones de uso y cualquier uso indebido del Sitio Web.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Anchor para Aviso de Privacidad */}
            <div id="aviso-privacidad" className="h-0 -mt-24 pt-24"></div>
            
            {/* Aviso de Privacidad Integral */}
            <section className="mb-16">
              <div className="p-6 md:p-8">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#921B95' }}
                >
                  Aviso de Privacidad Integral
                </h2>
                
                <div className="space-y-6 text-black leading-relaxed text-sm md:text-base text-justify">
                  <div>
                    <p className="mb-4">
                      En cumplimiento de lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión 
                      de los Particulares (en lo sucesivo, la "Ley") y demás disposiciones aplicables, 
                      se informa a clientes, proveedores, empleados, visitantes, candidatos y cualquier otra persona 
                      titular de datos personales, lo siguiente:
                    </p>
                    <p className="mb-4">
                      Asesores Legales Mirai, S.C. (en lo sucesivo, "Mirai"), con 
                      domicilio en Córdoba 42, Piso 5, Suite "B", Colonia Roma Norte, Código Postal 06700, en esta 
                      Ciudad de México, México, y correo electrónico contacto@mirai.legal, es responsable del tratamiento 
                      de sus datos personales conforme a los principios de licitud, consentimiento, información, calidad, 
                      finalidad, lealtad, proporcionalidad y responsabilidad previstos por la Ley.
                    </p>
                    <p className="mb-4">
                      Nosotros nos encargamos de proteger y salvaguardar sus datos personales para evitar el daño, 
                      pérdida, destrucción, robo, extravío, alteración, así como el tratamiento no autorizado de los mismos.
                    </p>
                    <p className="mb-4">
                      Mirai podrá recabar datos personales de forma directa, personal, electrónica, verbal, 
                      escrita o por cualquier otro medio legalmente permitido. La información recopilada dependerá de la 
                      relación entre el titular y Mirai, y se utilizará para las finalidades que se 
                      señalan a continuación:
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      ¿Qué información recopilamos?
                    </h3>
                    <p className="mb-4">
                      En Mirai recopilamos los datos que usted libre y voluntariamente nos proporcione, mediante nuestros 
                      servicios, en línea, por escrito, vía telefónica, por redes sociales y/o por otros medios, mismos 
                      que podrán incluir de manera enunciativa más no limitativa: (i) datos personales, 
                      (ii) datos laborales; y, (iii) datos patrimoniales y financieros. 
                      Así mismo y sólo en caso de ser aplicable, podremos recabar a través de la información que usted nos 
                      proporcione, algunos datos personales en general y datos laborales según corresponda, de terceros 
                      como sus hijos, cónyuge, tarjetahabientes adicionales que usted designe, así como referencias 
                      personales para fines de consulta y verificación de sus datos, para cerciorarnos de que los datos 
                      personales que usted libremente proporciona, son correctos y actuales.
                    </p>
                    <p className="mb-4">
                      Igualmente, y de acuerdo a nuestras políticas, podremos requerirle copia de su identificación 
                      oficial con fotografía, comprobante de su domicilio u otros documentos, dependiendo el trámite 
                      legal requerido o para la resolución de ciertos trámites.
                    </p>
                    <p className="mb-4">
                      Tratándose de los terceros cuyos datos personales recopilamos a través de usted, igualmente tomamos 
                      las medidas de seguridad y de confidencialidad para el tratamiento de su información, de conformidad 
                      con los términos y condiciones en este Aviso de Privacidad.
                    </p>
                    <p className="mb-4">
                      Mirai únicamente utilizará dispositivos de almacenamiento y recuperación de datos 
                      ('Cookies') cuando el usuario haya dado su consentimiento previo para ello de acuerdo con lo que se 
                      indica en la ventana emergente del navegador del usuario cuando accede por primera vez a la Web y en 
                      los demás términos y condiciones que se indican en la Política de Cookies de Mirai que todo usuario 
                      debe conocer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      1. Finalidades del tratamiento
                    </h3>
                    <p className="mb-3">Los datos personales serán tratados para las siguientes finalidades primarias:</p>
                    <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
                      <li>Prestación de servicios profesionales en materia jurídica y corporativa.</li>
                      <li>Cumplimiento de obligaciones contractuales, legales o fiscales.</li>
                      <li>Contacto, identificación y verificación de identidad.</li>
                      <li>Administración de relaciones laborales, comerciales o profesionales.</li>
                      <li>Gestión de recursos humanos, procesos de reclutamiento, evaluación, selección y, en su caso, contratación de personal.</li>
                      <li>Seguridad física y control de acceso en instalaciones de MIRAI.</li>
                    </ul>
                    <p className="mb-3">Y para las siguientes finalidades secundarias:</p>
                    <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
                      <li>Evaluación de la calidad del servicio.</li>
                      <li>Envío de comunicaciones institucionales o promocionales.</li>
                      <li>Elaboración de análisis estadísticos y de control interno.</li>
                    </ul>
                    <p className="mb-4">
                      En caso de que no desee que sus datos sean tratados para finalidades secundarias, puede manifestarlo 
                      a través del correo electrónico contacto@mirai.legal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      2. Datos personales recabados
                    </h3>
                    <p className="mb-4">
                      Dependiendo de la relación con Mirai, se podrán recabar datos de identificación, contacto, laborales, 
                      académicos, patrimoniales, financieros y, en su caso, datos sensibles como información sobre salud, 
                      discapacidad, orientación sexual o identidad de género, exclusivamente para el cumplimiento de 
                      obligaciones legales o con fines de inclusión, igualdad laboral y no discriminación.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      3. Transferencias de datos personales
                    </h3>
                    <p className="mb-3">
                      Mirai podrá transferir sus datos personales a terceros nacionales o extranjeros sin requerir su 
                      consentimiento en los supuestos previstos por la Ley, incluyendo:
                    </p>
                    <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
                      <li>Autoridades competentes que los soliciten.</li>
                      <li>Entidades del mismo grupo corporativo bajo las mismas políticas de privacidad.</li>
                      <li>Proveedores de servicios tecnológicos o administrativos (incluyendo plataformas como Notion) que actúen por cuenta de Mirai.</li>
                    </ul>
                    <p className="mb-4">
                      Toda transferencia se realizará garantizando que los terceros asuman las mismas obligaciones de 
                      confidencialidad y protección de datos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      4. Ejercicio de derechos ARCO
                    </h3>
                    <p className="mb-3">
                      Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales 
                      (derechos ARCO), así como a limitar su uso o revocar el consentimiento otorgado. Para ejercer estos 
                      derechos, deberá enviar una solicitud al correo electrónico contacto@mirai.legal con:
                    </p>
                    <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
                      <li>Nombre completo y medio de contacto.</li>
                      <li>Copia de una identificación oficial.</li>
                      <li>Descripción clara de los datos respecto de los cuales desea ejercer sus derechos.</li>
                      <li>Documentación que sustente su solicitud, en caso de ser necesario.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      5. Seguridad y conservación
                    </h3>
                    <p className="mb-4">
                      Mirai implementa medidas de seguridad técnicas, físicas y administrativas para proteger sus datos 
                      personales contra daño, pérdida, alteración, destrucción o uso no autorizado. Los datos se conservarán 
                      durante el tiempo que resulte necesario para cumplir con las finalidades señaladas y conforme a las 
                      disposiciones legales aplicables.
                    </p>
                    <p className="mb-4">
                      Mirai adopta los niveles de seguridad adecuados a la naturaleza de los datos que son objeto de 
                      tratamiento en cada momento. No obstante lo anterior, la seguridad técnica en un medio como Internet 
                      no es inexpugnable y pueden existir actuaciones dolosas de terceros, si bien Mirai pone todos los 
                      medios a su alcance para evitar dichas actuaciones.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      6. Uso de cookies
                    </h3>
                    <p className="mb-4">
                      El sitio web de Mirai puede utilizar cookies para mejorar la experiencia del usuario. Usted puede 
                      configurar su navegador para restringir o deshabilitar el uso de cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      7. Modificaciones al Aviso de Privacidad
                    </h3>
                    <p className="mb-4">
                      MIRAI podrá modificar este Aviso de Privacidad en cualquier momento. Las modificaciones serán 
                      informadas mediante su publicación en el sitio web de MIRAI o por los medios que se consideren adecuados.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      8. Menores e Incapaces
                    </h3>
                    <p className="mb-4">
                      MIRAI es un despacho comprometido con la privacidad de los menores e incapaces; por ello, no recabamos 
                      intencionalmente ni tratamos datos personales de menores e incapaces cuando no se cuenta con el 
                      consentimiento expreso de sus padres, tutores o representantes legales. Si usted es padre, tutor o 
                      representante legal de un menor o incapaz y sabe que nos ha proporcionado datos personales sin su 
                      consentimiento, podrá solicitar que los mismos sean cancelados a la siguiente dirección de correo 
                      electrónico <strong>contacto@mirai.legal</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      9. Jurisdicción
                    </h3>
                    <p className="mb-4">
                      Ante cualquier controversia e interpretación del presente Aviso de Privacidad, el Usuario acepta 
                      someterse a las leyes mexicanas y a los tribunales locales o federales que se encuentren en la 
                      Ciudad de México, México, renunciando a cualquier fuero que, debido a su domicilio actual o futuro, 
                      o cualquier otro pudiera corresponderle.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      10. Consentimiento
                    </h3>
                    <p className="mb-4">
                      Cuando usted visita nuestro sitio web o páginas relacionadas, nos provee de sus datos personales o 
                      interactúa con nuestros servicios nos da su consentimiento para el tratamiento de datos personales, 
                      de acuerdo con los términos de este Aviso de Privacidad.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#921B95' }}>
                      11. Fecha de última actualización
                    </h3>
                    <p className="mb-4">
                      Agosto 2025<br/>
                      Para cualquier duda o aclaración respecto al tratamiento de sus datos personales, puede escribir a 
                       contacto@mirai.legal.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Anchor para Aviso de Cookies */}
            <div id="aviso-cookies" className="h-0 -mt-24 pt-24"></div>
            
            {/* Aviso de uso de Cookies */}
            <section className="mb-16">
              <div className="p-6 md:p-8">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#921B95' }}
                >
                  Aviso de Uso de Cookies
                </h2>
                
                <div className="space-y-6 text-black leading-relaxed text-sm md:text-base text-justify">
                  <div>
                    <p className="mb-4">
                      En esta política, te explicamos qué son las cookies y otras tecnologías similares, 
                      cómo las utilizamos en nuestro servicio y cómo puedes gestionarlas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#1E1E1E' }}>
                      1. Información General sobre Cookies
                    </h3>
                    
                    <h4 className="text-base md:text-lg font-semibold mb-2" style={{ color: '#921B95' }}>
                      ¿Qué son las cookies y tecnologías similares?
                    </h4>
                    <p className="mb-4">
                      Las cookies son pequeños archivos de texto o imagen que se instalan en tu navegador 
                      o dispositivo cuando accedes a un servicio en línea. Permiten, entre otras cosas, recordar información 
                      sobre ti, tu navegador, tus dispositivos y tu actividad en el servicio. Además de las cookies, existen 
                      otras tecnologías con funciones similares, como píxeles, web bugs, almacenamiento HTML5, objetos 
                      locales compartidos (flash cookies), Etags, Canvas fingerprinting, detección de fuentes y caché 
                      del navegador, así como WebGL. Estas tecnologías nos ayudan a medir la actividad en nuestro servicio, 
                      optimizar el uso de ancho de banda o identificar de forma única tu equipo.
                    </p>

                    <h4 className="text-base md:text-lg font-semibold mb-2" style={{ color: '#921B95' }}>
                      ¿Qué tipos de cookies existen?
                    </h4>
                    <p className="mb-3">
                      Las cookies se pueden clasificar de diversas maneras, según quién las gestiona, cuánto tiempo 
                      permanecen activas y con qué finalidad se utilizan:
                    </p>

                    <div className="ml-4 space-y-4">
                      <div>
                        <h5 className="font-semibold text-black mb-2">a) Según la entidad que las gestiona:</h5>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Cookies propias: Son aquellas que enviamos a tu dispositivo directamente desde nuestro dominio y son gestionadas por nosotros.</li>
                          <li>Cookies de terceros: Son aquellas que se envían a tu dispositivo desde un equipo o dominio que no es gestionado por nosotros, sino por un tercero que procesa la información obtenida a través de las cookies (por ejemplo, Google).</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-black mb-2">b) Según el tiempo que permanecen activas:</h5>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Cookies de sesión: Se utilizan para recopilar y almacenar datos mientras accedes a un servicio y se eliminan una vez que cierras el navegador.</li>
                          <li>Cookies persistentes: Permanecen en tu dispositivo por un período de tiempo determinado, que puede variar desde unos minutos hasta varios años. Se utilizan para recordar tus preferencias o ciertos parámetros cada vez que visitas un servicio.</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-black mb-2">c) Según su finalidad:</h5>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Cookies técnicas: Son esenciales y estrictamente necesarias para el correcto funcionamiento de nuestro servicio. Permiten el mantenimiento de la sesión, la gestión del tiempo de respuesta, el rendimiento y el uso de elementos de seguridad, entre otras funciones.</li>
                          <li>Cookies de personalización: Te permiten especificar o personalizar ciertas características del servicio, como el idioma o la configuración regional.</li>
                          <li>Cookies analíticas: Nos permiten contar el número de visitantes únicos y analizar cómo se utiliza nuestro servicio para medir el interés en él o en áreas específicas. Por ejemplo, nos ayudan a identificar las regiones geográficas desde donde se conectan más usuarios o qué productos o servicios son más populares.</li>
                          <li>Cookies publicitarias: Se utilizan para gestionar los espacios publicitarios en nuestro servicio.</li>
                          <li>Cookies de publicidad comportamental: Almacenan información sobre tu comportamiento en nuestro servicio para mostrarte publicidad personalizada.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#1E1E1E' }}>
                      2. Información Específica
                    </h3>
                    
                    <h4 className="text-base md:text-lg font-semibold mb-2" style={{ color: '#921B95' }}>
                      ¿Quién es el responsable de este servicio?
                    </h4>
                    <p className="mb-4">
                      Este servicio es responsabilidad de Asesores Legales Mirai, Sociedad Civil, con 
                      domicilio en Córdoba 42, piso 5, Suite B, Alcaldía Cuauhtémoc, C.P. 06700, CDMX. La información 
                      obtenida a través de algunas de nuestras cookies se almacena en servidores de Google, ubicados en 
                      Estados Unidos. Es importante que sepas que la legislación de Estados Unidos no garantiza un nivel 
                      de protección de datos considerado adecuado por las autoridades europeas.
                    </p>
                    <p className="mb-4">
                      Al consentir el uso de estas cookies, también consientes la transferencia internacional de tus datos 
                      personales a Google en Estados Unidos. Google está adscrito a la herramienta Web Choices, 
                      que te permite deshabilitar el uso de sus cookies: http://optout.aboutads.info/. Además, puedes evitar 
                      la instalación de cookies de Google Analytics utilizando la extensión específica para tu navegador.
                    </p>

                    <h4 className="text-base md:text-lg font-semibold mb-2" style={{ color: '#921B95' }}>
                      ¿Cómo deshabilitar o eliminar las cookies?
                    </h4>
                    <p className="mb-3">
                      Cuando accedas a nuestro servicio por primera vez, verás un aviso de cookies que te informará sobre 
                      cómo aceptar o rechazar su uso. Si en algún momento has dado tu consentimiento, puedes deshabilitar 
                      o eliminar las cookies a través de la configuración de tu navegador. Aquí te dejamos enlaces útiles 
                      para los navegadores más comunes:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4 space-y-1 text-sm">
                      <li>Configuración de cookies para Google Chrome</li>
                      <li>Configuración de cookies para Mozilla Firefox</li>
                      <li>Configuración de cookies para Internet Explorer</li>
                      <li>Configuración de cookies para Safari</li>
                      <li>Configuración de cookies para Microsoft Edge</li>
                    </ul>
                    <p className="mb-4">
                      Es importante que sepas que si rechazas o eliminas las cookies, no podremos mantener tus preferencias 
                      y algunas funcionalidades podrían no estar disponibles. Esto significa que no podremos ofrecerte 
                      servicios personalizados y, cada vez que uses el servicio, aparecerás como un nuevo usuario y se te 
                      solicitará nuevamente tu autorización para el uso de cookies.
                    </p>

                    <h4 className="text-base md:text-lg font-semibold mb-2" style={{ color: '#921B95' }}>
                      ¿Cómo afecta el uso de cookies a la protección de tus datos personales?
                    </h4>
                    <p className="mb-4">
                      La mayoría de las cookies recopilan información anónima que no permite identificarte directamente. 
                      Sin embargo, algunos códigos incluidos en ellas pueden singularizar o individualizar el navegador 
                      de tu dispositivo, lo que podría implicar la aplicación de la normativa de protección de datos 
                      personales. Por ello, te informamos que la información obtenida a través de las cookies será tratada 
                      con las finalidades indicadas en esta Política de Cookies.
                    </p>
                    <p className="mb-4">
                      Esta información también será procesada por las empresas que proveen las cookies, según lo establecido 
                      en sus respectivas políticas de privacidad. Dado que estos códigos no permiten tu identificación 
                      directa, los derechos de acceso, rectificación, supresión, oposición, limitación o portabilidad 
                      reconocidos en la normativa de protección de datos no serán aplicables, a menos que puedas proporcionar 
                      información adicional que vincule tu identidad con los códigos identificativos de tus cookies.
                    </p>
                    <p className="mb-4">
                      Si consideras que tus derechos de protección de datos han sido vulnerados, puedes presentar una 
                      reclamación ante la autoridad competente.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs md:text-sm text-black">
                      Responsable: Asesores Legales Mirai, Sociedad Civil<br/>
                      Domicilio: Córdoba 42, piso 5, Suite B, Alcaldía Cuauhtémoc, C.P. 06700, CDMX<br/>
                      Contacto: Para más información, puedes contactarnos en contacto@mirai.legal
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Información de contacto destacada */}
            <section>
              <div 
                className="p-6 rounded-lg text-center"
                style={{ backgroundColor: '#921B95' }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  ¿Tienes dudas sobre nuestros avisos legales?
                </h3>
                <p className="text-white mb-4 text-sm md:text-base">
                  Contáctanos para cualquier consulta relacionada con nuestras políticas legales.
                </p>
                <a
                  href="mailto:contacto@mirai.legal"
                  className="inline-block bg-white text-[#921B95] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base"
                >
                  contacto@mirai.legal
                </a>
              </div>
            </section>

          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
}
