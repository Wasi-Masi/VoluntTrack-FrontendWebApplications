# VolunTrack
<p align="center">  <img src="https://imgur.com/IFP8FSt.png" alt="logoupc" width="100"></p>

<p align="center">Universidad: Universidad Peruana de Ciencias Aplicadas (UPC)</p>
<p align="center">Carrera: Ingeniería de Software</p>
<p align="center">Ciclo: 05</p>
<p align="center">Desarrollo de Aplicaciones Open Source 1ASI0729</p>
<p align="center">Sección 4346</p>
<p align="center">Profesor: Rafael Oswaldo Castro Veramendi</p>

<p align="center"><strong>Informe del Trabajo Final</strong></p>

<p align="center">Wasi Masi</p>
<p align="center">Binda Arbañil, Marcelo Alejandro U202311157</p>
<p align="center">Castillo Garay, Ainhoa Lucía U202311701</p>
<p align="center">Martel Andrade, Cassius Estefano U202312287</p>
<p align="center">Nakamurake Teruya, Alex Tomio U20201f855</p>
<p align="center">Ortiz Alarcón, Victor Nicolás U202312899</p>

<p align="center">Abril 2025</p>

# Registro de versiones del informe

| Versión  | Fecha       | Autor/es                                                                                                                                  | Descripción                                                                                   |
|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| 1.0 (TB1) | 27/04/2024  | - Binda Arbañil, Marcelo Alejandro<br>- Castillo Garay, Ainhoa Lucía<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás | Capítulo I: Introducción<br>Capítulo II: Requirements Elicitation & Analysis<br>Capítulo III: Requirements Specification<br>Capítulo IV: Product Design<br>Capítulo V: Product Implementation, Validation & Deployment |

# Project Report Collaboration Insights

Repositorio donde está el project report: https://github.com/Wasi-Masi/VoluntTrack-FrontendWebApplications
Para la elaboración del informe, inicialmente trabajamos en un documento compartido de Google Docs y posteriormente trasladamos el contenido al README del repositorio principal. A cada miembro del equipo se le asignó la responsabilidad de subir un capítulo.

