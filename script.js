document.addEventListener('DOMContentLoaded', function() {
    // Contenido para Historia, Características y Rol
    const historyContent = `
        <h2>Historia</h2>
        <p><strong>¿Sabías que hace 13 años, nuestro perro “Palomo” llegó a las instalaciones de COLESH una mañana de junio del 2011?</strong></p>
        <p>El nombre Palomo, por su color de pelaje, se lo pusieron los vigilantes que en aquel año laboraban en la escuela. A las pocas semanas de su llegada él ya obedecía por ese nombre y de manera natural se unió a la manada de perros que ya vivían en COLESH.</p>
        <p>Palomo está cumpliendo 14 años de su llegada a COLESH, desconocemos su edad exacta, quizá 15 o 16 años, pero ha acompañado a la comunidad escolar todo ese tiempo, incluso cuando se quedó solo en la escuela durante la pandemia con su compañera Ruby, otra perrita que, desafortunadamente envenenaron en el año 2022.</p>
        <p>Palomo ha sido fiel acompañante de más de 25 generaciones de estudiantes de bachillerato, licenciatura y maestría que ya egresaron. Él es un perro en extremo noble, cariñoso, fiel y respetuoso que cada año le da la bienvenida a los nuevos estudiantes a este plantel.</p>
        <p>A partir de un primer dibujo de Palomo hecho por un estudiante de bachillerato, sus compañeros del grupo de 6 cuatrimestre, "A", modalidad escolarizada, propusieron que nuestro perrito fuera la mascota oficial de COLESH, sugiriendo llamarnos "COLESH labradores" por el parecido de palomo con un perro de raza labrador.</p>
    `;
    const characteristicsContent = `
        <h2>Características</h2>
        <div class="feature-buttons">
            <button class="toggle-btn" data-target="nobility-details">Nobleza</button>
            <button class="toggle-btn" data-target="affection-details">Cariñoso</button>
            <button class="toggle-btn" data-target="loyalty-details">Fiel</button>
            <button class="toggle-btn" data-target="respect-details">Respetuoso</button>
            <button class="toggle-btn" data-target="resilience-details">Resiliente</button>
        </div>
        <div id="nobility-details" class="hidden-content">
            <p>Palomo es conocido por su nobleza, demostrada a través de su comportamiento tranquilo y su disposición para estar al lado de los estudiantes y el personal en todo momento. Su naturaleza pacífica lo convierte en un compañero confiable en el plantel.</p>
        </div>
        <div id="affection-details" class="hidden-content">
            <p>Palomo siempre ha mostrado afecto hacia los estudiantes y el personal de COLESH. Su presencia reconfortante y su capacidad para brindar cariño incondicional han sido una constante fuente de apoyo emocional para la comunidad escolar.</p>
        </div>
        <div id="loyalty-details" class="hidden-content">
            <p>La lealtad de Palomo es evidente en su dedicación constante a la escuela. A pesar de los desafíos y cambios en el personal y los estudiantes, siempre se ha mantenido fiel a su hogar en COLESH.</p>
        </div>
        <div id="respect-details" class="hidden-content">
            <p>Palomo es respetuoso tanto con los humanos como con otros animales en el campus. Su comportamiento ejemplar demuestra una gran consideración y cortesía, características que reflejan el respeto que promueve nuestra escuela.</p>
        </div>
        <div id="resilience-details" class="hidden-content">
            <p>Palomo ha mostrado una notable resiliencia, adaptándose a diferentes entornos y situaciones a lo largo de los años. Su capacidad para superar adversidades y mantenerse positivo es una inspiración para todos en COLESH.</p>
        </div>
    `;
    const roleContent = `
        <h2>Rol</h2>
        <div class="role-buttons">
            <button class="toggle-btn" data-target="welcome-details">Bienvenida a los Nuevos Estudiantes</button>
            <button class="toggle-btn" data-target="companion-details">Acompañante</button>
            <button class="toggle-btn" data-target="unity-symbol-details">Símbolo de Unidad</button>
            <button class="toggle-btn" data-target="emotional-support-details">Apoyo Emocional</button>
            <button class="toggle-btn" data-target="official-mascot-details">Mascota Oficial</button>
        </div>
        <div id="welcome-details" class="hidden-content">
            <p>Palomo juega un papel fundamental en la bienvenida a los nuevos estudiantes, siendo el primer amigo que encuentran al llegar a COLESH. Su presencia amigable ayuda a suavizar la transición para los recién llegados.</p>
        </div>
        <div id="companion-details" class="hidden-content">
            <p>Como acompañante constante, Palomo está siempre presente en los momentos importantes del año escolar, ofreciendo su compañía y creando un ambiente más acogedor y familiar.</p>
        </div>
        <div id="unity-symbol-details" class="hidden-content">
            <p>Palomo es visto como un símbolo de unidad dentro de COLESH. Su relación con los estudiantes y el personal refleja los valores de comunidad y cohesión que nuestra institución promueve.</p>
        </div>
        <div id="emotional-support-details" class="hidden-content">
            <p>Palomo proporciona apoyo emocional a estudiantes y personal. Su presencia tranquila y amigable ofrece un respiro en momentos de estrés, ayudando a mantener un ambiente positivo.</p>
        </div>
        <div id="official-mascot-details" class="hidden-content">
            <p>Palomo es la mascota oficial de COLESH, representando el espíritu y los valores de nuestra escuela. Su imagen se utiliza en diversos eventos y materiales para promover la identidad institucional.</p>
        </div>
    `;

    // Agregar contenido al DOM
    document.getElementById('content-left').innerHTML = historyContent;

    // Función para manejar el cambio de contenido y el botón activo
    function handleButtonClick(buttons, contentId, activeClass) {
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Ocultar todos los contenidos
                document.querySelectorAll('.hidden-content').forEach(content => {
                    content.classList.remove('active');
                });
                // Mostrar el contenido correspondiente
                document.getElementById(this.getAttribute('data-target')).classList.add('active');
                // Desactivar todos los botones
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });
                // Activar el botón clicado
                this.classList.add('active');
            });
        });
    }

    // Botones de la sección de Historia
    document.getElementById('history-btn').addEventListener('click', function() {
        document.getElementById('content-left').innerHTML = historyContent;
        document.getElementById('image-right').innerHTML = ''; // Limpia la imagen derecha
    });

    // Botones de la sección de Características
    document.getElementById('characteristics-btn').addEventListener('click', function() {
        document.getElementById('content-left').innerHTML = characteristicsContent;
        document.getElementById('image-right').innerHTML = ''; // Limpia la imagen derecha
        handleButtonClick(document.querySelectorAll('.feature-buttons .toggle-btn'), null, 'active');
    });

    // Botones de la sección de Rol
    document.getElementById('role-btn').addEventListener('click', function() {
        document.getElementById('content-left').innerHTML = roleContent;
        document.getElementById('image-right').innerHTML = ''; // Limpia la imagen derecha
        handleButtonClick(document.querySelectorAll('.role-buttons .toggle-btn'), null, 'active');
    });
});