# Contenido
- [Voluntrack](#voluntrack)
  
- [Registro de versiones de informe](#registro-de-versiones-del-informe)

- [Project Report Collaboration Insights](#project-report-collaboration-insights)

- [Contenido](#contenido)

- [Student Outcome](#student-outcome)

- [CAPÍTULO 1: INTRODUCCIÓN](#capítulo-1-introducción)
  * [1.1. Startup Profile](#11-startup-profile)
    + [1.1.1. Descripción del Startup](#111-descripción-del-startup)
    + [1.1.2. Perfiles de los integrantes del equipo](#112-perfiles-de-los-integrantes-del-equipo)
  * [1.2. Solution Profile](#12-solution-profile)
    + [1.2.1. Antecedentes y Problemática](#121-antecedentes-y-problemática)
    + [1.2.2. Lean UX Process](#122-lean-ux-process)
      - [1.2.2.1. Lean UX Problem Statements](#1221-lean-ux-problem-statements)
      - [1.2.2.2. Lean UX Assumptions](#1222-lean-ux-assumptions)
      - [1.2.2.3. Lean UX Hypothesis Statements](#1223-lean-ux-hypothesis-statements)
      - [1.2.2.4. Lean UX Canvas](#1224-lean-ux-canvas)
  * [1.3. Segmentos Objetivo](#13-segmentos-objetivo)

- [CAPÍTULO 2: REQUIREMENTS ELICITATION & ANALYSIS](#capítulo-2-requirements-elicitation--analysis)
  * [2.1. Competidores](#21-competidores)
    + [2.1.1. Análisis Competitivo](#211-análisis-competitivo)
    + [2.1.2. Estrategias y tácticas frente a los competidores](#212-estrategias-y-tácticas-frente-a-los-competidores)
  * [2.2. Entrevistas](#22-entrevistas)
    + [2.2.1. Diseño de entrevistas](#221-diseño-de-entrevistas)
    + [2.2.2. Registro de entrevistas](#222-registro-de-entrevistas)
    + [2.2.3. Análisis de entrevistas](#223-análisis-de-entrevistas)
  * [2.3. Needfinding](#23-needfinding)
    + [2.3.1. User Personas](#231-user-personas)
    + [2.3.2. User Task Matrix](#232-user-task-matrix)
    + [2.3.3. User Journey Mapping](#233-user-journey-mapping)
    + [2.3.4. Empathy Mapping](#234-empathy-mapping)
    + [2.3.5. As-Is Scenario Mapping](#235-as-is-scenario-mapping)
  * [2.4 Ubiquitous Language](#24-ubiquitous-language)

# CAPÍTULO 1: INTRODUCCIÓN

## 1.1. Startup Profile

### 1.1.1. Descripción del Startup

Wasi Masi es una startup nacida en la Universidad Peruana de Ciencias Aplicadas comprometida con el fortalecimiento del impacto social a través de la tecnología. A partir de este objetivo, se ha desarrollado el proyecto VolunTrack, una plataforma web diseñada para facilitar la gestión integral del voluntariado en organizaciones sin fines de lucro.
Conscientes de los retos que enfrentan muchas ONGs pequeñas, VolunTrack ofrece una solución práctica, intuitiva y accesible. Desde el registro y búsqueda de voluntarios hasta la generación automática de certificados y envío de notificaciones, la plataforma busca optimizar los procesos internos de las organizaciones para que puedan enfocarse en lo que realmente importa: generar cambio.
Para Wasi Masi, el voluntariado no solo representa ayuda, sino comunidad, compromiso y transformación. A través de VolunTrack, se espera empoderar a más organizaciones sociales a mejorar su gestión y fortalecer su red de apoyo.

**Misión:** Diseñar y ofrecer una plataforma innovadora y accesible que transforme la manera en que las organizaciones gestionan el voluntariado. A través de VolunTrack, se busca facilitar la conexión entre personas dispuestas a ayudar y las causas que lo necesitan, optimizando procesos y fortaleciendo el impacto social de las ONGs.

**Visión:** Convertirse en referentes en soluciones tecnológicas para la gestión del voluntariado, siendo reconocidos por la capacidad de empoderar a organizaciones sociales, conectar comunidades solidarias y contribuir a un mundo más colaborativo, justo y comprometido con el cambio. 

### 1.1.2. Perfiles de los integrantes del equipo


| Nombre | Foto | Carrera | Descripción |
|--------|------|---------|-------------|
| Binda Arbañil, Marcelo Alejandro U202311157 | ![image](https://github.com/user-attachments/assets/b14b7ef3-54ee-486d-8223-f7944cd1e732) | Ingeniería de Software | Soy Marcelo Binda y actualmente me encuentro cursando el quinto ciclo de la carrera de Ingeniería de Software, cuento con conocimientos técnicos en C++. Tengo una gran habilidad para organizar y realizar trabajos con la mayor eficiencia posible. |
| Castillo Garay, Ainhoa Lucía U202311701 | ![image](https://github.com/user-attachments/assets/886d267a-d2ba-4f2e-bd33-7d8c7a7ba653) | Ingeniería de Software | Mi nombre es Ainhoa Castillo y estoy cursando mi cuarto ciclo en la carrera de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC). Me considero una persona activa y responsable. Me gusta trabajar en un ambiente tranquilo y divertido, pero siempre eficaz. Me gusta programar y resolver problemas mediante soluciones creativas. |
| Martel Andrade, Cassius Estefano U202312287 | ![image](https://github.com/user-attachments/assets/6d204cd7-48f9-4648-ba72-2c0328ebbd3d) | Ingeniería de Software | Me llamo Cassius Martel y soy estudiante de Ingeniería de Software, y tengo cierta experiencia usando C++. Me caracterizó por ser una persona con iniciativa y liderazgo, que siempre procura la efectividad de cada integrante del equipo y la realización de un buen trabajo. |
| Nakamurake Teruya, Alex Tomio U20201f855 | ![image](https://github.com/user-attachments/assets/154a072e-92bc-4a6b-958c-2c04a60a616a) | Ingeniería de Software | Mi nombre es Alex Tomio Nakamurakare y soy estudiante de la carrera de Ingeniería de Software de la UPC. El motivo por el cual estoy en esta carrera es debido a que me gusta mucho analizar problemas y crear soluciones mediante el uso de la programación. |
| Ortiz Alarcón, Victor Nicolás U202312899 | ![image](https://github.com/user-attachments/assets/66c8134f-6cae-491c-b6d6-06147f1f3cea) | Ingeniería de Software | Soy estudiante del quinto ciclo de la carrera de ingeniería de software de la universidad UPC y escogí esta carrera porque me interesa el desarrollo de aplicaciones web y base de datos. Me gustan los videojuegos y el deporte. |

## 1.2. Solution Profile

VolunTrack es una plataforma web diseñada para transformar la manera en que las organizaciones gestionan el voluntariado, ofreciendo una solución integral, intuitiva y accesible. Pensada especialmente para ONGs y causas sociales, VolunTrack permite centralizar procesos clave como el registro de voluntarios, la organización de actividades, el seguimiento de participación y la emisión automática de certificados. Al enfocarse en la simplicidad y eficiencia, la plataforma libera a las organizaciones de tareas repetitivas, permitiéndoles concentrarse en lo más importante: generar impacto real en sus comunidades. VolunTrack no solo optimiza la gestión, sino que fortalece la red de apoyo de cada iniciativa solidaria.

### 1.2.1. Antecedentes y Problemática

Según Lean Construction México, la metodología de las 5W’s y 2H’s permite estructurar planes de acción de forma clara y detallada, lo que la convierte en una herramienta valiosa para analizar y entender a fondo las necesidades de los usuarios (Álvarez, 2020). En el desarrollo de VolunTrack, esta metodología fue aplicada con el objetivo de recopilar información clave que guiase el diseño de la plataforma, asegurando que responda de manera efectiva a los desafíos reales que enfrentan las ONGs en la gestión del voluntariado.

#### 1.2.1.1 What

#### ¿Cuál es el problema?

La problemática radica en la ineficaz gestión de los voluntarios y de los recursos dentro de las Organizaciones No Gubernamentales (ONG), especialmente en el contexto actual de aumento en la cantidad de organizaciones civiles y la insuficiencia de apoyo estatal. Esto genera una presión sobre las ONG para optimizar sus recursos humanos, particularmente los voluntarios, quienes representan un porcentaje significativo de la fuerza laboral en el sector (Espinoza, 2012). A pesar del alto interés y participación de los jóvenes en actividades voluntarias, las organizaciones enfrentan dificultades para gestionar de manera eficiente y sostenible a este creciente número de voluntarios, lo que limita su capacidad para cumplir con los objetivos de desarrollo propuestos.

De acuerdo con Alva (2024), un 16% de la población peruana en edad de trabajar participó en algún voluntariado en el año 2023. Esta cifra refleja el interés y la disposición de la población, especialmente la joven, por colaborar en causas altruistas. Sin embargo, a pesar de la alta participación, las ONG enfrentan el desafío de gestionar este gran volumen de voluntarios de manera adecuada, lo que hace aún más urgente la necesidad de implementar prácticas de gestión efectivas que optimicen la experiencia de los voluntarios y contribuyan al cumplimiento de los objetivos organizacionales.

#### ¿Cuál es la relación con la persona en cuestión?

La ineficaz gestión de voluntarios afecta tanto a los voluntarios, quienes experimentan frustración por una mala organización que limita su experiencia, como a los gestores, que enfrentan dificultades para coordinar el creciente número de voluntarios. Esto obstaculiza el cumplimiento de los objetivos de las ONG, afectando su capacidad para generar un impacto positivo. 

#### 1.2.1.2 When

#### ¿Cuándo sucede el problema?

El problema ocurre de forma continua durante las operaciones diarias de las organizaciones sin fines de lucro, especialmente en momentos clave como la convocatoria y el registro de nuevos voluntarios y la organización de actividades. En estas etapas, la ausencia de una herramienta centralizada y eficiente genera desorganización, pérdida de tiempo, errores en el manejo de datos y una carga administrativa adicional para los equipos responsables.

#### ¿Cuándo utiliza el cliente el producto?

Los líderes de las pequeñas ONGs utilizan VolunTrack de manera recurrente como parte de sus operaciones diarias, especialmente en momentos clave como la convocatoria o registro de nuevos voluntarios, la organización de actividades y más. 

#### 1.2.1.3. Where

#### ¿Dónde está el cliente cuando usa el producto?

Debido a que VolunTrack es un sitio web, los usuarios pueden utilizar la plataforma desde cualquier lugar en que se encuentren, principalmente en oficinas, entornos comunitarios o desde sus hogares. La website está diseñada con el objetivo de ser flexible en el entorno digital, de modo que el acceso se puede dar desde distintos dispositivos tecnológicos, tales como celulares, tablets o computadoras.

#### ¿Dónde surge el problema?

El problema surge dentro de las propias organizaciones sin fines de lucro, especialmente en las áreas encargadas de la gestión de voluntariado y coordinación de actividades. En estos espacios, muchas veces se carece de herramientas tecnológicas adecuadas, lo que obliga a realizar procesos clave de manera manual o con recursos poco eficientes, como hojas de cálculo o formularios físicos. Esta situación genera una sobrecarga operativa, dificulta la organización de la información y limita la capacidad de respuesta de las ONGs ante nuevas oportunidades o necesidades sociales.

#### 1.2.1.4. Who

#### ¿Quiénes están involucrados?

En lo que concierne al uso de la plataforma VolunTrack, están involucrados principalmente dos grupos. En primer lugar, los líderes y coordinadores de las ONGs, quienes son los encargados de gestionar el voluntariado, planificar actividades y supervisar la participación. En segundo lugar, están los –existentes, ingresantes y potenciales– voluntarios, quienes desean colaborar activamente con causas sociales y necesitan una manera clara, organizada y accesible de descubrir, inscribirse, participar y hacer seguimiento de este tipo de actividades y eventos.

#### ¿A quiénes le sucede el problema?

El problema de la ineficaz gestión de voluntarios y recursos en organizaciones sin fines de lucro afecta principalmente a los líderes y coordinadores de estas ONGs. Sin una herramienta adecuada, su carga administrativa aumenta considerablemente, lo que puede llevar a errores, desorganización y una menor efectividad en el impacto de las acciones sociales. Además, los voluntarios se ven afectados indirectamente, ya que una gestión ineficaz puede limitar su capacidad de involucrarse de manera significativa.

#### ¿Quién lo utilizará?

VolunTrack será utilizado por los líderes y coordinadores de las ONGs, quienes se encargan de la planificación de actividades, el registro de voluntarios y seguimiento de la participación. Asimismo, la plataforma se aprovechará por los propios participantes de las ONGs que deseen descubrir y participar en eventos y actividades existentes dirigidas por la organización. Por último, VolunTrack actuará como puente entre personas externas interesadas en generar un impacto social, pues podrán acceder a la web para inscribirse como nuevo voluntario en la ONG.

#### 1.2.1.5. Why

#### ¿Cuál es la causa del problema?

Una de las principales causas de la ineficaz gestión de los voluntarios en las ONG es la falta de recursos digitales adecuados para organizar y llevar a cabo las tareas. Sin los recursos necesarios, la ejecución de los proyectos se ve comprometida, lo que dificulta el cumplimiento de los objetivos establecidos. Esto impacta directamente en la eficiencia de la gestión del voluntariado, dificultando la optimización de los recursos humanos y el logro de las metas de la organización (Gutiérrez, s.f.).

#### 1.2.1.6. How

#### ¿En qué condiciones los clientes usan nuestro producto?

VolunTrack será utilizado por los líderes y coordinadores de las ONGs en condiciones de alta demanda y organización, cuando requieran gestionar y planificar actividades de voluntariado, hacer seguimiento a la participación de los voluntarios y generar reportes o certificados. Los voluntarios, por su parte, utilizarán la plataforma cuando busquen oportunidades para involucrarse en eventos y actividades que se alineen con sus intereses y disponibilidad. Además, personas externas, interesadas en generar un impacto social, podrán acceder a VolunTrack para registrarse como nuevos voluntarios, todo esto en un entorno web accesible desde cualquier lugar con conexión a internet.

#### ¿Cómo nos conocieron los compradores?

Los compradores de VolunTrack, principalmente líderes y coordinadores de ONGs, conocieron la plataforma a través de diversos canales de promoción digital, incluyendo campañas en redes sociales, eventos y seminarios web dirigidos a organizaciones sin fines de lucro. Además, se realizaron alianzas estratégicas con asociaciones y comunidades de ONGs, lo que permitió aumentar la visibilidad de VolunTrack dentro del sector. También, las recomendaciones entre organizaciones ya usuarias y los testimonios de voluntarios satisfechos jugaron un papel importante en el descubrimiento de la plataforma. De esta forma, VolunTrack logró generar confianza y captar la atención de las ONGs que buscan una solución eficiente y accesible para gestionar su voluntariado.

#### ¿Cómo prefieren los lectores acceder a nuestro contenido?

Los usuarios de VolunTrack prefieren acceder a la plataforma a través de una interfaz web fácil de usar, que les permita gestionar sus actividades, registrar voluntarios y realizar un seguimiento de la participación desde cualquier dispositivo con acceso a internet. Además, prefieren tener acceso a contenido relevante y útil de manera inmediata, como notificaciones por correo electrónico sobre nuevas actividades, eventos o certificados generados.     

#### ¿Qué llevó a la persona a llegar a esta situación?

Los líderes y coordinadores de ONGs llegaron a utilizar VolunTrack debido a la necesidad de gestionar de manera más eficiente y organizada las crecientes demandas de sus actividades de voluntariado. Ante la falta de herramientas específicas para optimizar el seguimiento y la asignación de tareas, las ONGs enfrentaban dificultades para mantener un control adecuado sobre sus voluntarios y proyectos. Esta situación generaba desorganización, duplicación de esfuerzos y una disminución en la eficacia de sus acciones sociales. Por otro lado, los voluntarios decidieron utilizar VolunTrack para encontrar oportunidades alineadas con sus intereses y disponibilidad, debido a la dificultad que presentaban los sistemas tradicionales para gestionar actividades y tareas de manera sencilla y accesible.

#### 1.2.1.7. How much

#### Estadísticas que sustentan la problemática.

En América Latina, el 51% de las organizaciones no gubernamentales se consideran pequeñas y el 37% medianas (Global NGO, 2019), lo que significa que el 88% del sector probablemente no cuente con herramientas tecnológicas avanzadas para la gestión de sus actividades. Esta realidad representa una oportunidad significativa para VolunTrack, ya que al ofrecer una solución accesible, intuitiva y centralizada, puede cubrir una necesidad latente en la mayoría de estas organizaciones.

##### Figura 1 Tamaño relativo de las ONGs en América Latina (%)

<p align="center">
  <img src="https://github.com/user-attachments/assets/02776839-fc81-4676-8be4-6c2207159dc5" alt="Tamaño relativo de las ONGs en América Latina (%)">
</p>

_Nota._ El criterio para determinar el tamaño de una organización en este estudio es totalmente subjetivo. Las mismas ONGs indicaron si se consideran pequeñas, medianas o grandes. Adaptado de Technology Report 2019, por Global NGO, 2019 (https://assets-global.website-files.com/5da60733afec9db1fb998273/5de8285d137d82cb7d96674e_2019-Tech-Report-English.pdf).

De acuerdo con Global NGO (2019), solo el 58% de las organizaciones no gubernamentales envía correos electrónicos a sus voluntarios, y más del 70% de ellas lo hace únicamente una vez al mes o con menor frecuencia. Esta limitada comunicación podría generar un sentimiento de desconexión entre los voluntarios, afectando su motivación y rendimiento. Además, la baja frecuencia en el envío de mensajes podría estar vinculada a la falta de herramientas adecuadas para gestionar comunicaciones masivas de manera eficiente. En este contexto, VolunTrack busca facilitar esta tarea, proporcionando un sistema automatizado y accesible que permita a las ONGs mantener una comunicación constante y significativa con sus voluntarios.

##### Figura 2 Frecuencia de las ONGs en cuanto al envío de correos a los voluntarios

<p align="center">
  <img src="https://github.com/user-attachments/assets/51164d42-6103-4db3-8870-1236fe8ddd64" alt="Frecuencia de las ONGs en cuanto al envío de correos a los voluntarios">
</p>

_Nota._ No se están teniendo en cuenta otros métodos de comunicación que las ONGs puedan tener con sus voluntarios. Adaptado de Technology Report 2019, por Global NGO, 2019 (https://assets-global.website-files.com/5da60733afec9db1fb998273/5de8285d137d82cb7d96674e_2019-Tech-Report-English.pdf).

De la población en edad de trabajar, un 20,8% participa en actividades de voluntariado, de las cuales un 14,3% corresponde a voluntariado informal (United Nations Volunteers, 2022). Esta cifra revela no solo una significativa predisposición social hacia el voluntariado, sino también una alta proporción de participación fuera de canales institucionales. Esto evidencia la necesidad de plataformas como VolunTrack, que pueden ayudar a formalizar, organizar y potenciar estas iniciativas, facilitando la conexión entre personas dispuestas a colaborar y organizaciones que requieren apoyo estructurado.

##### Figura 3 Porcentaje de la población en edad de trabajar que participan en voluntariados formales e informales

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c91e210-5c7c-4256-88ef-e2e006ae4046" alt="Porcentaje de la población en edad de trabajar que participan en voluntariados formales e informales">
</p>

_Nota._ La sección celeste, que no es señalada con ningún porcentaje, representa el porcentaje de personas en edad de trabajar que no realizan actividades de voluntariado (79,2%). Adaptado de Lo que no se cuenta: estimaciones globales relativas al voluntariado, por United Nations Volunteers, 2022 (swvr2022.unv.org/wp-content/uploads/2022/04/Chapter-2_web_ES.pdf).

#### ¿Cuánto costará resolver el problema?

Dado que VolunTrack es una plataforma de gestión de voluntariado que incluye funcionalidades como gestión de usuarios, asignación de tareas, seguimiento de actividades y generación de informes, se situaría en una categoría de complejidad moderada a alta. De acuerdo con Guirado (2023), el desarrollo de una aplicación de este tipo podría costar entre 40.000€ y 60.000€, dependiendo de los requisitos específicos y las funcionalidades adicionales que se deseen implementar.

### 1.2.2. Lean UX Process

Lean UX es una metodología de diseño centrada en el usuario que integra principios ágiles para crear productos eficientes y alineados con las necesidades reales de los usuarios. Se enfoca en la colaboración y la iteración rápida, priorizando la experiencia del usuario y la validación continua a través de prototipos y pruebas. Esta aproximación permite reducir el tiempo y los recursos invertidos en el desarrollo, asegurando que el producto final sea más efectivo y esté mejor adaptado al mercado (Lean UX y Lean Startup: potencia experiencia y diseño de producto, 2023).

#### 1.2.2.1. Lean UX Problem Statements

Nuestra plataforma, VolunTrack, es una herramienta innovadora diseñada para optimizar la gestión del voluntariado en las organizaciones no gubernamentales (ONG). Hemos identificado que, en el contexto actual, las ONG enfrentan serias dificultades para gestionar de manera eficiente y sostenible a sus voluntarios, debido a la falta de recursos digitales adecuados. Esta falta de apoyo y organización genera descoordinación dentro de las ONG, lo que no solo limita su capacidad para cumplir con sus objetivos, sino que también provoca insatisfacción en los voluntarios, quienes pueden sentirse desmotivados y desconectados de la causa. Esto, a su vez, afecta negativamente su retención y rendimiento. ¿Cómo podemos ofrecer una solución integral que permita a las ONG gestionar sus recursos humanos de manera eficiente, proporcionando herramientas que faciliten la asignación de tareas, el seguimiento y el acompañamiento de los voluntarios, mejorando así tanto el rendimiento de la organización como la experiencia y satisfacción de los voluntarios?

#### 1.2.2.2. Lean UX Assumptions

#### Features

* Registro y creación de perfiles de voluntarios
* Creación y gestión de eventos y actividades de voluntariado
* Calendario integrado para visualizar actividades y tareas
* Seguimiento personalizado a los voluntarios
* Notificaciones y recordatorios a voluntarios
* Dashboard centralizado de actividades

#### Business Outcomes

* Mejora en la Gestión de Voluntarios: Incrementar la eficiencia en la asignación de tareas y seguimiento de la participación de voluntarios, lo que permitirá a las ONGs optimizar sus recursos humanos y mejorar la organización interna.
* Incremento en la Retención de Voluntarios: Aumentar la tasa de voluntarios que continúan participando en proyectos a lo largo del tiempo, al proporcionar una experiencia más personalizada y de seguimiento constante.
* Optimización de la Productividad de las ONGs: Mejorar la capacidad de las ONGs para gestionar sus actividades, recursos y eventos, logrando un mayor impacto social y mejor alineación con sus objetivos de desarrollo.
* Consolidación de un Modelo de Ingresos Escalable: Generar ingresos sostenibles mediante un modelo de pago por acceso completo al sistema, asegurando que cada ONG cliente reciba todas las funcionalidades sin restricciones.
* Expansión de la Base de Usuarios: Aumentar la cantidad de ONGs y voluntarios registrados en la plataforma, impulsando el crecimiento de la red y asegurando una mayor presencia de VolunTrack en el sector social.
* Incremento en la Tasa de Adopción del Producto: Alcanzar un alto porcentaje de organizaciones que no solo se registren, sino que integren VolunTrack en sus operaciones diarias como su herramienta principal de gestión de voluntariado.
* Expansión de Alianzas Estratégicas con el Sector Social: Establecer colaboraciones con redes de ONGs, universidades y plataformas sociales para aumentar la visibilidad y credibilidad de VolunTrack en el ecosistema de impacto social.

#### User Benefits

* Optimización del tiempo y esfuerzo al centralizar la gestión de voluntarios en una sola plataforma, facilitando tareas como asignación de roles, control de asistencia y generación de certificados.
* Acceso rápido a oportunidades de voluntariado alineadas con los intereses y disponibilidad de cada usuario, lo que mejora la experiencia del voluntario desde el primer contacto.
* Comunicación eficiente y organizada mediante notificaciones automatizadas por correo electrónico, evitando desinformación y recordando fechas clave.
* Seguimiento claro del historial de participación, tanto para coordinadores como para voluntarios, permitiendo valorar la contribución individual y generar reportes fácilmente.
* Mayor profesionalización en la gestión de recursos humanos voluntarios, ayudando a las ONGs a escalar sus operaciones de manera sostenible y transparente.
* Mejor organización interna, gracias a calendarios integrados que permiten visualizar y planificar eventos, actividades y roles de forma clara.

1. Creo que mis usuarios buscan una herramienta que les permita gestionar el voluntariado de forma más organizada, eficiente y accesible, con una visión clara de las actividades, tareas y participación, sin depender de herramientas informales o procesos manuales.
2. Estas necesidades se pueden resolver mediante VolunTrack, una plataforma web diseñada específicamente para ONGs, que permite asignar tareas, registrar y hacer seguimiento de voluntarios, organizar las actividades en un calendario y centralizar toda la operación del voluntariado.
3. Mis usuarios iniciales son los líderes y coordinadores de ONGs que necesitan mejorar sus procesos de gestión de voluntarios, y los voluntarios actuales o potenciales que buscan involucrarse de forma sencilla y estructurada en causas sociales.
4. El valor #1 que un usuario quiere de VolunTrack es la capacidad de organizar, visualizar y supervisar las actividades de voluntariado desde una sola plataforma, reduciendo el caos operativo y aumentando la eficiencia.
5. El usuario también obtiene el beneficio adicional de notificar sobre eventos importantes a sus voluntarios, generar reportes de participación, ofrecer reconocimiento con certificados automáticos y facilitar el acceso a nuevas oportunidades sociales y solidarias.
6. Voy a adquirir la mayoría de mis usuarios mediante alianzas con ONGs, presencia en ferias y eventos del sector social, marketing digital en redes sociales, y recomendaciones entre organizaciones y voluntarios satisfechos.
7. Haré dinero a través de una suscripción mensual o anual, adaptada a las capacidades económicas de la organización.
8. Mi competencia principal en el mercado serán plataformas genéricas de gestión de proyectos o voluntariados, hojas de cálculo, formularios de registro en línea, y soluciones improvisadas como grupos de WhatsApp o Google Calendar.
9. Los venceremos al ofrecer una solución especializada para el mundo del voluntariado, diseñada desde cero pensando en las dinámicas reales de las ONGs, con una interfaz amigable, funcionalidades específicas y soporte enfocado en su contexto social.
10. Mi mayor riesgo de producto es que las ONGs no vean claramente el valor de migrar sus procesos a una nueva herramienta o que sientan que el cambio requiere demasiado esfuerzo inicial.
11. Resolveremos esto con un onboarding guiado, demostraciones gratuitas, soporte técnico cercano, y una experiencia de usuario clara e intuitiva que muestre resultados desde el primer uso, generando confianza rápidamente.
    
¿Quién es el usuario?

El usuario de VolunTrack son los líderes y coordinadores de ONGs, que necesitan gestionar voluntarios y actividades de manera eficiente, y los voluntarios interesados en participar en eventos sociales y solidarios que se alineen con sus intereses y disponibilidad.

¿Dónde encaja nuestro producto en su trabajo o vida?

VolunTrack encaja en la vida de los coordinadores de ONGs como una herramienta integral que optimiza la organización de actividades de voluntariado, gestión de recursos y seguimiento de participación. Para los voluntarios, VolunTrack se convierte en una plataforma centralizada para descubrir oportunidades de voluntariado, registrarse en actividades y gestionar su participación de forma sencilla y organizada.

¿Qué problemas tiene nuestro producto y cómo se puede resolver?

Uno de los problemas podría ser la falta de adopción por parte de algunas ONGs debido a la resistencia al cambio o la complejidad inicial en la transición hacia una plataforma digital. Esto se puede resolver mediante una interfaz amigable, capacitación sencilla para los usuarios y demostraciones claras de cómo VolunTrack mejora la eficiencia operativa. Además, ofrecer un soporte constante facilitará la transición.

¿Cuándo y cómo es usado nuestro producto?

VolunTrack es utilizado principalmente cuando los coordinadores de ONGs necesitan planificar y gestionar actividades de voluntariado, así como hacer seguimiento de la participación de los voluntarios. Los voluntarios, por su parte, usan la plataforma para descubrir nuevas oportunidades de voluntariado y recibir notificaciones para eventos que les interesen. La plataforma está disponible 24/7 desde cualquier dispositivo con acceso a internet.

¿Qué características son importantes?

* Registro y creación de perfiles de voluntarios: Facilita la gestión de la base de datos de voluntarios y permite asignar tareas de manera eficiente.
* Creación y gestión de eventos y actividades de voluntariado: Permite planificar y administrar de manera organizada los eventos de voluntariado.
* Calendario integrado: Ofrece una vista clara de todas las actividades y tareas programadas, asegurando que no haya solapamientos.
* Seguimiento personalizado: Ayuda a los coordinadores a hacer un seguimiento cercano de la participación de cada voluntario, promoviendo su compromiso.
* Notificaciones y recordatorios a voluntarios: Mejora la comunicación y aumenta la participación al enviar recordatorios de actividades.
* Dashboard centralizado: Proporciona una vista clara y en tiempo real de la gestión del voluntariado y el estado de las actividades.

¿Cómo debe verse nuestro producto y cómo debe comportarse?

El diseño de VolunTrack debe ser limpio, intuitivo y visualmente organizado. La interfaz debe ser fácil de navegar, con accesos rápidos a las funciones clave, como la gestión de voluntarios, planificación de eventos y visualización de calendarios. Debe tener un diseño accesible para usuarios con diferentes niveles de familiaridad con la tecnología.
En cuanto al comportamiento, VolunTrack debe ser rápido, confiable y sin fallos. Las funcionalidades deben ser claras y simples, de modo que los usuarios puedan completar tareas como la creación de eventos o la asignación de voluntarios de forma fluida y sin complicaciones. Además, la plataforma debe estar optimizada para ser utilizada tanto en computadoras como en dispositivos móviles.

#### 1.2.2.3. Lean UX Hypothesis Statements

1. Creemos que, al proporcionar una plataforma que facilite la gestión eficiente de los voluntarios mediante herramientas de asignación de tareas y seguimiento, los líderes y coordinadores de ONGs podrán optimizar la administración de sus recursos humanos. Sabremos que hemos tenido éxito cuando al menos el 80% de los usuarios reporten una mejora en la organización y ejecución de sus actividades de voluntariado.
2. Creemos que, al ofrecer a los voluntarios un acceso fácil a oportunidades de voluntariado alineadas con sus intereses y disponibilidad, podremos aumentar la participación activa de los mismos. Sabremos que hemos tenido éxito cuando al menos el 70% de los voluntarios registrados participen activamente en al menos una actividad de voluntariado al mes.
3. Creemos que, al ofrecer un sistema accesible y fácil de usar desde cualquier dispositivo, tanto los voluntarios como los coordinadores de ONGs experimentarán una mayor satisfacción con la plataforma. Sabremos que hemos tenido éxito cuando al menos el 85% de los usuarios califiquen la usabilidad de la plataforma con una puntuación de 4 o 5 en una escala de 1 a 5.
4. Creemos que, al incluir un calendario centralizado para programar y visualizar actividades, los coordinadores podrán organizar mejor sus eventos y evitar solapamientos o desorganización. Sabremos que hemos tenido éxito cuando al menos el 75% de los coordinadores utilicen el calendario para planificar sus actividades y lo consulten semanalmente.
5. Creemos que, al incorporar una funcionalidad de gestión de recursos (materiales, espacios, etc.), las ONGs podrán distribuir y controlar mejor sus activos durante las actividades de voluntariado. Sabremos que hemos tenido éxito cuando al menos el 60% de las organizaciones registren y asignen recursos a sus eventos directamente desde la plataforma.
6. Creemos que, al enviar notificaciones por correo electrónico a los voluntarios con recordatorios y actualizaciones relevantes, aumentará la asistencia y el compromiso en las actividades programadas. Sabremos que hemos tenido éxito cuando al menos el 70% de los voluntarios abran y reaccionen (asistan o confirmen participación) a las notificaciones enviadas.

#### 1.2.2.4. Lean UX Canvas

<p align="center">
  <img src="https://github.com/user-attachments/assets/e6b1dded-2ce3-4be7-a6e1-dcffe6b292b3" alt="Canvas de Voluntrack">
</p>

<p align="center">
  <a href="https://drive.google.com/file/d/1uj3f76zZgQNJNxdLU8cLH2YIALPgiF-v/view?usp=sharing">Link del Canvas</a>
</p>

## 1.3. Propuesta de Valor y Alcance

La propuesta de valor de VolunTrack es ofrecer una plataforma web innovadora diseñada específicamente para optimizar la gestión del voluntariado dentro de las organizaciones no gubernamentales (ONG). VolunTrack permite a los líderes y coordinadores organizar eficientemente sus actividades, hacer seguimiento al desempeño de los voluntarios, registrar asistencia, generar certificados de participación automáticamente y centralizar toda la información clave en un solo lugar. Además, proporciona a los voluntarios una forma accesible y ordenada de conocer oportunidades de participación, alineadas a sus intereses y disponibilidad, facilitando su incorporación a iniciativas sociales. De esta manera, VolunTrack mejora no solo la eficiencia operativa de las ONGs, sino también la experiencia de quienes desean generar impacto social de forma estructurada y comprometida. Es más que una herramienta de organización: es una solución integral para fortalecer el ecosistema del voluntariado.
El alcance de VolunTrack está centrado en ONGs de diferentes tamaños y rubros que cuentan con programas de voluntariado activo o buscan implementarlos. No se limita a un tipo de causa específica, lo que permite a la plataforma adaptarse a distintas realidades y sectores sociales. Asimismo, considera tanto a voluntarios recurrentes como a personas externas interesadas en participar por primera vez, fomentando un acceso inclusivo y sostenible al mundo del voluntariado.
VolunTrack estará disponible como una plataforma web responsive, accesible desde cualquier dispositivo con conexión a internet, permitiendo su uso desde oficinas, centros de voluntariado o incluso en campo. Esta disponibilidad asegura que tanto coordinadores como voluntarios puedan mantenerse conectados y organizados desde cualquier lugar.

## 1.4. Segmentos Objetivo

Con el fin de llegar a potenciales clientes de forma efectiva y brindar un producto que responda a sus verdaderas necesidades, se han identificado los siguientes dos segmentos clave.

**Segmento objetivo #1: Líderes y coordinadores de ONGs**

Aquellos encargados de gestionar y coordinar equipos de voluntarios dentro de las organizaciones no gubernamentales, buscando optimizar la gestión de recursos humanos y maximizar el impacto social de sus proyectos.

Aspectos demográficos:
* Sexo: Masculino y femenino
* Rango de edad: 18-50 años
* Nivel socioeconómico: Medio-alto y alto

Aspectos geográficos:
* Nacionalidad: Global, no específico
* Zona geográfica de residencia: Urbana

Aspectos psicográficos:
* Intereses: Gestión eficiente de recursos, maximizar el impacto de proyectos sociales, mejorar la comunicación interna en la organización.
* Estilo de vida: Profesional, orientados al desarrollo de proyectos sociales, gestión y optimización de equipos.
* Actitudes: Enfocados en la mejora continua, con interés en herramientas tecnológicas para facilitar su labor y mejorar la experiencia de los voluntarios.

**Segmento objetivo #2: Clientes de gimnasios**

Personas que están activamente involucradas o interesadas en participar en actividades de voluntariado dentro de ONGs, buscando una experiencia organizada y efectiva que les permita contribuir a causas sociales de manera significativa.

Aspectos demográficos:
* Sexo: Masculino y femenino
* Rango de edad: 18-50 años
* Nivel socioeconómico: Clases media y media-alta

Aspectos geográficos:
* Nacionalidad: Global, no específico
* Zona geográfica de residencia: Urbana

Aspectos psicográficos:
* Intereses: Participar en causas sociales, mejorar sus habilidades profesionales, generar un impacto positivo en la comunidad.
* Estilo de vida: Social, orientados a la acción, buscan experiencias que les permitan desarrollarse y ayudar a otros.
* Actitudes: Comprometidos con causas altruistas, interesados en contar con herramientas que les faciliten el seguimiento de sus tareas y su participación.

# CAPÍTULO 2: REQUIREMENTS ELICITATION & ANALYSIS
## 2.1. Competidores
En el ámbito de las plataformas digitales para la gestión de voluntariado, existen diversas empresas que ofrecen soluciones similares a VolunTrack, facilitando la organización, el seguimiento y la participación de voluntarios en actividades sociales. A continuación, se presentan los principales competidores reconocidos en este sector:

* VolunteerHub: Es una plataforma desarrollada en Estados Unidos que ayuda a organizaciones sin fines de lucro a gestionar eventos y voluntarios de forma eficiente. Fundada en los años 90, VolunteerHub se ha consolidado como una herramienta robusta en el sector, con integraciones a sistemas CRM como Salesforce y Blackbaud. Su enfoque está en instituciones como hospitales, iglesias y grandes ONGs, priorizando la escalabilidad y la automatización de tareas administrativas (VolunteerHub, s.f.).

* Volgistics: Fundada en EE. UU., es una de las soluciones más longevas en el mercado de gestión de voluntariado. Su plataforma está diseñada para organizaciones que necesitan administrar grandes volúmenes de voluntarios, como hospitales, bibliotecas y zoológicos. Aunque su diseño es más tradicional, se destaca por su fiabilidad, amplio rango de funciones y herramientas para seguimiento detallado del tiempo de servicio (Volgistics, s.f.).


* POINT: Es una plataforma moderna nacida en EE. UU. con un enfoque centrado en atraer a las generaciones más jóvenes al voluntariado. Su diseño tipo red social y la experiencia móvil la hacen ideal para ONGs que buscan una interfaz intuitiva y dinámica. POINT permite a las organizaciones publicar oportunidades, gestionar voluntarios y recibir reportes en tiempo real. Además, ofrece una versión gratuita con funciones básicas, y una premium con herramientas más avanzadas (POINT, s.f.).
### 2.1.1 Análisis Competitivo

**¿Por qué realizar este análisis?**

Este análisis competitivo permite entender las fortalezas, debilidades, estrategias y oportunidades de plataformas similares para detectar áreas de diferenciación y ventajas estratégicas para VolunTrack. Así, se optimizan decisiones sobre posicionamiento, desarrollo de funcionalidades y marketing.

|               | Nombre         | VolunTrack | VolunteerHub | Volgistics | POINT |
|---------------|----------------|------------|--------------|------------|-------|
|               |                 | <p align="center">  <img src="https://imgur.com/k3I79xc.png" alt="AC1" width="500"></p> | <p align="center">  <img src="https://imgur.com/DBLY9Yo.png" alt="AC2" width="500"></p> | <p align="center">  <img src="https://imgur.com/X1kAhPf.png" alt="AC3" width="500"></p> | <p align="center">  <img src="https://imgur.com/wislR0S.png" alt="AC4" width="500"></p> |
| Perfil        | Overview        | VolunTrack es una plataforma digital diseñada para optimizar la gestión de voluntarios en museos, fundaciones y organizaciones con actividades culturales o sociales. | VolunteerHub es una solución de gestión de voluntarios basada en la nube que automatiza la programación, registro y seguimiento de horas. | Volgistics es una solución online para la gestión de voluntarios, con un enfoque administrativo y de programación. | POINT es una plataforma moderna y gratuita que conecta voluntarios y organizaciones en causas sociales. |
|               | Ventaja competitiva ¿Qué valor ofrece a los clientes? | Enfoque accesible y moderno, usabilidad avanzada, integración multiplataforma y soporte inclusivo. | Integraciones potentes (Salesforce, Blackbaud), personalización avanzada y automatización del flujo de trabajo. | Larga trayectoria, estabilidad y enfoque en cumplimiento normativo. | Interfaz moderna tipo red social, gratuito para voluntarios, gamificación y accesibilidad. |
| Plan de marketing | Mercado objetivo | Museos, fundaciones, ONGs culturales y educativas, centros comunitarios. | Organizaciones medianas y grandes sin fines de lucro, hospitales, museos, iglesias y entidades gubernamentales. | Organizaciones tradicionales como hospitales, zoológicos, bibliotecas. | Millennials, Gen Z y ONGs pequeñas o medianas con cultura tecnológica. |
|               | Estrategias de marketing | Alianzas con instituciones culturales, storytelling visual de impacto social, pruebas gratuitas para ONGs pequeñas, presencia en ferias de tecnología social. | SEO para instituciones, marketing de contenidos, casos de éxito, campañas de email, webinars. | Relaciones públicas, marketing directo, presencia en conferencias, posicionamiento orgánico. | Presencia fuerte en redes sociales, alianzas con ONGs, contenido educativo para voluntariado. |
| Plan de producto | Productos y servicios | Registro y asignación de voluntarios, seguimiento de asistencia, sistema de notificaciones, informes automáticos, panel de administración intuitivo, soporte multilenguaje. | Gestión de eventos y turnos, registro en línea, informes y métricas, CRM de voluntariado, integraciones externas. | Programación de turnos, formularios personalizados, módulo de mensajes. | App móvil completa, matching entre causas e intereses, registro automático de horas. |
|               | Precios y costos | Plan gratuito básico, planes premium por suscripción mensual para medianas y grandes organizaciones. | Modelo de suscripción SaaS, cotización personalizada según tamaño. | Plan mensual por número de voluntarios desde $9/mes para pequeñas organizaciones. | Gratuito para voluntarios; ONGs acceden a planes gratuitos o escalables. |
|               | Canales de distribución | Web responsive, aplicación móvil en desarrollo para Android y iOS. | Web, app móvil limitada. | Web, interfaz móvil básica. | Web y app móvil completa (iOS y Android). |
| Análisis FODA o SWOT | Fortalezas | Interfaz accesible y moderna, pensado para ONGs pequeñas, escalabilidad, enfoque inclusivo. | Integraciones robustas, seguridad y soporte profesional. | Estabilidad, larga trayectoria, soporte técnico sólido. | Interfaz atractiva, comunidad joven, gratuito para usuarios. |
|               | Oportunidades | Expansión a sectores educativos y de salud, integración de IA para asignaciones, alianzas con plataformas de donaciones. | Inclusión social como valor diferencial, expansión a pequeños voluntariados. | Mejoras en app móvil, gamificación, modernización de interfaz. | Expandirse hacia RSE empresarial, analítica avanzada, monetización ética. |
|               | Debilidades | Base de usuarios en crecimiento, app móvil aún en desarrollo, falta de integraciones CRM al inicio. | Precio elevado, curva de aprendizaje técnica alta. | Interfaz anticuada, pocas integraciones externas. | Funcionalidad limitada para ONGs grandes, dependencia de adopción masiva. |
|               | Amenazas | Competidores con más trayectoria, cambios en políticas de privacidad, baja adopción sin buena difusión. | Competidores accesibles y reducción de presupuestos en ONGs. | Nuevas plataformas más modernas y apps móviles más fuertes. | Modelos insostenibles si no monetizan, cambios en políticas de app stores. |



### 2.1.2. Estrategias y tácticas frente a competidores
VolunTrack se posicionará como una plataforma digital inclusiva y accesible, enfocada en organizaciones con recursos técnicos limitados, como ONGs y museos pequeños. A diferencia de soluciones más complejas o costosas, VolunTrack prioriza la facilidad de uso, la escalabilidad progresiva y el soporte a voluntarios con diferentes niveles de alfabetización digital. Para enfrentar la competencia de plataformas consolidadas o desarrollos internos improvisados, se implementarán las siguientes estrategias:

**#1 Posicionamiento como plataforma inclusiva y de fácil adopción para ONGs pequeñas y medianas**

Fortaleza Utilizada: Interfaz accesible y moderna.

Oportunidad Aprovechada: Expansión a sectores con baja digitalización (educación, salud, cultura)

Descripción:

A diferencia de plataformas diseñadas para corporativos o grandes instituciones, VolunTrack ofrecerá una interfaz simple, clara y amigable que minimiza la curva de aprendizaje. Esto facilitará la adopción por parte de ONGs pequeñas y medianas, así como museos y centros culturales que no cuentan con equipos técnicos especializados. Esta ventaja permitirá a VolunTrack expandirse también hacia sectores educativos y de salud comunitaria, que comparten necesidades similares de gestión del voluntariado.

**#2 Enfoque en accesibilidad digital para voluntarios de diversos perfiles**

Fortaleza Utilizada: Soporte para voluntarios con distintas capacidades digitales.

Oportunidad Aprovechada: Inclusión social como valor agregado frente a plataformas rígidas

Descripción:

VolunTrack incluirá herramientas pensadas para voluntarios con bajo nivel de alfabetización digital o acceso limitado a tecnología moderna. Esto incluye un diseño con enfoque accesible, navegación clara y comunicación optimizada (por correo o notificaciones simples). Esta estrategia no solo mejora la experiencia del voluntario, sino que diferencia a VolunTrack como una plataforma centrada en la equidad y el impacto social inclusivo.

**#3 Automatización en la gestión del voluntariado**

Fortaleza Utilizada: Escalabilidad y diseño pensado para automatización.

Oportunidad Aprovechada: Uso de inteligencia artificial para asignación de voluntarios.

Descripción:

VolunTrack integrará mecanismos para asignar voluntarios automáticamente según sus intereses, disponibilidad y ubicación. Esta automatización permitirá ahorrar tiempo en la coordinación y asignación manual, lo cual es especialmente valioso para ONGs con poco personal administrativo. Frente a soluciones que dependen de procesos manuales, esta funcionalidad será clave para optimizar recursos y mejorar la experiencia tanto del coordinador como del voluntario.

**#4 Integración con herramientas externas para potenciar el ecosistema de impacto social**

Fortaleza Utilizada: Pensado para organizaciones con pocos recursos técnicos.

Oportunidad Aprovechada: Integración con plataformas de donación o financiamiento.

Descripción:

VolunTrack buscará alianzas con plataformas de donaciones o financiamiento colectivo (como GlobalGiving o Donadora) para ofrecer a las ONGs una solución integral. Al centralizar en un mismo entorno la gestión de voluntarios y el acceso a recursos, la plataforma se volverá un eje operativo clave en organizaciones que suelen dispersar su gestión en múltiples herramientas. Esto facilitará su fidelización y posicionará a VolunTrack como una solución aliada al desarrollo sostenible.

## 2.2. Entrevistas
### 2.2.1. Diseño de entrevistas

**Segmento #1: Líderes y coordinadores de ONGs**

* ¿Cómo organizan actualmente a los voluntarios y qué partes del proceso les gustaría automatizar o simplificar?
* ¿Qué problemas encuentran al coordinar actividades o hacer seguimiento de la participación de los voluntarios?
* ¿Qué herramientas digitales usan hoy para gestionar voluntarios y qué limitaciones han encontrado en ellas?
* ¿Qué tipo de datos o reportes necesitan tener siempre disponibles sobre sus voluntarios o actividades?
* ¿Qué tan importante sería para ustedes emitir certificados de participación automáticamente desde la plataforma?
* ¿De qué forma les gustaría comunicarse con los voluntarios a través de una aplicación?
* Si una aplicación pudiera resolver uno de sus mayores desafíos en la gestión del voluntariado, ¿Cuál les gustaría que fuera?

**Segmento #2: Voluntarios existentes y potenciales**

* ¿Qué tan cómodo te sientes actualmente al buscar e inscribirte en actividades de voluntariado?
* ¿Qué aspectos de una plataforma digital te facilitarían participar en actividades de voluntariado? 
* ¿Te gustaría tener una app donde puedas ver tu historial de participación, horas acumuladas o logros obtenidos?
* ¿Qué tan importante sería para ti recibir certificados digitales o reconocimientos automáticos por tu participación? 
* ¿Cómo prefieres que una ONG se comunique contigo sobre nuevas actividades o recordatorios?
* ¿Qué te haría sentir más motivado y comprometido al usar una aplicación de voluntariado de forma constante?
* ¿Has tenido alguna mala experiencia usando plataformas o redes para voluntariado? ¿Qué crees que se podría mejorar?

### 2.2.2. Registro de entrevistas
**Segmento #1: Líderes y coordinadores de ONGs**
*Entrevistado N.º 1: Claudio Astocondor*
* Edad: 24
* Distrito: Pueblo Libre

**Acerca de la entrevista:**

<p align="center">
  <img src="https://imgur.com/zhqkjLh.png" alt="e11" width="500">
</p>

* Link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EccjEo0rS0FCiWl1pw3HLI8Bxj4PJLi6KG8Q-ZWwZvwyzw?e=YNaKTr
* Instante en el que inicia: 0:01 min
* Duración: 9:22 min

Claudio Astocondor organiza a los voluntarios mediante una mezcla de Google Forms, Excel y WhatsApp. Sin embargo, enfrentan varios desafíos, como la gestión manual de la asistencia y la falta de confirmación de quienes no asisten a las actividades, lo que genera desorden en la planificación. Necesitan mejorar el seguimiento de la participación, como tener un registro claro de las actividades, horas y asistencia de cada voluntario. También buscan simplificar la emisión de certificados, ya que actualmente lo hacen de forma manual. Claudio valora una aplicación que centralice el proceso, permita enviar notificaciones automáticas y personalizadas, y que facilite la confirmación de asistencia directamente desde la app.

*Entrevistado N.º 2: Leonardo López*
* Edad: 19
* Distrito: Pueblo Libre

**Acerca de la entrevista:**

<p align="center">
  <img src="https://imgur.com/hS7TU9H.png" alt="e12" width="500">
</p>

* Link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EccjEo0rS0FCiWl1pw3HLI8Bxj4PJLi6KG8Q-ZWwZvwyzw?e=YNaKTr
* Instante en el que inicia: 9:25 min
* Duración: 6:38 min

Leonardo López, coordinador de una ONG, destaca la necesidad de una plataforma que centralice y automatice la gestión de voluntarios, actualmente realizada con herramientas dispersas como hojas de cálculo y grupos de WhatsApp, lo que dificulta la inscripción, asignación, seguimiento y comunicación. Los principales desafíos incluyen el seguimiento constante de la participación, la generación de reportes y la falta de una herramienta integrada para gestionar la información de los voluntarios. VolunTrack se percibe como una solución valiosa para optimizar la administración de recursos humanos, mejorar la comunicación con los voluntarios y facilitar la generación de certificados, lo que ahorraría tiempo y aumentaría la eficiencia de la organización.

*Entrevistado N.º 3: Jorge Casaboza*
* Edad: 14
* Distrito: Magdalena del Mar

**Acerca de la entrevista:**

<p align="center">
  <img src="https://imgur.com/EcelfHe.png" alt="e13" width="500">
</p>

* Link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EccjEo0rS0FCiWl1pw3HLI8Bxj4PJLi6KG8Q-ZWwZvwyzw?e=YNaKTr
* Instante en el que inicia: 16:01 min
* Duración: 3:49 min

Jorge indica que los líderes y coordinadores de ONGs organizan a sus voluntarios principalmente a través de plataformas en línea y redes sociales, aunque desean automatizar el proceso de reclutamiento y selección. Señalan que el mayor problema en la coordinación es mantener una comunicación fluida e informar a todos los voluntarios. Actualmente utilizan herramientas digitales con limitaciones en el registro de perfiles, convocatorias y programación de turnos. Necesitan tener siempre disponible información personal y un historial de participación de cada voluntario. Consideran muy importante emitir certificados automáticamente para dar profesionalismo y credibilidad. Prefieren comunicarse mediante notificaciones push y destacan que su principal necesidad es optimizar la comunicación y coordinación en tiempo real para garantizar el éxito de sus eventos y proyectos.

**Segmento #2: Voluntarios existentes y potenciales**

*Entrevistado N.º 4: Tatiana Nakamurakare*
* Edad: 20
* Distrito: San Isidro

**Acerca de la entrevista:**

<p align="center">
  <img src="https://imgur.com/sOHGqXA.png" alt="e21" width="500">
</p>

* Link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EccjEo0rS0FCiWl1pw3HLI8Bxj4PJLi6KG8Q-ZWwZvwyzw?e=YNaKTr
* Instante en el que inicia: 19:50 min
* Duración: 3:08 min

Tatiana no se siente cómoda inscribiéndose en actividades de voluntariado debido a la información desactualizada y desordenada en las plataformas actuales. Prefiere una interfaz clara y ordenada, donde las categorías sean fáciles de encontrar y la información esté bien organizada. Le gustaría poder ver su progreso en los voluntariados, así como contar con la generación automática de certificados. Además, prefiere recibir recordatorios por correo solo sobre las categorías de su interés. Le gustaría que la aplicación fuera visualmente atractiva, bien organizada y dividida en secciones. Ha tenido malas experiencias con otras plataformas debido a la información confusa o desactualizada sobre el proceso de inscripción.

*Entrevistado N.º 5: Roxana Arbañil*
* Edad: 50
* Distrito: Surquillo

**Acerca de la entrevista:**

<p align="center">
  <img src="https://imgur.com/ok0MOav.png" alt="e22" width="500">
</p>

* Link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EccjEo0rS0FCiWl1pw3HLI8Bxj4PJLi6KG8Q-ZWwZvwyzw?e=YNaKTr
* Instante en el que inicia: 23:00 min
* Duración: 2:59 min

Katty, voluntaria actual y potencial, comentó que a veces resulta complicado encontrar actividades de voluntariado claras y bien organizadas en un solo lugar. Para ella, sería muy útil poder filtrar actividades por ubicación e intereses. Le gustaría tener una app donde pueda visualizar su historial de participación, horas acumuladas y logros, ya que eso la motivaría a seguir activa. Además, considera muy importante recibir certificados digitales o reconocimientos automáticos que validen su esfuerzo y fortalezcan su perfil profesional. Prefiere que la comunicación de las ONGs sea a través de una app o correo electrónico, y destacó que sentirse valorada y ver el impacto positivo de su aporte la motiva a mantenerse comprometida. Katty también mencionó que ha tenido malas experiencias debido a la falta de confirmación o compromiso en algunas plataformas, algo que cree necesario mejorar.

*Entrevistado N.º 6: Diego Peralta*
* Edad: 19
* Distrito: Lince

**Acerca de la entrevista:**

<p align="center">
  <img src="https://imgur.com/UfU3E4O.png" alt="e23" width="500">
</p>

* Link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EccjEo0rS0FCiWl1pw3HLI8Bxj4PJLi6KG8Q-ZWwZvwyzw?e=YNaKTr
* Instante en el que inicia: 25:59 min
* Duración: : 3:13 min

Diego Peralta, voluntario, se queja de la búsqueda y registro dispersos e ineficientes de actividades de voluntariado, y desea una plataforma centralizada (como VolunTrack) con filtros, detalles claros e inscripción directa. Valora el registro de su historial, el reconocimiento y la comunicación por notificaciones/correo, pero encuentra abrumadores los grupos de WhatsApp. Pide mejor organización, claridad e información para evitar la frustración.

### 2.2.3. Análisis de entrevistas
En base en las entrevistas recopiladas para cada segmento, se llevó a cabo un análisis, el cual destaca los principales hallazgos y las conclusiones derivadas.

**Segmento #1: Estudiantes y jóvenes universitarios**

*Hallazgos:*
* Los estudiantes utilizan constantemente plataformas digitales para acceder a material de estudio, lo que demuestra una fuerte necesidad de contar con herramientas prácticas y accesibles en su día a día académico.
* Muchos expresan frustración al no hallar la información exacta que necesitan o al encontrar resultados incompletos, lo que indica una oportunidad para mejorar los sistemas de búsqueda y organización del contenido.
* Los entrevistados valoran que una plataforma les sugiera libros o materiales adaptados a sus intereses y necesidades académicas, ya que esto agiliza su proceso de búsqueda y mejora su rendimiento.
* Algunos estudiantes muestran interés por opciones como audiolibros, que les permitirían seguir aprendiendo incluso en momentos donde no pueden leer, lo que resalta la importancia de ofrecer formatos alternativos.

*Conclusiones:*
* Los estudiantes y jóvenes universitarios muestran una alta predisposición al uso de plataformas digitales para la lectura académica, pero también revelan importantes carencias en las herramientas que actualmente utilizan.
* La falta de precisión en los motores de búsqueda, el acceso limitado a contenido completo y la ausencia de recomendaciones específicas generan frustración y pérdida de tiempo. Una aplicación que permita buscar con mayor exactitud, ofrezca contenido completo en distintos formatos y brinde recomendaciones personalizadas sería altamente valorada por este segmento. Además, la motivación de los estudiantes se ve reforzada por metas personales y el deseo de un acceso práctico al conocimiento. Livria tiene la oportunidad de posicionarse como una plataforma educativa de confianza si atiende a estas necesidades específicas.

Segmento objetivo #2: Lectores casuales y aficionados a la lectura

*Hallazgos:*
* Mientras algunos lectores aún prefieren el formato físico por costumbre o falta de familiaridad con lo digital, otros valoran mucho la practicidad de los audiolibros o la accesibilidad de plataformas digitales, especialmente si permiten una experiencia cómoda e inmersiva.
* Los entrevistados coinciden en que recibir recomendaciones personalizadas según sus intereses facilita y mejora su experiencia lectora, ya que les ayuda a descubrir contenido relevante sin perder tiempo.
* Las interfaces poco amigables, lentas o con diseño anticuado generan frustración y desmotivan el uso frecuente. En cambio, se valora mucho una experiencia visual atractiva, interactiva y fluida.
Algunos lectores no usan plataformas digitales simplemente por desconocimiento o falta de orientación. Esto indica que una plataforma con guía clara, onboarding accesible y diseño intuitivo podría atraer a nuevos usuarios de este segmento.

*Conclusiones:*
* Los lectores casuales y aficionados a la lectura muestran una variedad de preferencias en cuanto a formatos y temáticas, combinando el gusto por libros físicos, digitales y audiolibros según su estilo de vida. Aunque algunos disfrutan de la lectura por placer con regularidad, otros la realizan de forma esporádica debido a limitaciones de tiempo. 
* Las plataformas digitales son valoradas cuando ofrecen filtros detallados, recomendaciones personalizadas y una interfaz visualmente atractiva e intuitiva, pero pueden generar frustración cuando presentan un diseño anticuado, lentitud de carga o una experiencia de uso poco clara. Además, se evidencia que una parte del segmento, especialmente los adultos, no se involucra con plataformas digitales por falta de orientación o acceso adecuado. Por ello, una aplicación de lectura que combine personalización, múltiples formatos y acompañamiento tecnológico podría atender de forma efectiva las necesidades de este grupo, generando una experiencia más cómoda, eficiente y motivadora.

## 2.3. Needfinding
### 2.3.1. User Personas
**Segmento #1: Líderes y coordinadores de ONGs**

<p align="center">
  <img src="https://imgur.com/undefined.png" alt="up1" width="500">
</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/EyxOif1.png" alt="up2" width="500">
</p>

### 2.3.2. User Task Matrix

|   User Task Matrix  |   Carmen Torres  |              |   Nahomi Pérez  |              |
|---------------------|------------------|--------------|-----------------|--------------|
|                     |   Frecuencia  |   Importancia   |   Frecuencia  |  Importancia   |
|   Registrarse como voluntario en la plataforma  |   Rara vez  |   Media  |  Con frecuencia  |   Alta  |
|   Buscar y explorar las actividades de voluntariado disponibles  |   A veces  |   Alta  |  Con frecuencia  |   Alta  |
|   Inscribirse en una actividad de voluntariado específica  |   A veces  |   Alta  |  Con frecuencia  |   Alta  |
|   Ver el calendario personal de actividades de voluntariado  |   Con frecuencia  |   Alta  |   Con frecuencia  |  Alta  |
|   Recibir notificaciones y recordatorios de las actividades inscritas  |   Con frecuencia  |   Alta  |   Con frecuencia  |  Alta  |
|   Actualizar su perfil de voluntario (intereses, disponibilidad)  |   A veces  |   Media  |   A veces  |   Media  |
|   Crear y gestionar nuevas actividades de voluntariado  |   Con frecuencia  |   Alta  |   Rara vez  |  Baja  |
|   Registrar y gestionar la información de los voluntarios  |   Con frecuencia  |   Alta  |   Rara vez  |  Baja  |
|   Hacer seguimiento de la asistencia y participación de los voluntarios  |   Con frecuencia  |   Alta  |   A veces  |  Media  |
|   Generar certificados de participación a los voluntarios  |   A veces  |   Alta  |   Rara vez  |  Alta  |


### 2.3.3. User Journey Mapping

**Segmento #1: Líderes y coordinadores de ONGs**

<p align="center">
  <img src="https://imgur.com/ifhOdJT.png" alt="uj1" width="500">
</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/E7Htrk7.png" alt="uj2" width="500">
</p>

### 2.3.4. Empathy Mapping

**Segmento #1: Líderes y coordinadores de ONGs**

<p align="center">
  <img src="https://imgur.com/04xScfM.png" alt="em1" width="500">
</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/cLUcxIg.png" alt="em2" width="500">
</p>

### 2.3.5. As-Is Scenario Mapping

**Segmento #1: Líderes y coordinadores de ONGs**

<p align="center">
  <img src="https://imgur.com/InY4IbU.png" alt="asis1" width="500">
</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/wQ2iwLg.png" alt="asis2" width="500">
</p>


## 2.4. Ubiquitous Language

* Activity (Actividad): Evento o tarea con voluntarios.
* Volunteer (Voluntario/a): Persona que ayuda sin pago.
* NGO (Non-Governmental Organization) (ONG): Grupo sin fines de lucro independiente del gobierno.
* Volunteer Program (Programa de Voluntariado): Organización de voluntarios en una ONG.
* Task (Tarea): Trabajo específico para un voluntario.
* Shift (Turno): Tiempo asignado a un voluntario.
* Registration (Registro): Inscripción como voluntario o en actividad.
* Attendance (Asistencia): Presencia del voluntario en la actividad.
* Engagement (Participación/Compromiso): Nivel de involucramiento del voluntario.
* Certificate of Participation (Certificado de Participación): Reconocimiento oficial al voluntario.
* Impact (Impacto): Efecto positivo del trabajo de la ONG y voluntarios.
* Resource (Recurso): Material o apoyo para la actividad.
* Profile (Perfil): Datos del voluntario (contacto, intereses, etc.).
