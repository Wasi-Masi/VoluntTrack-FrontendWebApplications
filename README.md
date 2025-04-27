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

<p align="center">
  <img src="https://github.com/user-attachments/assets/f296fcd2-46ba-4952-8e70-4b49724622d4" alt="Insights readme">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/3a2a9058-1f46-4a01-a2df-813a445d9acb" alt="Commits readme">
</p>

Como se puede ver, todos hemos participado en los commits del readme. Si bien parece que uno de los miembros realizo más commits, es debido a que fue el encargado de realizar hotfixes, ajustes menores, correcciones y los merges.

# Contenido

- [Fitmanager](#fitmanager)
 
- [Registro de versiones del informe](#registro-de-versiones-del-informe)
 
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
  * [1.3. Propuesta de Valor y Alcance](#13-propuesta-de-valor-y-alcance)
  * [1.4. Segmentos Objetivo](#14-segmentos-objetivo)

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

- [CAPÍTULO 3: REQUIREMENTS SPECIFICATION](#capítulo-3-requirements-specification)
  * [3.1. To-Be Scenario Mapping](#31-to-be-scenario-mapping)
  * [3.2. User Stories](#32-user-stories)
  * [3.3. Impact Mapping](#33-impact-mapping)
  * [3.4. Product Backlog](#34-product-backlog)

- [CAPÍTULO 4: PRODUCT UX/UI DESIGN](#capítulo-4-product-uxui-design)
  * [4.1. Style Guidelines](#41-style-guidelines)
    + [4.1.1 General Style Guidelines](#411-general-style-guidelines)
    + [4.1.2 Web Style Guidelines](#412-web-style-guidelines)
  * [4.2. Information Architecture](#42-information-architecture)
    + [4.2.1. Organization Systems](#421-organization-systems)
    + [4.2.2. Labeling Systems](#422-labeling-systems)
    + [4.2.3. SEO Tags and Meta Tags](#423-seo-tags-and-meta-tags)
    + [4.2.4 Searching Systems](#424-searching-systems)
    + [4.2.5. Navigation Systems](#425-navigation-systems)
  * [4.3. Landing Page UI Design](#43-landing-page-ui-design)
    + [4.3.1. Landing Page Wireframes](#431-landing-page-wireframes)
    + [4.3.2. Landing Page Mock-Ups](#432-landing-page-mock-ups)
  * [4.4 Web Applications UX/UI Design](#44-web-applications-uxui-design)
    + [4.4.1. Web Applications Wireframes](#441-web-applications-wireframes)
    + [4.4.2. Web Applications Wireflow Diagrams](#442-web-applications-wireflow-diagrams)
    + [4.4.3. Web Applications Mock-up](#443-web-applications-mock-up)
    + [4.4.4. Web Applications User Flow Diagrams](#444-web-applications-user-flow-diagrams)
  * [4.5. Web Applications Prototyping](#45-web-applications-prototyping)
  * [4.6. Domain-Driven Software Architecture](#46-domain-driven-software-architecture)
    + [4.6.1. Software Architecture Context Diagram](#461-software-architecture-context-diagram)
    + [4.6.2. Software Architecture Container Diagram](#462-software-architecture-container-diagram)
    + [4.6.3. Software Architecture Components Diagram](#463-software-architecture-components-diagram)
  * [4.7. Software Object-Oriented Design](#47-software-object-oriented-design)
    + [4.7.1. Class Diagram](#471-class-diagram)
    + [4.7.2. Class Dictionary](#472-class-dictionary)
  * [4.8. Database Design](#48-database-design)
    + [4.8.1. Database Diagram](#481-database-diagram)

- [CAPÍTULO 5: PRODUCT IMPLEMENTATION & DEPLOYMENT](#capítulo-5-product-implementation--deployment)
  * [5.1. Software Configuration Management](#51-software-configuration-management)
    + [5.1.1. Software Development Environment Configuration](#511-software-development-environment-configuration)
    + [5.1.2. Source Code Management](#512-source-code-management)
    + [5.1.3. Source Code Style Guide & Conventions](#513-source-code-style-guide--conventions)
    + [5.1.4. Software Deployment Configuration](#514-software-deployment-configuration)
  * [5.2. Landing Page, Services & Applications Implementation](#52-landing-page-services--applications-implementation)
    + [5.2.1. Sprint 1](#521-sprint-1)
      - [5.2.1.1. Sprint Planning](#5211-sprint-planning)
      - [5.2.1.2. Aspect Leaders and Collaborators](#5212-aspect-leaders-and-collaborators)
      - [5.2.1.3 Sprint Backlog 1](#5213-sprint-backlog-1)
      - [5.1.2.4. Development Evidence for Sprint Review](#5124-development-evidence-for-sprint-review)
      - [5.2.1.5. Execution Evidence for Sprint Review](#5215-execution-evidence-for-sprint-review)
      - [5.2.1.6. Services Documentation Evidence for Sprint Review](#5216-services-documentation-evidence-for-sprint-review)
      - [5.2.1.7. Software Deployment Evidence for Sprint Review](#5217-software-deployment-evidence-for-sprint-review)
      - [5.2.1.8. Team Collaboration Insights during Sprint](#5218-team-collaboration-insights-during-sprint)

- [Conclusiones](#conclusiones)
  
- [Recomendaciones](#recomendaciones)
  
- [Bibliografía](#bibliografÍa)
  
- [Anexos](#anexos)

# Student Outcome

ABET - EAC - Student Outcome 5
Criterio: La capacidad de funcionar efectivamente en un equipo cuyos miembros juntos proporcionan liderazgo, crean un entorno de colaboración e inclusivo, establecen objetivos, planifican tareas y cumplen objetivos.

| Criterio específico                                        | Acciones realizadas                                                                                                                                   | Conclusiones                                                                                                                                                                                                                                                                                 |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Comunica oralmente con efectividad a diferentes rangos de audiencia | - Binda Arbañil, Marcelo Alejandro (TB1)<br>- Castillo Garay, Ainhoa Lucía (TB1)<br>- Martel Andrade, Cassius Estefano (TB1)<br>- Nakamurakare Teruya, Alex Tomio (TB1)<br>- Ortiz Alarcón, Víctor Nicolás (TB1) | El desarrollo de VolunTrack fortaleció nuestra capacidad de comunicación oral, evidenciado en las presentaciones del TB1 y en la creación de videos expositivos del proyecto, el prototipo y el landing page. Esto nos permitió aprender a adaptar la información técnica a audiencias diversas y a participar eficazmente en discusiones y debates dentro del equipo, mejorando nuestra claridad al exponer ideas y responder preguntas. |
| Comunica por escrito con efectividad a diferentes rangos de audiencia | - Binda Arbañil, Marcelo Alejandro (TB1)<br>- Castillo Garay, Ainhoa Lucía (TB1)<br>- Martel Andrade, Cassius Estefano (TB1)<br>- Nakamurakare Teruya, Alex Tomio (TB1)<br>- Ortiz Alarcón, Víctor Nicolás (TB1) | La elaboración del informe de VolunTrack mejoró significativamente nuestras habilidades de comunicación escrita, al requerir la redacción precisa de especificaciones, la documentación clara de decisiones de diseño y la creación de diagramas comprensibles, logrando transmitir información técnica de manera efectiva a través de un documento coherente y bien estructurado. |


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

# CAPÍTULO 3: REQUIREMENTS SPECIFICATION

## 3.1. To-Be Scenario Mapping

**Segmento #1: Líderes y coordinadores de ONGs** 

<p align="center">
  <img src="https://imgur.com/ZHMBJxk.png" alt="tobe1" width="500">
</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/gCslzZW.png" alt="tobe2" width="500">
</p>

## 3.2. User Stories
### 3.2.1. Requisitos
**Requisitos Funcionales**

| Código  | Requisito |
|---------|-----------|
| RFU-01 | Registro de ONGs |
| RFU-02 | Gestión de perfil de ONG |
| RFU-03 | Creación y edición de actividades de voluntariado |
| RFU-04 | Exploración de actividades disponibles |
| RFU-05 | Inscripción de voluntarios en actividades |
| RFU-06 | Visualización de voluntarios inscritos por actividad |
| RFU-07 | Marcado de asistencia |
| RFU-08 | Generación automática de certificados |
| RFU-09 | Historial de participación de voluntarios |
| RFU-10 | Comunicación entre ONG y voluntarios |
| RFU-11 | Aprobación o rechazo de inscripciones |
| RFU-12 | Generación de informes de participación |
| RFU-13 | Vista de resumen de participación por voluntario |
| RFU-14 | Visualización de propuesta de valor en landing page |
| RFU-15 | Acceso a información sobre planes y precios |
| RFU-16 | Consulta de contacto y pasos para iniciar |
| RFU-17 | Gestión de usuarios |
| RFU-18 | Gestión de actividades vía API |
| RFU-19 | Gestión de asistencia vía API |
| RFU-20 | Dashboard de administración de voluntariado |

**Requisitos No Funcionales**

| Código  | Requisito |
|---------|-----------|
| RNFU-01 | Interfaz amigable |
| RNFU-02 | Escalabilidad |
| RNFU-03 | Tiempo de respuesta |
| RNFU-04 | Disponibilidad del sistema |
| RNFU-05 | Accesibilidad multiplataforma |
| RNFU-06 | Notificaciones personalizables |
| RNFU-07 | Seguridad de los datos |
| RNFU-08 | Compatibilidad API |

### 3.2.2. Historias de Usuario

| **User Story ID** | US01 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Registrar nueva ONG |
| **Description**    | Como coordinador de una ONG, quiero poder registrar mi organización en VolunTrack para empezar a gestionar a mis voluntarios y actividades en un solo lugar. |
| **Acceptance Criteria #1** | Dado que el usuario accede a la página de registro de ONG<br>Cuando completa todos los campos requeridos y hace clic en “Registrarse”<br>Entonces el sistema guarda los datos y muestra un mensaje de confirmación con instrucciones para verificar el correo electrónico. |
| **Acceptance Criteria #2** | Dado que el usuario intenta registrarse con un correo electrónico ya utilizado<br>Cuando presiona el botón de “Registrarse”<br>Entonces el sistema muestra un mensaje de error indicando que ese correo ya está en uso. |
| **Acceptance Criteria #3** | Dado que el usuario ingresa una contraseña que no cumple con los requisitos mínimos<br>Cuando intenta enviar el formulario<br>Entonces el sistema muestra una advertencia que describe los criterios necesarios (mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número o símbolo). |

| **User Story ID** | US02 |
|-------------------|------|
| **Epic ID**        | E02 |
| **Title**          | Explorar actividades disponibles |
| **Description**    | Como voluntario, quiero poder explorar las diferentes actividades de voluntariado disponibles en VolunTrack para encontrar oportunidades que se ajusten a mis intereses y disponibilidad. |
| **Acceptance Criteria #1** | Dado que el voluntario accede a la página de actividades disponibles<br>Cuando el voluntario filtra las actividades por interés o tipo<br>Entonces el sistema muestra solo las actividades que coinciden con los filtros seleccionados. |
| **Acceptance Criteria #2** | Dado que el voluntario está en la página de actividades<br>Cuando selecciona una actividad específica<br>Entonces el sistema muestra los detalles completos de la actividad, incluyendo descripción, fecha, hora, lugar, y número de voluntarios necesarios. |
| **Acceptance Criteria #3** | Dado que el voluntario desea ver las actividades de una fecha específica<br>Cuando elige una fecha en el calendario o usa los filtros de fecha<br>Entonces el sistema actualiza la lista de actividades disponibles para esa fecha. |

| **User Story ID** | US03 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Crear nueva actividad |
| **Description**    | Como coordinador de una ONG, quiero poder crear nuevas actividades de voluntariado en VolunTrack, especificando detalles como la descripción, fecha, hora, ubicación y número de voluntarios necesarios. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al formulario de creación de actividad<br>Cuando ingresa todos los detalles requeridos (descripción, fecha, hora, ubicación, número de voluntarios)<br>Entonces el sistema permite guardar la actividad y muestra un mensaje de confirmación. |
| **Acceptance Criteria #2** | Dado que el coordinador está creando una nueva actividad<br>Cuando la fecha y hora de la actividad ingresada ya están ocupadas por otra actividad<br>Entonces el sistema muestra un mensaje de advertencia indicando el conflicto de horario y no permite guardar la actividad. |
| **Acceptance Criteria #3** | Dado que el coordinador ha creado una actividad<br>Cuando la actividad es guardada<br>Entonces el sistema muestra la nueva actividad en el calendario de la organización y notifica a los voluntarios que la actividad está disponible para registrarse. |

| **User Story ID** | US04 |
|-------------------|------|
| **Epic ID**        | E02 |
| **Title**          | Inscribirme en una actividad |
| **Description**    | Como voluntario, quiero poder inscribirme fácilmente en una actividad de voluntariado que me interese a través de VolunTrack. |
| **Acceptance Criteria #1** | Dado que el voluntario está viendo una actividad disponible<br>Cuando hace clic en el botón "Inscribirme"<br>Entonces el sistema registra al voluntario en la actividad y muestra un mensaje de confirmación de inscripción. |
| **Acceptance Criteria #2** | Dado que el voluntario intenta inscribirse en una actividad<br>Cuando la actividad ya está llena (número máximo de voluntarios alcanzado)<br>Entonces el sistema muestra un mensaje indicando que no es posible inscribirse debido a que no hay más plazas disponibles. |
| **Acceptance Criteria #3** | Dado que el voluntario ya está inscrito en una actividad<br>Cuando el voluntario accede a la actividad<br>Entonces el sistema muestra un mensaje indicando que ya está inscrito y permite cancelar la inscripción si lo desea. |

| **User Story ID** | US05 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Ver lista de voluntarios por actividad |
| **Description**    | Como coordinador de una ONG, quiero poder ver la lista de voluntarios inscritos en cada actividad para tener una visión clara de quién participará. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a una actividad específica<br>Cuando selecciona la opción de ver los voluntarios inscritos<br>Entonces el sistema muestra una lista con los nombres y detalles de los voluntarios registrados en esa actividad. |
| **Acceptance Criteria #2** | Dado que el coordinador visualiza la lista de voluntarios<br>Cuando la lista contiene más de 10 voluntarios<br>Entonces el sistema permite al coordinador buscar y filtrar voluntarios por nombre, fecha de inscripción u otros criterios relevantes. |
| **Acceptance Criteria #3** | Dado que el coordinador está visualizando la lista de voluntarios<br>Cuando un voluntario decide cancelar su inscripción<br>Entonces el sistema actualiza la lista de voluntarios inscritos y muestra un mensaje de confirmación. |

| **User Story ID** | US06 |
|-------------------|------|
| **Epic ID**        | E03 |
| **Title**          | Recibir notificaciones de actividades |
| **Description**    | Como voluntario, quiero poder recibir notificaciones sobre nuevas actividades que coincidan con mis intereses o recordatorios de las actividades en las que me he inscrito. |
| **Acceptance Criteria #1** | Dado que el voluntario ha especificado sus intereses en el perfil<br>Cuando se publiquen nuevas actividades que coincidan con esos intereses<br>Entonces el sistema envía una notificación al voluntario informándole sobre las nuevas actividades disponibles. |
| **Acceptance Criteria #2** | Dado que el voluntario está inscrito en una actividad<br>Cuando se acerque la fecha de la actividad<br>Entonces el sistema envía un recordatorio al voluntario para que se prepare para la actividad. |
| **Acceptance Criteria #3** | Dado que el voluntario ha optado por recibir notificaciones<br>Cuando se realice cualquier cambio importante en una actividad a la que está inscrito (hora, ubicación, cancelación, etc.)<br>Entonces el sistema envía una notificación informando al voluntario sobre el cambio. |

| **User Story ID** | US07 |
|-------------------|------|
| **Epic ID**        | E03 |
| **Title**          | Marcar asistencia de voluntarios |
| **Description**    | Como coordinador de una ONG, quiero poder marcar la asistencia de los voluntarios en una actividad para llevar un registro de su participación. |
| **Acceptance Criteria #1** | Dado que el coordinador está en la actividad<br>Cuando selecciona la opción de marcar asistencia<br>Entonces el sistema muestra una lista de voluntarios inscritos y permite al coordinador marcar su asistencia con un clic. |
| **Acceptance Criteria #2** | Dado que el coordinador marca la asistencia de los voluntarios<br>Cuando un voluntario está ausente<br>Entonces el coordinador puede registrar la ausencia y el sistema actualizará el estado de asistencia. |
| **Acceptance Criteria #3** | Dado que el coordinador ha marcado la asistencia de los voluntarios<br>Cuando se guarda la información<br>Entonces el sistema genera un informe de asistencia que puede ser descargado o visualizado por el coordinador. |

| **User Story ID** | US08 |
|-------------------|------|
| **Epic ID**        | E04 |
| **Title**          | Ver mi historial de participación |
| **Description**    | Como voluntario, quiero poder ver un historial de todas las actividades en las que he participado a través de VolunTrack. |
| **Acceptance Criteria #1** | Dado que el voluntario accede a su perfil<br>Cuando selecciona la opción de "Historial de Participación"<br>Entonces el sistema muestra una lista con todas las actividades en las que el voluntario ha participado, ordenadas por fecha. |
| **Acceptance Criteria #2** | Dado que el voluntario está visualizando su historial de participación<br>Cuando selecciona una actividad de la lista<br>Entonces el sistema muestra los detalles completos de la actividad, incluyendo la fecha, hora, lugar y si completó la actividad. |
| **Acceptance Criteria #3** | Dado que el voluntario tiene un historial de participación<br>Cuando se ha completado una actividad<br>Entonces el sistema marca la actividad como "Completada" y la incluye en su historial con un indicador de estado. |

| **User Story ID** | US09 |
|-------------------|------|
| **Epic ID**        | E04 |
| **Title**          | Generar certificado de participación |
| **Description**    | Como coordinador de una ONG, quiero poder generar certificados de participación para los voluntarios que completaron una actividad. |
| **Acceptance Criteria #1** | Dado que el coordinador tiene acceso a una actividad completada<br>Cuando selecciona la opción de generar certificado para un voluntario<br>Entonces el sistema genera un certificado con el nombre del voluntario, nombre de la actividad, fecha y horas de participación. |
| **Acceptance Criteria #2** | Dado que el coordinador desea generar un certificado de participación<br>Cuando genera el certificado<br>Entonces el sistema ofrece la opción de descargar el certificado en formato PDF o enviarlo por correo electrónico al voluntario. |
| **Acceptance Criteria #3** | Dado que un voluntario ha completado varias actividades<br>Cuando el coordinador selecciona varios voluntarios de la lista de inscritos<br>Entonces el sistema permite generar certificados individuales para cada uno de los voluntarios seleccionados. |

| **User Story ID** | US10 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Editar detalles de una actividad |
| **Description**    | Como coordinador de una ONG, quiero poder editar los detalles de una actividad existente (como fecha, hora, descripción o número de voluntarios necesarios) para mantener la información actualizada. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a una actividad existente<br>Cuando selecciona la opción "Editar" en los detalles de la actividad<br>Entonces el sistema muestra un formulario con todos los campos editables (fecha, hora, descripción, número de voluntarios necesarios, etc.). |
| **Acceptance Criteria #2** | Dado que el coordinador edita los detalles de una actividad<br>Cuando se realiza un cambio en la fecha y hora<br>Entonces el sistema verifica que la nueva fecha y hora no generen conflictos con otras actividades y muestra un mensaje de advertencia en caso de conflicto. |
| **Acceptance Criteria #3** | Dado que el coordinador ha editado los detalles de la actividad<br>Cuando hace clic en "Guardar cambios"<br>Entonces el sistema actualiza la actividad con los nuevos detalles y muestra un mensaje de confirmación indicando que los cambios fueron guardados correctamente. |

| **User Story ID** | US11 |
|-------------------|------|
| **Epic ID**        | E03 |
| **Title**          | Comunicarme con los voluntarios de una actividad |
| **Description**    | Como coordinador de una ONG, quiero poder enviar mensajes o notificaciones a los voluntarios inscritos en una actividad específica para compartir información importante o recordatorios. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a una actividad específica<br>Cuando selecciona la opción para enviar un mensaje a los voluntarios inscritos<br>Entonces el sistema muestra una interfaz para redactar el mensaje y permite elegir a los voluntarios a quienes se enviará el mensaje. |
| **Acceptance Criteria #2** | Dado que el coordinador ha redactado un mensaje<br>Cuando hace clic en "Enviar mensaje"<br>Entonces el sistema envía el mensaje o notificación a todos los voluntarios inscritos en la actividad y muestra un mensaje de confirmación. |
| **Acceptance Criteria #3** | Dado que el coordinador ha enviado un mensaje a los voluntarios<br>Cuando los voluntarios reciban el mensaje<br>Entonces el sistema muestra una notificación en la plataforma o envía una alerta por correo electrónico o mensaje de texto (según la preferencia del voluntario). |

| **User Story ID** | US12 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Gestionar el estado de inscripción de un voluntario |
| **Description**    | Como coordinador de una ONG, quiero poder aprobar o rechazar la inscripción de un voluntario a una actividad, o incluso dar de baja a un voluntario si es necesario. |
| **Acceptance Criteria #1** | Dado que el coordinador está viendo la lista de voluntarios inscritos en una actividad<br>Cuando selecciona un voluntario de la lista<br>Entonces el sistema muestra opciones para aprobar, rechazar o dar de baja al voluntario de la actividad. |
| **Acceptance Criteria #2** | Dado que el coordinador aprueba o rechaza la inscripción de un voluntario<br>Cuando se hace la selección<br>Entonces el sistema actualiza el estado de inscripción del voluntario y envía una notificación al voluntario informándole sobre la decisión (aprobación, rechazo o baja). |
| **Acceptance Criteria #3** | Dado que el coordinador decide dar de baja a un voluntario<br>Cuando el coordinador confirma la acción<br>Entonces el sistema elimina al voluntario de la actividad y actualiza la lista de voluntarios inscritos, notificando al voluntario que su inscripción ha sido cancelada. |

| **User Story ID** | US13 |
|-------------------|------|
| **Epic ID**        | E04 |
| **Title**          | Ver un resumen de la participación de un voluntario |
| **Description**    | Como coordinador de una ONG, quiero poder ver un resumen del historial de participación de un voluntario específico, incluyendo las actividades en las que ha participado y las horas dedicadas. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al perfil de un voluntario<br>Cuando selecciona la opción de "Ver resumen de participación"<br>Entonces el sistema muestra un resumen con las actividades en las que el voluntario ha participado, ordenadas por fecha, junto con las horas dedicadas a cada una. |
| **Acceptance Criteria #2** | Dado que el coordinador visualiza el historial de participación<br>Cuando el coordinador hace clic en una actividad específica del resumen<br>Entonces el sistema muestra los detalles completos de esa actividad, incluyendo el número de horas y la descripción de la actividad. |
| **Acceptance Criteria #3** | Dado que el coordinador ve el historial de participación<br>Cuando el voluntario ha completado varias actividades<br>Entonces el sistema proporciona un total acumulado de las horas de participación del voluntario y un indicador de su nivel de participación. |

| **User Story ID** | US14 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Generar informes de impacto para voluntarios |
| **Description**    | Como coordinador de una ONG, quiero poder generar informes personalizados para cada voluntario que muestren su contribución en términos de horas dedicadas, tareas realizadas e incluso un estimado del impacto que han generado para que se sientan valorados y vean el resultado de su esfuerzo. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al perfil de un voluntario<br>Cuando selecciona la opción para generar un informe de impacto<br>Entonces el sistema genera un informe con el total de horas dedicadas por el voluntario, las actividades en las que participó y un resumen de las tareas realizadas. |
| **Acceptance Criteria #2** | Dado que el coordinador está generando el informe de impacto<br>Cuando se calculan las horas dedicadas y las tareas realizadas<br>Entonces el sistema permite incluir una estimación del impacto del voluntario, basada en parámetros como el número de personas beneficiadas, el tipo de actividad y otros factores relevantes. |
| **Acceptance Criteria #3** | Dado que el coordinador ha generado el informe de impacto<br>Cuando hace clic en "Descargar informe"<br>Entonces el sistema proporciona el informe en formato PDF o permite enviarlo por correo electrónico al voluntario, mostrando el valor de su contribución. |

| **User Story ID** | US15 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Entender la propuesta de valor para ONGs |
| **Description**    | Como visitante (líder o coordinador de una ONG), quiero poder entender claramente en la página principal de VolunTrack cómo esta plataforma puede ayudar a mi organización a gestionar el voluntariado de manera más eficiente y efectiva, destacando los beneficios clave como la centralización, el ahorro de tiempo y la mejora del impacto social. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la página principal de VolunTrack<br>Cuando visualiza la propuesta de valor de la plataforma<br>Entonces el sistema debe presentar una sección clara y destacada que explique cómo la plataforma centraliza la gestión del voluntariado, con ejemplos prácticos de uso. |
| **Acceptance Criteria #2** | Dado que el visitante está viendo la propuesta de valor<br>Cuando hace clic en los beneficios clave<br>Entonces el sistema debe mostrar más detalles interactivos o pop-ups que expliquen cómo VolunTrack ahorra tiempo y mejora la eficiencia en la gestión de voluntarios. |
| **Acceptance Criteria #3** | Dado que el visitante está interesado en los beneficios de la plataforma<br>Cuando lee la propuesta de valor<br>Entonces el sistema debe incluir ejemplos de casos de éxito o testimonios que resalten cómo VolunTrack ha mejorado el impacto social de otras ONGs. |

| **User Story ID** | US16 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Explorar las funcionalidades clave para voluntarios |
| **Description**    | Como visitante, quiero poder identificar fácilmente en la página principal de VolunTrack las funcionalidades que me permitirán encontrar y participar en actividades de voluntariado de forma sencilla, como la búsqueda por intereses, la visualización de actividades disponibles y el proceso de registro. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la página principal de VolunTrack<br>Cuando visualiza las funcionalidades clave de la plataforma<br>Entonces el sistema debe presentar claramente las opciones para buscar actividades por intereses, mostrando un campo de búsqueda prominente y fácil de usar. |
| **Acceptance Criteria #2** | Dado que el visitante está explorando las funcionalidades de la plataforma<br>Cuando hace clic en "Ver actividades disponibles"<br>Entonces el sistema debe mostrar una lista actualizada de las actividades disponibles que el visitante puede explorar, con filtros para ayudar a organizar la información (por ejemplo, por fecha, ubicación, tipo de actividad). |
| **Acceptance Criteria #3** | Dado que el visitante encuentra una actividad de interés<br>Cuando hace clic en el botón "Registrarse"<br>Entonces el sistema debe guiar al visitante a través del proceso de registro para esa actividad, solicitando la información necesaria para completar la inscripción de manera sencilla. |

| **User Story ID** | US17 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Encontrar información de contacto y cómo empezar |
| **Description**    | Como visitante, quiero poder encontrar fácilmente la información de contacto de VolunTrack y saber cuáles son los siguientes pasos para registrar mi ONG o comenzar a explorar las oportunidades de voluntariado en la plataforma. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la página principal de VolunTrack<br>Cuando busca información de contacto<br>Entonces el sistema debe mostrar de forma clara y visible los métodos de contacto (correo electrónico, teléfono, formulario de contacto, etc.) en la parte superior o inferior de la página, con un enlace directo a una página de contacto. |
| **Acceptance Criteria #2** | Dado que el visitante desea comenzar a explorar las oportunidades de voluntariado<br>Cuando selecciona la opción para "Empezar a explorar" o "Registrarse"<br>Entonces el sistema debe mostrar los pasos siguientes, incluyendo la opción para registrarse en la plataforma o crear una cuenta de ONG, con instrucciones claras para guiar al visitante a través del proceso. |
| **Acceptance Criteria #3** | Dado que el visitante desea registrar su ONG<br>Cuando hace clic en "Registrar mi ONG"<br>Entonces el sistema debe redirigir al visitante a un formulario de registro con los campos necesarios, o proporcionar detalles sobre el proceso para crear una cuenta de ONG, destacando las ventajas y el valor de registrarse en VolunTrack. |

| **User Story ID** | US18 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Conocer los planes y precios para ONGs |
| **Description**    | Como visitante, quiero poder encontrar de forma clara y accesible en la Landing Page de VolunTrack la información sobre los diferentes planes de suscripción y sus respectivos precios, para evaluar si se ajustan al presupuesto y las necesidades de mi organización. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la Landing Page de VolunTrack<br>Cuando busca información sobre planes y precios<br>Entonces el sistema debe mostrar una sección claramente visible con una lista de los planes de suscripción disponibles y sus respectivos precios. |
| **Acceptance Criteria #2** | Dado que el visitante visualiza la información de planes y precios<br>Cuando selecciona un plan específico<br>Entonces el sistema debe mostrar más detalles sobre ese plan, incluyendo características específicas, beneficios adicionales y cualquier restricción o requisito relacionado con el plan. |
| **Acceptance Criteria #3** | Dado que el visitante está interesado en obtener más información sobre los planes<br>Cuando hace clic en un enlace de "Más información" o "Contacto para consultas"<br>Entonces el sistema debe redirigir al visitante a una página de contacto o a una sección donde pueda enviar preguntas o recibir asistencia personalizada para evaluar mejor el plan que más le convenga. |

| **User Story ID** | US19 |
|-------------------|------|
| **Epic ID**        | E07 |
| **Title**          | Endpoint para crear y gestionar actividades |
| **Description**    | Como desarrollador, quiero crear un endpoint de API RESTful que permita a las ONGs crear nuevas actividades de voluntariado, así como leer, actualizar y eliminar la información de las actividades existentes en la base de datos. |
| **Acceptance Criteria #1** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud POST para crear una nueva actividad<br>Entonces el sistema debe validar los datos enviados (como la descripción, fecha, hora y número de voluntarios), y si son correctos, debe crear la nueva actividad en la base de datos, respondiendo con un código 201 y los detalles de la actividad creada. |
| **Acceptance Criteria #2** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud GET para leer los detalles de una actividad existente<br>Entonces el sistema debe devolver los detalles de la actividad solicitada, respondiendo con un código 200 y la información de la actividad en formato JSON. |
| **Acceptance Criteria #3** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud PUT para actualizar la información de una actividad existente<br>Entonces el sistema debe validar los datos actualizados y, si son correctos, debe actualizar la actividad en la base de datos, respondiendo con un código 200 y los detalles de la actividad actualizada. |

| **User Story ID** | US20 |
|-------------------|------|
| **Epic ID**        | E07 |
| **Title**          | Endpoint para registrar y gestionar voluntarios |
| **Description**    | Como desarrollador, quiero crear un endpoint de API RESTful que permita a los voluntarios registrarse en la plataforma y a las ONGs leer, actualizar y gestionar la información de los voluntarios (perfil, historial de participación, etc.). |
| **Acceptance Criteria #1** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando un voluntario realiza una solicitud POST para registrarse en la plataforma<br>Entonces el sistema debe validar los datos enviados (como nombre, correo electrónico, intereses, etc.), y si son correctos, debe crear el perfil del voluntario en la base de datos, respondiendo con un código 201 y los detalles del voluntario registrado. |
| **Acceptance Criteria #2** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud GET para leer la información del perfil de un voluntario<br>Entonces el sistema debe devolver los detalles completos del perfil del voluntario solicitado (nombre, historial de participación, actividades inscritas, etc.), respondiendo con un código 200 y los datos en formato JSON. |
| **Acceptance Criteria #3** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud PUT para actualizar la información de un voluntario (como su perfil o historial de participación)<br>Entonces el sistema debe validar los datos actualizados y, si son correctos, debe actualizar la información del voluntario en la base de datos, respondiendo con un código 200 y los detalles del voluntario actualizado. |

| **User Story ID** | US21 |
|-------------------|------|
| **Epic ID**        | E07 |
| **Title**          | Endpoint para la inscripción y asistencia a actividades |
| **Description**    | Como desarrollador, quiero crear un endpoint de API RESTful que permita a los voluntarios inscribirse en actividades específicas y a las ONGs registrar la asistencia de los voluntarios a dichas actividades. |
| **Acceptance Criteria #1** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando un voluntario realiza una solicitud POST para inscribirse en una actividad específica<br>Entonces el sistema debe verificar que la actividad esté disponible y que haya plazas disponibles, luego registrar la inscripción del voluntario en la actividad, respondiendo con un código 201 y los detalles de la inscripción. |
| **Acceptance Criteria #2** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud GET para ver los voluntarios inscritos en una actividad<br>Entonces el sistema debe devolver la lista de voluntarios inscritos, junto con sus detalles (nombre, correo electrónico, horas asignadas, etc.), respondiendo con un código 200 y los datos en formato JSON. |
| **Acceptance Criteria #3** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud PUT para registrar la asistencia de un voluntario a una actividad (por ejemplo, al marcar "asistió")<br>Entonces el sistema debe actualizar el estado de la asistencia del voluntario y responder con un código 200 y la confirmación de que la asistencia ha sido registrada correctamente. |
| **Acceptance Criteria #4** | Dado que el desarrollador ha creado el endpoint de la API<br>Cuando una ONG realiza una solicitud DELETE para eliminar la inscripción de un voluntario a una actividad<br>Entonces el sistema debe eliminar la inscripción del voluntario en la actividad y responder con un código 204 sin contenido. |

| **User Story ID** | US22 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Ver y gestionar voluntarios |
| **Description**    | Como coordinador de una ONG, quiero poder ver una lista completa de todos los voluntarios registrados en la plataforma junto con información relevante, para poder administrar nuestra base de voluntarios de manera eficiente. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a la sección de voluntarios<br>Cuando selecciona la opción "Ver voluntarios"<br>Entonces el sistema debe mostrar una lista completa de todos los voluntarios registrados, incluyendo información relevante como nombre, correo electrónico, historial de actividades y estado de participación. |
| **Acceptance Criteria #2** | Dado que el coordinador está visualizando la lista de voluntarios<br>Cuando realiza una búsqueda o aplica filtros (por nombre, actividad, estado, etc.)<br>Entonces el sistema debe actualizar la lista de voluntarios para mostrar solo aquellos que coinciden con los criterios de búsqueda o filtro seleccionados. |
| **Acceptance Criteria #3** | Dado que el coordinador está viendo la lista de voluntarios<br>Cuando selecciona un voluntario específico<br>Entonces el sistema debe mostrar los detalles completos de ese voluntario, incluyendo su perfil, historial de actividades y cualquier otra información relevante, permitiendo al coordinador gestionar su información (editar, eliminar, etc.). |

| **User Story ID** | US23 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Visualizar Calendario de Actividades |
| **Description**    | Como coordinador de una ONG, quiero tener una vista de calendario interactiva de todas las actividades programadas de mi organización dentro de un panel de control, para poder visualizar fácilmente la distribución de las actividades a lo largo del tiempo, identificar posibles conflictos de programación y tener una visión general rápida de nuestro plan de voluntariado. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al panel de control de actividades<br>Cuando visualiza el calendario interactivo<br>Entonces el sistema muestra todas las actividades programadas en un formato de calendario (mensual, semanal o diario) según la preferencia seleccionada por el coordinador. |
| **Acceptance Criteria #2** | Dado que el coordinador visualiza el calendario de actividades<br>Cuando hace clic en una actividad<br>Entonces el sistema muestra una ventana emergente o un modal con los detalles completos de la actividad, como la fecha, hora, descripción, lugar, y número de voluntarios inscritos. |
| **Acceptance Criteria #3** | Dado que el coordinador ve el calendario<br>Cuando hay un conflicto de programación (actividades que se superponen en el mismo horario)<br>Entonces el sistema resalta las actividades en conflicto y muestra una advertencia o notificación para que el coordinador pueda identificar y resolver el conflicto de manera eficiente. |
| **Acceptance Criteria #4** | Dado que el coordinador desea agregar una nueva actividad<br>Cuando selecciona una fecha en el calendario y completa los campos necesarios para crear una nueva actividad<br>Entonces el sistema agrega la actividad al calendario y actualiza la vista para reflejar la nueva programación. |

| **User Story ID** | US24 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Dashboard de Actividades |
| **Description**    | Como coordinador de una ONG, quiero tener un panel de control (dashboard) que me ofrezca una visión general del estado de nuestras actividades para poder tener una perspectiva general del programa de voluntariado de mi organización y tomar decisiones informadas. |
| **Acceptance Criteria #1** | Dado que un usuario ha ingresado sus credenciales válidas y ha pulsado el botón "Iniciar Sesión"<br>Cuando la autenticación es exitosa<br>Entonces el sistema lo redirige automáticamente a la vista de su dashboard principal. |
| **Acceptance Criteria #2** | Dado que hay próximas actividades programadas para la ONG<br>Cuando el coordinador visualiza el dashboard<br>Entonces se muestra una lista de las próximas actividades con su título y fecha de inicio. |
| **Acceptance Criteria #3** | Dado que el coordinador ha iniciado sesión<br>Cuando visualiza los elementos del dashboard<br>Entonces se muestra un pequeño calendario integrado que permite acceder rápidamente a la vista completa del calendario de actividades de la ONG. |
| **Acceptance Criteria #4** | Dado que el coordinador ha iniciado sesión<br>Cuando visualiza los elementos del dashboard<br>Entonces se muestran botones o enlaces claramente identificados para las acciones más comunes de la ONG, como crear actividades. |

### 3.2.3. Epicas

| **EPIC 01:** | Gestión de ONGs y Actividades |
|:------------:|:------------------------------|
| | Como coordinador de una ONG, quiero tener herramientas completas para registrar mi organización, crear y modificar actividades de voluntariado, para poder gestionar de manera eficiente nuestras operaciones y oportunidades de participación. |
| **User Story ID** | **Título** |
| US01 | Registrar nueva ONG |
| US03 | Crear nueva actividad |
| US10 | Editar detalles de una actividad |
| US23 | Visualizar Calendario de Actividades |
| US24 | Dashboard de actividades |

| **EPIC 02:** | Exploración y Registro de Voluntarios |
|:------------:|:--------------------------------------|
| | Como voluntario, quiero tener una forma intuitiva de explorar las actividades disponibles y registrarme fácilmente en aquellas que me interesen, para poder encontrar oportunidades relevantes y unirme a las causas que me importan. |
| **User Story ID** | **Título** |
| US02 | Explorar actividades disponibles |
| US04 | Inscribirme en una actividad |

| **EPIC 03:** | Comunicación y Gestión de Asistencia |
|:------------:|:--------------------------------------|
| | Como coordinador de una ONG y como voluntario, quiero tener funcionalidades efectivas para comunicarnos sobre las actividades y para que la ONG pueda realizar un seguimiento preciso de la asistencia de los voluntarios, para asegurar una buena coordinación y reconocer la participación. |
| **User Story ID** | **Título** |
| US06 | Recibir notificaciones de actividades |
| US07 | Marcar asistencia de voluntarios |
| US11 | Comunicarme con los voluntarios de una actividad |

| **EPIC 04:** | Reportes de Participación y Reconocimiento |
|:------------:|:-------------------------------------------|
| | Como voluntario y como coordinador de una ONG, quiero tener acceso a reportes sobre la participación y herramientas para generar reconocimientos, para que los voluntarios puedan ver su contribución y las ONGs puedan valorar su esfuerzo. |
| **User Story ID** | **Título** |
| US08 | Ver mi historial de participación |
| US09 | Generar certificado de participación |
| US13 | Ver un resumen de la participación de un voluntario |

| **EPIC 05:** | Visualización de Voluntarios e Informes de Impacto |
|:------------:|:--------------------------------------------------|
| | Como coordinador de una ONG, quiero poder ver fácilmente la lista de voluntarios para cada actividad y generar informes sobre el impacto de su trabajo, para tener una visión clara de quiénes participan y demostrar el valor del voluntariado. |
| **User Story ID** | **Título** |
| US05 | Ver lista de voluntarios por actividad |
| US12 | Gestionar el estado de inscripción de un voluntario |
| US14 | Generar informes de impacto para voluntarios |
| US22 | Ver y gestionar voluntarios |

| **EPIC 06:** | Experiencia en Landing Page |
|:------------:|:----------------------------|
| | Como visitante interesado, quiero encontrar fácilmente en la Landing Page información clara sobre la propuesta de valor de VolunTrack, las funcionalidades clave y cómo empezar a utilizar la plataforma, para comprender sus beneficios y decidir si se ajusta a mis necesidades. |
| **User Story ID** | **Título** |
| US15 | Entender la propuesta de valor para ONGs |
| US16 | Explorar las funcionalidades clave para voluntarios |
| US17 | Encontrar información de contacto y cómo empezar |
| US18 | Conocer los planes y precios para ONGs |

| **EPIC 07:** | API para Gestión de Voluntarios, Actividades, Inscripción y Asistencia |
|:------------:|:-----------------------------------------------------------------------|
| | Como desarrollador, quiero tener un API RESTful robusto que me permita integrar las funcionalidades principales de gestión de ONGs, actividades, voluntarios e inscripciones con otros sistemas, para facilitar la extensibilidad y la interoperabilidad de VolunTrack. |
| **User Story ID** | **Título** |
| US19 | Endpoint para crear y gestionar actividades |
| US20 | Endpoint para registrar y gestionar voluntarios |
| US21 | Endpoint para la inscripción y asistencia a actividades |

## 3.3. Impact Mapping
**Business Goals**

1. Alcanzar 30 ONGs activas en la plataforma con al menos 2 actividades creadas cada una en los primeros 3 meses. 

<p align="center">
  <img src="https://imgur.com/Z7n2gAE.png" alt="Im1" width="500">
</p>

2. Conseguir que el 70% de los voluntarios que se registran en VolunTrack se inscriban en al menos una actividad durante su primer mes.

<p align="center">
  <img src="https://imgur.com/2HfWMOV.png" alt="Im2" width="500">
</p>

3. Lograr que el 70% de las ONGs activas utilicen las herramientas de la plataforma para analizar la participación de sus voluntarios y reconocer su contribución (viendo listas, resúmenes, generando certificados o informes de impacto) al menos una vez al mes durante los próximos 3 meses.

<p align="center">
  <img src="https://imgur.com/rA1TX1O.png" alt="Im3" width="500">
</p>

4. Aumentar en un 15% la tasa de conversión de visitantes de la Landing Page a usuarios registrados en la plataforma en los próximos 2 meses

<p align="center">
  <img src="https://imgur.com/aJ4KXYo.png" alt="Im4" width="500">
</p>

## 3.4. Product Backlog

| # Orden | User Story ID | Descripción | Story Points (1/2/3/5/8) |
|:-------:|:-------------:|:------------|:-----------------------:|
| 1 | US01 | Como coordinador de una ONG, quiero poder registrar mi organización en VolunTrack para empezar a gestionar a mis voluntarios y actividades en un solo lugar. | 3 |
| 2 | US03 | Como coordinador de una ONG, quiero poder crear nuevas actividades de voluntariado en VolunTrack, especificando detalles como la descripción, fecha, hora, ubicación y número de voluntarios necesarios. | 5 |
| 3 | US02 | Como voluntario, quiero poder explorar las diferentes actividades de voluntariado disponibles en VolunTrack para encontrar oportunidades que se ajusten a mis intereses y disponibilidad. | 5 |
| 4 | US04 | Como voluntario, quiero poder inscribirme fácilmente en una actividad de voluntariado que me interese a través de VolunTrack. | 3 |
| 5 | US23 | Como coordinador de una ONG, quiero tener una vista de calendario interactiva de todas las actividades programadas de mi organización dentro de un panel de control, para poder visualizar fácilmente la distribución de las actividades a lo largo del tiempo, identificar posibles conflictos de programación y tener una visión general rápida de nuestro plan de voluntariado. | 5 |
| 6 | US24 | Como coordinador de una ONG, quiero tener un panel de control (dashboard) que me ofrezca una visión general del estado de nuestras actividades para poder tener una perspectiva general del programa de voluntariado de mi organización y tomar decisiones informadas. | 8 |
| 7 | US05 | Como coordinador de una ONG, quiero poder ver la lista de voluntarios inscritos en cada actividad para tener una visión clara de quién participará. | 3 |
| 8 | US07 | Como coordinador de una ONG, quiero poder marcar la asistencia de los voluntarios en una actividad para llevar un registro de su participación. | 3 |
| 9 | US06 | Como voluntario, quiero poder recibir notificaciones sobre nuevas actividades que coincidan con mis intereses o recordatorios de las actividades en las que me he inscrito. | 5 |
| 10 | US08 | Como voluntario, quiero poder ver un historial de todas las actividades en las que he participado a través de VolunTrack. | 3 |
| 11 | US09 | Como coordinador de una ONG, quiero poder generar certificados de participación para los voluntarios que completaron una actividad. | 5 |
| 12 | US12 | Como coordinador de una ONG, quiero poder aprobar o rechazar la inscripción de un voluntario a una actividad, o incluso dar de baja a un voluntario si es necesario. | 3 |
| 13 | US11 | Como coordinador de una ONG, quiero poder enviar mensajes o notificaciones a los voluntarios inscritos en una actividad específica para compartir información importante o recordatorios. | 3 |
| 14 | US13 | Como coordinador de una ONG, quiero poder ver un resumen del historial de participación de un voluntario específico, incluyendo las actividades en las que ha participado y las horas dedicadas. | 3 |
| 15 | US14 | Como coordinador de una ONG, quiero poder generar informes personalizados para cada voluntario que muestren su contribución en términos de horas dedicadas, tareas realizadas e incluso un estimado del impacto que han generado para que se sientan valorados y vean el resultado de su esfuerzo. | 3 |
| 16 | US10 | Como coordinador de una ONG, quiero poder editar los detalles de una actividad existente (como fecha, hora, descripción o número de voluntarios necesarios) para mantener la información actualizada. | 3 |
| 17 | US22 | Como coordinador de una ONG, quiero poder ver una lista completa de todos los voluntarios registrados en la plataforma junto con información relevante, para poder administrar nuestra base de voluntarios de manera eficiente. | 5 |
| 18 | US15 | Como visitante (líder o coordinador de una ONG), quiero poder entender claramente en la página principal de VolunTrack cómo esta plataforma puede ayudar a mi organización a gestionar el voluntariado de manera más eficiente y efectiva, destacando los beneficios clave como la centralización, el ahorro de tiempo y la mejora del impacto social. | 2 |
| 19 | US16 | Como visitante, quiero poder identificar fácilmente en la página principal de VolunTrack las funcionalidades que me permitirán encontrar y participar en actividades de voluntariado de forma sencilla, como la búsqueda por intereses, la visualización de actividades disponibles y el proceso de registro. | 2 |
| 20 | US17 | Como visitante, quiero poder encontrar fácilmente la información de contacto de VolunTrack y saber cuáles son los siguientes pasos para registrar mi ONG o comenzar a explorar las oportunidades de voluntariado en la plataforma. | 2 |
| 21 | US18 | Como visitante, quiero poder encontrar de forma clara y accesible en la Landing Page de VolunTrack la información sobre los diferentes planes de suscripción y sus respectivos precios, para evaluar si se ajustan al presupuesto y las necesidades de mi organización. | 2 |
| 22 | US19 | Como desarrollador, quiero crear un endpoint de API RESTful que permita a las ONGs crear nuevas actividades de voluntariado, así como leer, actualizar y eliminar la información de las actividades existentes en la base de datos. | 5 |
| 23 | US20 | Como desarrollador, quiero crear un endpoint de API RESTful que permita a los voluntarios registrarse en la plataforma y a las ONGs leer, actualizar y gestionar la información de los voluntarios (perfil, historial de participación, etc.). | 5 |
| 24 | US21 | Como desarrollador, quiero crear un endpoint de API RESTful que permita a los voluntarios inscribirse en actividades específicas y a las ONGs registrar la asistencia de los voluntarios a dichas actividades. | 8 |

# CAPÍTULO 4: PRODUCT UX/UI DESIGN
## 4.1. Style Guidelines
VolunTrack es una plataforma web diseñada para facilitar la organización de procesos de ONGs, ofreciendo un diseño intuitivo y accesible. Con ese objetivo en mente, Wasi Masi establece en está sección una guía estructurada de los elementos visuales y de diseño destinados a VolunTrack, de modo que se asegure su uso coherente a lo largo del desarrollo de la plataforma. Esta guía incluye la tipografía, la paleta de colores y el logotipo; elementos de branding enfocados en la simplicidad, que están alineados con el espíritu de VolunTrack: generar impacto.

### 4.1.1. General Style Guidelines
El branding de VolunTrack es el eje central de su identidad visual, concebido para reflejar los valores de la plataforma: compromiso e impacto social. A través de un estilo visual limpio, accesible y moderno, la marca busca representar la esencia de la colaboración solidaria, generando una presencia visual cercana y reconocible. El logo, la paleta de colores y la tipografía de VolunTrack comunican orden y empatía, simbolizando la facilidad con la que las ONGs y los voluntarios pueden conectarse, organizarse y transformar su entorno. El branding está alineado con el propósito colaborativo de la plataforma, asegurando que los usuarios se sientan inspirados por una experiencia intuitiva, motivadora y orientada al cambio social.

#### 4.1.1.1. Tipografía
La tipografía es un elemento esencial dentro de la identidad visual de VolunTrack porque comunica mucho más que solo palabras: transmite personalidad, emociones y profesionalismo. En esta plataforma orientada a la organización y participación social, la tipografía debe reflejar claridad, confianza y accesibilidad. Un tipo de letra bien seleccionado facilita la lectura y navegación para todos los usuarios, desde líderes de ONGs hasta voluntarios nuevos, promoviendo una experiencia fluida y sin fricciones. Por ello, se ha seleccionado la tipografía Alexandria, que ofrece un equilibrio entre modernidad y legibilidad.

Este tipo de letra será utilizado para toda la plataforma, incluyendo el logo. Esta coherencia ayudará a consolidar la identidad de la marca. Una tipografía como Alexandria refuerza los valores de orden y colaboración  que definen a VolunTrack, generando una conexión más fuerte entre la plataforma y su comunidad.

Se han establecido distintos grosores tipográficos —light, regular, medium y bold— con el objetivo de estructurar adecuadamente los niveles de contenido, mejorando la jerarquía visual y facilitando la navegación.

<p align="center">
  <img src="https://imgur.com/CoPI0wo.png" alt="TipoTipoti" width="500">
</p>

#### 4.1.1.2. Colores
La paleta de color no es solo una cuestión estética; es el alma visual de VolunTrack. Los colores elegidos giran en torno al color cian, utilizando diferentes variaciones de este, para que la experiencia sea no solo funcional, sino también emocionalmente significativa. Cada tono ha sido seleccionado con intención de transmitir los valores centrales de la plataforma: organización, confianza, energía positiva y empatía.

<p align="center">
  <img src="https://imgur.com/giFbySZ.png" alt="Colores" width="500">
</p>

**Colores principales**
* #0C7987 (azul verdoso oscuro): Representa compromiso y profesionalismo. Es un color que evoca estabilidad y organización, cualidades que las ONGs valoran profundamente.
* #9BD0DF (celeste): Aporta frescura, transparencia y tranquilidad. Este tono genera confianza y refuerza la idea de que VolunTrack es fácil de usar y accesible para todos.
* #24344C (azul profundo): Da estructura y seriedad. Es ideal para destacar secciones clave sin romper la armonía visual. Un color sobrio que equilibra lo emocional con lo funcional.
* #3C9FB9 (celeste cian): Agrega energía y vitalidad. Es el toque moderno de la paleta, ideal para llamar la atención sin saturar. 
**Colores secundarios**
* #4E96AC (cian grisáceo): Refuerza la coherencia visual y funciona como un conector entre tonos principales. Es versátil, suave y útil para fondos o componentes de navegación.
* #FFFFFF (blanco): El clásico que nunca falla. Es el lienzo que permite que todo respire. Da claridad, orden y contraste.
* #000000 (negro): Usado con mesura, refuerza la legibilidad y aporta elegancia. Ideal para textos importantes y detalles tipográficos.

**Colores secundarios**
* #4E96AC (cian grisáceo): Refuerza la coherencia visual y funciona como un conector entre tonos principales. Es versátil, suave y útil para fondos o componentes de navegación.
* #FFFFFF (blanco): El clásico que nunca falla. Es el lienzo que permite que todo respire. Da claridad, orden y contraste.
* #000000 (negro): Usado con mesura, refuerza la legibilidad y aporta elegancia. Ideal para textos importantes y detalles tipográficos.


#### 4.1.1.3. Espaciado
Nuestro sistema de espaciado primario se establece en 50 píxeles, proporcionando una base visual consistente en toda la interfaz. Para asegurar flexibilidad y adaptabilidad a diversos elementos y contextos, este valor puede ajustarse en incrementos o decrementos de 5 píxeles según sea necesario. Esta aproximación modular facilita una jerarquía visual clara y un ritmo armónico en la disposición de los componentes, contribuyendo a una experiencia de usuario intuitiva y organizada.

Espaciados de 50px en el Dashboard inicial:

<p align="center">
  <img src="https://imgur.com/VV9BG4o.png" alt="Es111" width="500">
</p>

Espaciados con múltiplos de 5 (5px, 15px y 25px):

<p align="center">
  <img src="https://imgur.com/dtDoDIJ.png" alt="Es122" width="500">
</p>


#### 4.1.1.4. Tono de Comunicación y Lenguaje Aplicado
El tono de comunicación de VolunTrack se construye sobre los pilares de la empatía, la claridad, la cercanía y el profesionalismo. Esta plataforma no solo ofrece soluciones digitales para ONGs, sino que también actúa como un puente entre personas que buscan generar un impacto positivo en la sociedad. Por ello, cada mensaje está pensado para transmitir humanidad, compromiso y accesibilidad. VolunTrack se comunica con las personas, estableciendo un vínculo genuino con líderes de organizaciones, voluntarios activos y nuevos interesados en unirse.

El lenguaje que utiliza la plataforma es claro y directo. Se evita el uso de tecnicismos innecesarios y se apuesta por frases sencillas y cotidianas, de modo que cualquier usuario, independientemente de su familiaridad con la tecnología, pueda comprender y utilizar la herramienta con facilidad. La experiencia del usuario es una prioridad, y cada mensaje está diseñado para ser comprensible y sin ambigüedades.

VolunTrack mantiene un tono cercano y positivo. La comunicación está pensada para ser amigable, motivadora y optimista, con el objetivo de inspirar acción y reforzar la idea de que cada pequeño aporte puede generar un gran cambio. De esta manera, se crea una relación de confianza entre la plataforma y su comunidad, incentivando la participación activa. Por ejemplo, en lugar de utilizar frases como “Complete el formulario para inscribirse como voluntario”, VolunTrack prefiere expresiones más cercanas como “¿Listo para empezar? Regístrate y únete como voluntario en solo unos pasos”.

A pesar de su calidez, el tono de VolunTrack también refleja profesionalismo. Todos los mensajes siguen estándares de calidad y coherencia que transmiten seguridad y orden. Esto permite que la plataforma sea percibida como una solución seria y confiable, capaz de acompañar a las organizaciones en su labor social.

### 4.1.2. Web Style Guidelines
*Dashboard de actividades*

<p align="center">
  <img src="https://imgur.com/YeOSuF3.png" alt="WBG1" width="500">
</p>

*Sección de Mis Voluntarios*

<p align="center">
  <img src="https://imgur.com/UpNNBV3.png" alt="WBG2" width="500">
</p>

VolunTrack se estructura en dos pantallas principales para la gestión integral del voluntariado: el Dashboard de Actividades y la sección de Mis Voluntarios. El Dashboard de Actividades sirve como el centro neurálgico para la supervisión y la gestión operativa de las oportunidades de voluntariado, ofreciendo una visión panorámica de las actividades en curso y futuras. Por otro lado, la sección de Mis Voluntarios se enfoca en la gestión de la base de voluntarios de la organización, permitiendo visualizar perfiles, historial de participación y realizar acciones de comunicación y gestión específicas. Esta división en dos áreas principales responde a la necesidad de separar claramente la gestión de las actividades en sí de la gestión de las personas que participan en ellas, facilitando así un flujo de trabajo más organizado e intuitivo. Dentro de estas dos secciones principales, los coordinadores pueden llevar a cabo todas las acciones necesarias para la gestión integral de sus actividades de voluntariado, desde la creación y publicación de oportunidades hasta el seguimiento de la participación y la comunicación con los voluntarios.

## 4.2. Information Architecture
En esta sección, se detallan las decisiones fundamentales que guiarán la organización del contenido tanto en la web como en la aplicación móvil de VolunTrack. El objetivo primordial es asegurar que la estructura de la información, el etiquetado, la navegación y las funcionalidades de búsqueda permitan a visitantes y usuarios interactuar intuitivamente y encontrar la información deseada sin dificultad, facilitando así la adopción y el uso efectivo de la plataforma.

## 4.2.1. Organization Systems
Organization Systems Diagrams

<p align="center">
  <img src="https://imgur.com/2ghtdki.png" alt="OS1" width="500">
</p>

<p align="center">
  <img src="https://imgur.com/yjxlwBV.png" alt="OS2" width="500">
</p>

En la definición de nuestros Organization Systems, hemos establecido una estrategia clara sobre cómo estructurar y presentar la información dentro de VolunTrack. La organización visual del contenido se adaptará al contexto específico de cada sección. Aplicaremos una jerarquía visual para destacar la información más relevante y guiar la atención del usuario, asegurando que los elementos cruciales sean fácilmente identificables. Para procesos que requieran múltiples pasos, como la creación de una nueva actividad, emplearemos una organización secuencial, presentando la información de manera lineal y lógica para facilitar la comprensión y la finalización de la tarea. Finalmente, una organización matricial podría utilizarse en la presentación de listados complejos, como la gestión de voluntarios con múltiples atributos, permitiendo a los usuarios explorar la información a través de diferentes dimensiones.

En cuanto a los esquemas de categorización del contenido, la elección se basará en la naturaleza de la información y las necesidades de los usuarios. Utilizaremos un esquema alfabético para facilitar la búsqueda y localización rápida de elementos específicos, como la lista de voluntarios. Un esquema cronológico será fundamental para presentar información sensible al tiempo, como el historial de participación o el calendario de actividades. La mayor parte del contenido se organizará por tópicos, agrupando la información relacionada para facilitar la exploración y el descubrimiento dentro de las secciones principales como el Dashboard de Actividades o Mis Voluntarios. Finalmente, consideraremos la audiencia para adaptar la presentación y el lenguaje en secciones específicas, asegurando que tanto los coordinadores de ONG como los voluntarios encuentren la información relevante y accesible.

### 4.2.2. Labeling Systems
En la definición de nuestros Labeling Systems, priorizamos la claridad y la concisión para asegurar una comprensión intuitiva de la información presentada en VolunTrack. Las etiquetas utilizadas para representar conjuntos de datos y sus asociaciones se han seleccionado cuidadosamente para ser directas y emplear el mínimo número de palabras posible, evitando la ambigüedad y reduciendo la carga cognitiva para los usuarios. Por ejemplo, al momento de seleccionar una actividad, se tienen las etiquetas “Detalles” e “Inscritos”, que transmiten al usuario perfectamente la distinción entre la información general y específica de la actividad y la sección dedicada a la gestión de los voluntarios que se han unido a ella.

<p align="center">
  <img src="https://imgur.com/1gSxiVc.png" alt="LSLSLS" width="500">
</p>

En los listados de voluntarios, los atributos clave se identifican con etiquetas breves y descriptivas como "Nombre", "Edad" o "Profesión".

<p align="center">
  <img src="https://imgur.com/hYvPZSb.png" alt="LSLSLS2" width="500">
</p>

Buscamos establecer una correspondencia unívoca entre la etiqueta y el contenido que representa, manteniendo la coherencia en toda la interfaz web y móvil. Las acciones disponibles se etiquetan con verbos claros y orientados a la tarea, como "Crear", "Ver más", "Enviar Notificación" y "Marcar Asistencia". 

<p align="center">
  <img src="https://imgur.com/8wc2WqW.png" alt="LSLSLS3" width="500">
</p>

Para las agrupaciones de información relacionada, utilizamos títulos de sección concisos como "Dashboard de Actividades", "Mis Voluntarios" y "Mi Perfil". Este enfoque en la simplicidad y la precisión en el etiquetado busca minimizar la confusión, facilitar la navegación y permitir que los visitantes y usuarios identifiquen rápidamente la información y las funcionalidades que necesitan.

<p align="center">
  <img src="https://imgur.com/GDRvLEV.png" alt="LSLSLS4" width="500">
</p>

### 4.2.3. SEO Tags and Meta Tags

<p align="center">
  <img src="https://imgur.com/PWrstqC.png" alt="SEO" width="500">
</p>

Estos metatags son esenciales para optimizar la visibilidad y la funcionalidad del landing page de VolunTrack. El <meta charset="UTF-8'> asegura la correcta codificación de caracteres, permitiendo la visualización adecuada de texto en diversos idiomas y símbolos. Los metatags <meta name="viewport" content="width=device-width, initial-scale=1.0'> son cruciales para la responsividad, garantizando que la página se adapte correctamente a diferentes tamaños de pantalla y dispositivos móviles, mejorando la experiencia del usuario. Los metatags <meta http-equiv="X-UA-Compatible" content="IE=edge'> y <meta http-equiv="X-UA-Compatible" content="ie=edge'> aseguran la compatibilidad con diferentes versiones de Internet Explorer, evitando problemas de visualización y funcionamiento. Finalmente, el <title>VolunTrack - Plataforma de Gestión de Voluntariado | HOME</title> define el título de la página, que es fundamental para el SEO (Optimización para Motores de Búsqueda) y la identificación de la página en las pestañas del navegador, mejorando la usabilidad y el posicionamiento de VolunTrack.

<p align="center">
  <img src="https://imgur.com/q7Y5In8.png" alt="SEO" width="500">
</p>

Estos metatags optimizan la página "Crear Nueva Actividad" de VolunTrack: el <title> y la <meta name="description'> mejoran el SEO y la comprensión de la página, la <meta name="keywords'> aumenta la visibilidad en búsquedas y la <meta name="author'> atribuye la creación al equipo de desarrollo.

### 4.2.4. Searching Systems

En la sección de Voluntarios Inscritos a una Actividad, implementaremos una barra de búsqueda que permitirá a los coordinadores encontrar rápidamente a un voluntario específico dentro de la lista de inscritos. Esta búsqueda se realizará principalmente por nombre. Los resultados de la búsqueda se actualizarán dinámicamente en la lista de voluntarios inscritos, resaltando el nombre del voluntario encontrado.

<p align="center">
  <img src="https://imgur.com/OucbV8S.png" alt="ss1" width="500">
</p>

De manera similar, en la sección principal de "Mis Voluntarios", se dispone de una barra de búsqueda para localizar voluntarios en toda la base de datos de la ONG. La búsqueda principal se realizará por nombre y correo electrónico. Para refinar la búsqueda, se ofrecen diversos filtros

Los resultados de la búsqueda se mostrarán en la tabla de la lista de voluntarios, manteniendo las columnas informativas relevantes (Nombre, Edad, Profesión, etc.). La barra de búsqueda incluye funcionalidad de autocompletado para nombres y correos electrónicos registrados, facilitando la rapidez y precisión de la búsqueda. Al igual que en otras secciones con listados, se implementará paginación para gestionar grandes volúmenes de voluntarios.

<p align="center">
  <img src="https://imgur.com/xBBksbx.png" alt="ss2" width="500">
</p>

El objetivo de estos sistemas de búsqueda centrados en voluntarios es permitir a los coordinadores encontrar y gestionar la información de los voluntarios de manera eficiente, ya sea dentro del contexto de una actividad específica o en la gestión general de su base de datos.

### 4.2.5. Navigation Systems

<p align="center">
  <img src="https://imgur.com/v84fLNS.png" alt="ns1" width="500">
</p>

El menú superior del landing page de VolunTrack está diseñado para proporcionar una navegación clara e intuitiva, guiando a los usuarios hacia las secciones clave de información y acción. La estructura del menú se basa en una jerarquía simple y lógica, con etiquetas concisas que representan categorías de contenido fácilmente comprensibles para el usuario. La ubicación destacada del botón "ÚNETE" invita a la acción principal, facilitando a los usuarios el inicio del registro o la exploración de la plataforma. La consistencia en el diseño visual del menú, incluyendo la tipografía, el espaciado y los colores, contribuye a una experiencia de usuario coherente y profesional. Además, la disposición horizontal del menú es un patrón común y esperado, lo que reduce la carga cognitiva y permite a los usuarios encontrar rápidamente la información que buscan.

<p align="center">
  <img src="https://imgur.com/fLEJqNi.png" alt="ns2" width="500">
</p>

El menú superior de la aplicación VolunTrack mantiene una estructura y filosofía de diseño similar al menú del landing page, priorizando la claridad y la eficiencia en la navegación. Al igual que en la página principal, se emplean etiquetas concisas y fácilmente comprensibles para representar las secciones funcionales clave de la aplicación.

<p align="center">
  <img src="https://imgur.com/Cp6SEdr.png" alt="ns3" width="500">
</p>

El dashboard de VolunTrack organiza la información y las funciones principales de la aplicación para facilitar la navegación y la interacción eficiente del usuario. Al presentar una visión general estructurada mediante widgets, se prioriza la información clave y se proveen accesos directos a las acciones más comunes, como la gestión de actividades o la visualización de voluntarios. La jerarquía visual, establecida mediante encabezados claros y el agrupamiento lógico de la información, guía al usuario a través del contenido, permitiéndole identificar rápidamente las áreas de interés y las tareas pendientes. La disposición de los elementos y la inclusión de botones de acción estratégicamente ubicados buscan minimizar el esfuerzo cognitivo y optimizar el flujo de trabajo, asegurando que los usuarios puedan alcanzar sus objetivos de manera intuitiva y satisfactoria.

<p align="center">
  <img src="https://imgur.com/NBgt1FC.png" alt="ns4" width="500">
</p>

Los botones "Detalles" e "Inscritos" funcionan como un sistema de navegación segmentado dentro de la vista de una actividad, permitiendo a los usuarios cambiar entre dos tipos de información relevante. Esta segmentación organiza la información en categorías claras y distintas, evitando la sobrecarga cognitiva y facilitando la búsqueda de información específica. 

## 4.3. Landing Page UI Design

### 4.3.1. Landing Page Wireframes

* Wireframe de la sección Home

<p align="center">
  <img src="https://imgur.com/WYRKUPm.png" alt="LDW1" width="500">
</p>

El wireframe presenta una estructura limpia con un titular principal y texto de apoyo en la parte superior, seguido de dos botones de acción clave. El diseño general busca una jerarquía visual clara para guiar al usuario.

* Wireframe de la sección Planes

<p align="center">
  <img src="https://imgur.com/stQvGXQ.png" alt="LDW2" width="500">
</p>

El wireframe de "Planes" muestra tres columnas distintas, cada una representando un plan de suscripción con un título, una breve descripción de sus características y un botón de suscripción. La disposición busca facilitar la comparación directa de las diferentes ofertas.

* Wireframe de la sección FAQ

<p align="center">
  <img src="https://imgur.com/7jVYYfL.png" alt="LDW3" width="500">
</p>

<p align="center">
  <img src="https://imgur.com/ZfHdD8Q.png" alt="LDW4" width="500">
</p>

El wireframe de "Preguntas Frecuentes" presenta un título principal seguido de una pregunta destacada y su respuesta. Debajo, se listan otras preguntas con un formato que sugiere que las respuestas se mostrarán al interactuar con ellas. A la izquierda, se observan placeholders para elementos visuales complementarios.

* Wireframe de la sección Contáctanos

<p align="center">
  <img src="https://imgur.com/AWZipmv.png" alt="LDW5" width="500">
</p>

El wireframe de "Contáctanos" muestra un formulario a la derecha para que los usuarios envíen mensajes, precedido por un breve texto introductorio. A la izquierda, se observa un placeholder para un elemento visual. En la parte inferior, hay placeholders para información de contacto adicional.

* Wireframe de la sección Nuestro Equipo

<p align="center">
  <img src="https://imgur.com/Ihh80CQ.png" alt="LDW6" width="500">
</p>

El wireframe de "Nuestro Equipo" presenta una disposición en cuadrícula con placeholders para fotografías de los miembros del equipo, debajo de cada uno con espacio para su nombre y su rol.

* Wireframe del Footer

<p align="center">
  <img src="https://imgur.com/ZZoSi9v.png" alt="LDW7" width="500">
</p>

El wireframe del footer muestra el logo y una breve descripción de VolunTrack a la izquierda, enlaces de navegación en el centro y placeholders para los logos de clientes que confían en la plataforma a la derecha, junto con iconos de redes sociales.

### 4.3.2. Landing Page Mock-ups

<p align="center">
  <img src="https://imgur.com/PnaDJ9u.png" alt="LDMU1" width="500">
</p>

La pantalla de inicio de VolunTrack presenta de inmediato su propuesta de valor con un titular llamativo y un subtítulo conciso, comunicando el beneficio principal para las ONGs. La imagen de fondo, con manos de diversos colores elevándose, busca conectar emocionalmente con el usuario y transmitir la idea de colaboración e impacto colectivo. La ubicación prominente de los botones de llamada a la acción guía al usuario hacia los siguientes pasos lógicos: registrarse o solicitar más información. El menú de navegación superior es claramente visible y ofrece acceso directo a las secciones clave del sitio, facilitando la exploración de la plataforma. La combinación de elementos textuales y visuales busca captar la atención del visitante y comunicar de manera efectiva el propósito y los beneficios de VolunTrack desde el primer contacto.

<p align="center">
  <img src="https://imgur.com/51oJTv8.png" alt="LDMU2" width="500">
</p>

La sección "Sobre Nosotros" busca establecer la identidad y los valores de VolunTrack, comenzando con un titular que destaca su propuesta de valor diferencial. Un breve párrafo explica la misión de la plataforma, enfocándose en la creación de comunidades y la conexión entre ONGs y voluntarios. Se utilizan elementos visuales impactantes, como un collage de imágenes que representan la diversidad y el impacto del voluntariado, para conectar emocionalmente con el usuario y reforzar el mensaje. 

<p align="center">
  <img src="https://imgur.com/TZTswhp.png" alt="LDMU3" width="500">
</p>

La pantalla de "Planes" presenta las opciones de suscripción de manera clara y comparativa, guiando al usuario a través del proceso de selección. La información se organiza en tarjetas o columnas distintas para cada plan, lo que facilita la comparación de características y precios. Se utiliza una jerarquía visual para destacar los elementos más importantes, como el precio y el botón de llamada a la acción, atrayendo la atención del usuario hacia la conversión. La pantalla emplea un lenguaje conciso y descriptivo para explicar los beneficios de cada plan, y utiliza elementos visuales como íconos o marcas de verificación para resaltar las funcionalidades clave. La disposición de los planes y la información sigue un flujo lógico, desde las opciones más básicas hasta las más avanzadas, permitiendo al usuario tomar una decisión informada y segura.

<p align="center">
  <img src="https://imgur.com/IMmN3qj.png" alt="LDMU4" width="500">
</p>

La sección inicial de Preguntas Frecuentes facilita la búsqueda rápida de información mediante una presentación clara y estructurada. El título "Preguntas Frecuentes" indica directamente el contenido, y el subtítulo "¿Cómo Podemos Ayudarte?" orienta al usuario hacia la utilidad del recurso. Una breve introducción contextualiza la información que se ofrece. Las preguntas se muestran como elementos seleccionables, diseñados para expandirse y mostrar las respuestas, lo que permite un escaneo veloz de los temas y evita la sobrecarga de texto. La diferenciación visual de las preguntas mediante su formato las distingue claramente de las respuestas. Imágenes relevantes complementan el texto, manteniendo el interés del usuario. El diseño general es limpio y espacioso, lo que favorece la legibilidad y la comprensión.

<p align="center">
  <img src="https://imgur.com/Yuz4HnB.png" alt="LDMU5" width="500">
</p>

La segunda sección de la página de Preguntas Frecuentes continúa facilitando el acceso a información relevante mediante una estructura clara y directa. Cada pregunta se presenta de forma individual, con un formato que permite expandir la respuesta al hacer clic. Se mantiene la coherencia visual con la sección anterior, utilizando un diseño limpio y suficiente espacio en blanco para mejorar la legibilidad. 

<p align="center">
  <img src="https://imgur.com/UZ0ldi5.png" alt="LDMU6" width="500">
</p>

La sección "Contáctanos" está diseñada para facilitar la comunicación entre los usuarios y VolunTrack. Un formulario de contacto ocupa el espacio derecho, mientras que el izquierdo tiene el logo como refuerzo de marca. permitiendo a los usuarios enviar consultas específicas de manera directa. La estructura de la sección organiza claramente las diferentes opciones.

<p align="center">
  <img src="https://imgur.com/jNMab0X.png" alt="LDMU7" width="500">
</p>

La continuación de la sección "Contáctanos" proporciona información de contacto adicional organizada de forma clara y accesible. Se presentan tres métodos principales: teléfono, correo electrónico y dirección de oficina, cada uno acompañado de un icono distintivo para facilitar su identificación visual. La información de cada método se muestra de manera concisa y legible, permitiendo a los usuarios encontrar rápidamente los detalles que necesitan. La inclusión de un mapa interactivo de Google Maps en la parte inferior ofrece una referencia visual de la ubicación de la oficina, facilitando la planificación de visitas presenciales. La disposición de los elementos en columnas y el uso de iconos ayudan a estructurar la información y a reducir la carga cognitiva, permitiendo a los usuarios elegir el método de contacto más conveniente de manera intuitiva.

<p align="center">
  <img src="https://imgur.com/QcKTytN.png" alt="LDMU8" width="500">
</p>

La sección "Nuestro Equipo" presenta a los miembros del equipo de VolunTrack de una manera visual y organizada. Cada miembro se identifica con una fotografía clara y un breve texto que incluye su nombre y rol dentro del proyecto. La disposición de las fotos en una cuadrícula facilita la visualización y el escaneo de los diferentes integrantes. El uso de etiquetas de color distintivas debajo de cada foto ayuda a diferenciar visualmente a los miembros y a categorizarlos por área de especialización. Este diseño busca generar confianza y transparencia al mostrar el lado humano del proyecto de forma accesible y directa.

<p align="center">
  <img src="https://imgur.com/LNKoyCn.png" alt="LDMU9" width="500">
</p>

Esta sección, ubicada estratégicamente cerca del final de las pantallas, busca generar confianza y credibilidad al mostrar logotipos de organizaciones que aparentemente utilizan VolunTrack. El título "¿Quién confía en VolunTrack?" plantea una pregunta directa que se responde visualmente con los logos de diversas entidades. La disposición horizontal de los logos permite un escaneo rápido y fácil de las marcas asociadas. 

<p align="center">
  <img src="https://imgur.com/oX9HJPw.png" alt="LDMU10" width="500">
</p>

El pie de página de VolunTrack organiza información relevante y enlaces de interés de forma concisa y accesible. La sección "Links rápidos" ofrece una navegación alternativa a las secciones principales del sitio, facilitando el acceso directo a información clave. La sección "Clientes que confían en nosotros" refuerza la credibilidad al mostrar visualmente los logos de organizaciones que utilizan la plataforma. Además, se incluye un breve texto descriptivo de VolunTrack y enlaces a redes sociales, proporcionando contexto y extendiendo la presencia de la marca. La disposición de los elementos en columnas facilita la lectura y el escaneo, permitiendo a los usuarios encontrar rápidamente la información que buscan o conectar con VolunTrack en diferentes canales.

## 4.4. Web Applications UX/UI Design

### 4.4.1. Web Applications Wireframes

<p align="center">
  <img src="https://imgur.com/1cV72ZZ.png" alt="WAW1" width="500">
</p>

El primer wireframe de VolunTrack corresponde a la pantalla principal de la plataforma. En la parte superior se ubica una barra de navegación que integra el logo y accesos directos al Dashboard, la sección de voluntarios, las notificaciones y el perfil personal. En el área central se despliega el "Dashboard de Actividades", donde se listan las diversas oportunidades de voluntariado que ofrece el sistema.

<p align="center">
  <img src="https://imgur.com/Iz0uSHa.png" alt="WAW2" width="500">
</p>

El presente wireframe muestra la información de una actividad de voluntariado seleccionada de la anterior pantalla, dividida en la descripción, instrucciones y propósito de esta.

<p align="center">
  <img src="https://imgur.com/Ahb8PwG.png" alt="WAW3" width="500">
</p>

Al presionar el botón “Inscritos”, se visualiza una pantalla donde se presenta una lista de los voluntarios registrados en la actividad. Asimismo, en el lado izquierdo se encuentran cuatro botones con diferentes funcionalidades con relación al evento de voluntariado. En el lado derecho se encuentra el voluntario seleccionado de la lista central.

<p align="center">
  <img src="https://imgur.com/kXqrmRt.png" alt="WAW4" width="500">
</p>

El presente wireframe muestra la pantalla de creación de eventos de voluntariado, donde el usuario tendrá que llenar diferentes apartados para finalizar la entrada de datos.

<p align="center">
  <img src="https://imgur.com/6PGyp0Q.png" alt="WAW5" width="500">
</p>

Esta pantalla muestra el calendario de las actividades mensuales de la asociación de voluntariado.

<p align="center">
  <img src="https://imgur.com/FZyOzxq.png" alt="WAW6" width="500">
</p>

Accediendo a "Mis Voluntarios" desde el menú principal, se accede a la pantalla reflejada en el sexto wireframe. La interfaz divide la información en bloques: estadísticas generales de los voluntarios, listado detallado de usuarios (con nombre, edad y profesión), perfil ampliado del voluntario seleccionado y un historial de las actividades en las que ha participado.

<p align="center">
  <img src="https://imgur.com/dzIe7ln.png" alt="WAW7" width="500">
</p>

El séptimo wireframe corresponde a la gestión de perfil del líder o coordinador de la ONG. Accediendo mediante el segundo ícono ubicado en la esquina superior derecha, se despliega la información personal, la descripción de la organización y configuraciones de cuenta, permitiendo personalizar la experiencia de uso.

<p align="center">
  <img src="https://imgur.com/6vAEngk.png" alt="WAW8" width="500">
</p>

En este wireframe se visualiza el sistema de notificaciones. Al presionar el primer ícono de la barra superior, se abre un panel lateral donde se enlistan todas las alertas relevantes para el usuario, facilitando el monitoreo de actividades y comunicaciones importantes.

<p align="center">
  <img src="https://imgur.com/uDBsM90.png" alt="WAW9" width="500">
</p>

Por último, se puede apreciar la pantalla de acceso a la plataforma. El usuario puede iniciar sesión mediante su Email y contraseña o crear una nueva cuenta.

### 4.4.2. Web Applications Wireflow Diagrams
**Wireflow #1**

Como usuario, quiero crear una actividad de voluntariado nueva y quiero visualizar los detalles más importantes de esta.

*Task Flow:*

<p align="center">
  <img src="https://imgur.com/U7sUKSh.png" alt="TF1" width="500">
</p>

*Wireflow:*

<p align="center">
  <img src="https://imgur.com/udAXA5Z.png" alt="WF1" width="500">
</p>

Para poder crear una actividad o ver las existentes, se debe seguir un conjunto de pasos. Primero, es vital que el usuario inicie sesión con su cuenta registrada. Continuamente, aparecerá en la pantalla principal de VolunTrack, es decir, el dashboard de actividades. En este, se pueden visualizar los eventos creados previamente por el usuario. Al seleccionar uno de ellos a través del botón “Ver Más”, se mostrarán los detalles de aquel. 

Asimismo, si se desea crear una nueva actividad, encima del dashboard, en la parte derecha, se encuentra el botón de “Crear”, el cual permitirá esta acción. Al presionarlo, aparecerá un formulario con campos relevantes para la creación de la actividad; es necesario llenarlos todos para continuar. Al finalizar, aparecerá la nueva actividad con los detalles colocados.

**Wireflow #2**

Como usuario, quiero ver detalles sobre mis colaboradores, así como la cantidad de nuevos voluntarios que se han inscrito en mi organización.

*Taskflow:*

<p align="center">
  <img src="https://imgur.com/FgJ6OPq.png" alt="TF2" width="500">
</p>

*Wireflow:*

<p align="center">
  <img src="https://imgur.com/0xJUIx9.png" alt="WF2" width="500">
</p>

Para ver detalles sobre los voluntarios y la cantidad de nuevos ingresos, se debe, en primer lugar, iniciar sesión en VolunTrack con credenciales previamente establecidas. Al realizar esta acción, se presentará la pantalla principal de la plataforma, el dashboard de actividades. En el encabezado, que se encuentra en la parte superior, se debe apretar el enlace “Mis Voluntarios”. Este llevará al usuario a la sección de voluntarios de su organización, en la cual podrá ver detalles e información sobre ellos, así como la cantidad de nuevos ingresos. 

Por otro lado, VolunTrack mandará notificaciones al usuario sobre su progreso y su estado. Un tipo de notificación es la felicitación por la cantidad de nuevos ingresos. Desde cualquier sección de la plataforma, al hacer clic en el enlace con el ícono de campana, se podrá acceder a las notificaciones que le llegan al usuario. Al presionar en aquella sobre la cantidad de ingresos, el sistema llevará al usuario a la sección de sus voluntarios, en la cual verá la información proporcionada en la notificación.

**Wireflow #3**

Como usuario, quiero pasar asistencia y emitir certificados para los voluntarios que han asistido a una de las actividades.

*Taskflow:*

<p align="center">
  <img src="https://imgur.com/wolS9u6.png" alt="TF3" width="500">
</p>

*Wireflow:*

<p align="center">
  <img src="https://imgur.com/bincdvb.png" alt="WF3" width="500">
</p>

Para que un usuario pase asistencia y emita certificados en VolunTrack debe empezar por el inicio de sesión en la plataforma, con su correo y contraseña registrada. Luego, desde el "Dashboard de Actividades", el usuario selecciona la actividad correspondiente. Al ingresar a los detalles de la actividad, accede a la sección de "Inscritos", donde puede visualizar la lista de voluntarios registrados. Desde esta pantalla, el usuario puede marcar quiénes asistieron a la actividad y, posteriormente, emitir los certificados para aquellos voluntarios que cumplieron con su participación. Además, hay otras opciones de gestión que puede realizar el usuario, según sea su necesidad.

Para mejor visualización de los Wireflows de VolunTrack, acceder al siguiente link: https://lucid.app/lucidchart/6d203d95-a99b-42f5-89a4-18abdc85c7a8/edit?viewport_loc=-4179%2C-3628%2C29871%2C13885%2C0_0&invitationId=inv_030ec1fa-a7fe-46c5-a660-10386174a01b 

### 4.4.3. Web Applications Mock-up

<p align="center">
  <img src="https://imgur.com/zXEmnVs.png" alt="WAM1" width="500">
</p>

El primer mockup de Voluntrack muestra la pantalla de inicio de la plataforma. En la parte superior se aprecia un encabezado donde aparecen el logo y accesos rápidos al “Dashboard”, “Mis Voluntarios”, a las notificaciones y al perfil del usuario. El centro de la página contiene el “Dashboard de Actividades”, en el cual se encuentran las oportunidades de voluntariado que ofrece la aplicación.

<p align="center">
  <img src="https://imgur.com/cjcW4qS.png" alt="WAM2" width="500">
</p>

Al presionar el botón “VER MÁS”, se podrá apreciar la segunda pantalla de la aplicación. La sección “Detalles” ofrece información completa sobre el evento o actividad de voluntariado seleccionada: descripción extensa, instrucciones, propósito, ubicación y la fecha en la cual se realizará.

<p align="center">
  <img src="https://imgur.com/MPb1l3Q.png" alt="WAM3" width="500">
</p>

El tercer mockup corresponde a la sección de “Inscritos”. En la parte izquierda de la pantalla se muestran cuatro botones: “Enviar Notificación”, “Marcar Asistencia”, “Crear Certificados”, “Abrir Inscripciones”, cada uno con su respectiva funcionalidad. En el centro se aprecia una lista de los voluntarios inscritos a la actividad. En la parte derecha de la pantalla se muestra el perfil del voluntario seleccionado en la lista, con la posibilidad de marcar su asistencia y cambiar el estado de inscripción.

<p align="center">
  <img src="https://imgur.com/LXgsrPl.png" alt="WAM4" width="500">
</p>

Luego de presionar el botón “+ Crear” de la pantalla principal, el usuario se dirige a un formulario de creación de actividades o eventos de voluntariado dividido en campos básicos como título, fecha, dirección, instrucciones y propósito. En la parte izquierda se encuentra un botón de “Adjuntar archivo”, con el cual se podrán adjuntar hasta un máximo de 4 imágenes. 

<p align="center">
  <img src="https://imgur.com/YHuk76R.png" alt="WAM5" width="500">
</p>

Luego de presionar el botón “Calendario” de la pantalla principal, se podrán visualizar todas las actividades de voluntariado creadas por el usuario en cada mes del año.

<p align="center">
  <img src="https://imgur.com/dM4NBu3.png" alt="WAM6" width="500">
</p>

Al presionar “Mis Voluntarios” de la página principal, se aprecia una pantalla dividida en secciones. La primera sección contiene las métricas de los voluntarios inscritos en tus actividades. En la segunda sección, se observa una lista de todos tus voluntarios, mostrando su nombre, edad y profesión. La tercera sección muestra al voluntario seleccionado en la lista anteriormente mencionada. La cuarta sección contiene el historial de las actividades anteriormente realizadas.

<p align="center">
  <img src="https://imgur.com/g5vSzDF.png" alt="WAM7" width="500">
</p>

Al presionar el segundo ícono ubicado en la esquina superior derecha, el usuario se redirigirá a la pantalla de “Mi Perfil”, en el cual se encuentra toda la información personal, descripción y configuración de la asociación de voluntariado.

<p align="center">
  <img src="https://imgur.com/8G8kvF4.png" alt="WAM8" width="500">
</p>

Al presionar el primer ícono ubicado en la esquina superior derecha, se desplegará una sección en la parte derecha de la pantalla, en el cual se muestran todas las notificaciones posibles.

<p align="center">
  <img src="https://imgur.com/hRDHl7I.png" alt="WAM9" width="500">
</p>

El último mockup corresponde al formulario de inicio de sesión de VolunTrack. En esta pantalla, el usuario puede iniciar sesión utilizando su cuenta de Google o Apple. Además, en la parte inferior se encuentra un botón destacado que invita a los nuevos usuarios a "Crear Cuenta", facilitando así tanto el acceso rápido como el registro dentro de la plataforma.

### 4.4.4. Web Applications User Flow Diagrams

**Userflow #1**

Como usuario, quiero crear una actividad de voluntariado nueva y quiero visualizar los detalles más importantes de esta.

<p align="center">
  <img src="https://imgur.com/QsqsgEO.png" alt="UF1" width="500">
</p>

**Userflow #2**

Como usuario, quiero ver detalles sobre mis colaboradores, así como la cantidad de nuevos voluntarios que se han inscrito en mi organización.

<p align="center">
  <img src="https://imgur.com/eU7S8E0.png" alt="UF2" width="500">
</p>

**Userflow #3**

Como usuario, quiero pasar asistencia y emitir certificados para los voluntarios que han asistido a una de las actividades.

<p align="center">
  <img src="https://imgur.com/FP7dWFc.png" alt="UF3" width="500">
</p>

Para mejor visualización de los Userflows de VolunTrack, acceder al siguiente link: https://lucid.app/lucidchart/6d203d95-a99b-42f5-89a4-18abdc85c7a8/edit?viewport_loc=-4179%2C-3628%2C29871%2C13885%2C0_0&invitationId=inv_030ec1fa-a7fe-46c5-a660-10386174a01b

## 4.5. Web Applications Prototyping
Con el propósito de optimizar la accesibilidad y la experiencia de usuario antes del lanzamiento definitivo, desarrollamos un prototipo interactivo enfocado en la navegación web. Este modelo funcional reproduce de manera completa el recorrido que realizará el usuario dentro del sitio, permitiendo explorar directamente las secciones, elementos y flujos de interacción previstos para la versión final.

El prototipo fue creado bajo estrictos principios de arquitectura de la información, jerarquía visual coherente y diseño universal, asegurando una experiencia de navegación intuitiva y accesible para todos los usuarios. Cada elemento fue diseñado respetando estándares de usabilidad y consistencia visual, favoreciendo un entorno digital fluido y agradable.

Partiendo de maquetas de alta fidelidad y criterios de usabilidad previamente establecidos, esta versión interactiva representa con gran precisión la futura interfaz web. Se convierte en una herramienta esencial para validar decisiones de diseño, anticipar posibles puntos de fricción y garantizar una experiencia de usuario consistente, accesible y alineada con los objetivos del proyecto.

Video demostrativo: https://youtu.be/SiFnEpgN64c

Link al prototipo interactivo: https://www.figma.com/proto/krPEYNc7KDEvZbax5LxfrA/VolunTrack?page-id=15%3A170&node-id=35-189&p=f&viewport=110%2C50%2C0.16&t=onC3hpMX1io72KLX-1&scaling=contain&content-scaling=fixed

## 4.6. Domain-Driven Software Architecture
En nuestro proyecto VolunTrack, adoptamos los principios de la Domain-Driven Software Architecture para centrar el diseño y la implementación en el núcleo del negocio: la gestión de actividades de voluntariado y la interacción con los voluntarios. Esto implica modelar el software en torno a los conceptos y la lógica del dominio del voluntariado, asegurando que la estructura y el lenguaje del código reflejen fielmente el mundo real de las ONGs y sus colaboradores, facilitando así la comunicación entre el equipo de desarrollo y los expertos del dominio.

### 4.6.1. Software Architecture Context Diagram

<p align="center">
  <img src="https://imgur.com/FR9QhSq.png" alt="ContextD" width="500">
</p>

### 4.6.2. Software Architecture Container Diagram

<p align="center">
  <img src="https://imgur.com/54gnZXo.png" alt="ContainerD" width="500">
</p>

### 4.6.3. Software Architecture Components Diagram

<p align="center">
  <img src="https://imgur.com/16VhhFW.png" alt="ComponentsD" width="500">
</p>

## 4.7. Software Object-Oriented Design
### 4.7.1. Class Diagram

<p align="center">
  <img src="https://imgur.com/RvZpsav.png" alt="Class" width="500">
</p>

### 4.7.2. Class Dictionary
* Usuario: Representa a cualquier persona registrada tanto voluntarios como líderes o coordinadores de voluntariado en la plataforma. 
* Voluntario: Representa a las personas que participan en actividades de voluntariado. Además de los atributos heredados de “Usuario”, gestiona intereses personales, historial de actividades realizadas, cantidad de participaciones e información sobre las horas voluntarias acumuladas.
* Organizacion: también hereda de Usuario y representa a las entidades que crean y gestionan actividades de voluntariado. Tienen el permiso de crear, editar, ver y eliminar eventos.
* Actividad: Representa las actividades de voluntariado disponibles en la plataforma. Contiene información como nombre, lugar, fecha, duración y asistentes registrados.
* Inscripcion: Registra la participación de un voluntario en una actividad. Contiene detalles como el estado de la inscripción y la fecha en que se realizó.
* Certificado: Documento que acredita la participación de un voluntario en una actividad. Registra las horas realizadas, la fecha de emisión y el estado del certificado.
* InformeImpacto: Reporte que resume el impacto generado por una actividad. Incluye datos como número de participantes, horas trabajadas y una descripción general.
* Notificacion: Mensajes enviados a los usuarios para informar sobre inscripciones, actualizaciones de actividades o eventos relevantes.
* EnvioNotificacion:  Servicio encargado de gestionar el envío y el estado de las notificaciones dentro de la plataforma.
* ActividadFactory: Clase que centraliza la creación de actividades, facilitando su instanciación de manera controlada y consistente.
* GestorActividad: Permite editar o eliminar actividades ya creadas en la plataforma, asegurando su correcta gestión.

## 4.8. Database Design
### 4.8.1. Database Diagram

<p align="center">
  <img src="https://imgur.com/xbCRPHT.png" alt="Database" width="500">
</p>

# CAPÍTULO 5: PRODUCT IMPLEMENTATION & DEPLOYMENT

## 5.1. Software Configuration Management

La Gestión de Configuración de Software (SCM) cumple una función clave en el desarrollo de software, ya que garantiza el control y la coherencia de las versiones y configuraciones a lo largo de todo el ciclo de vida del producto. Según Configu Editorial Team (2024), esta práctica favorece una colaboración fluida entre los equipos, simplifica la administración de cambios complejos y asegura que todos los participantes trabajen en un entorno estandarizado y sincronizado.

### 5.1.1. Software Development Environment Configuration

| Producto             | Propósito en el Proyecto                                         | Categoría              | Ruta de Descarga / Acceso                          | Descripción                                                                                                                                                         |
|----------------------|-------------------------------------------------------------------|-------------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JetBrains Toolbox    | Gestión centralizada de IDEs JetBrains                           | Software Development    | https://www.jetbrains.com/toolbox-app/             | Aplicación que permite instalar, actualizar y gestionar los IDEs de JetBrains, facilitando el mantenimiento del entorno de desarrollo.                             |
| JetBrains IntelliJ IDEA | Desarrollo backend en Java                                    | Software Development    | https://www.jetbrains.com/idea/                   | IDE especializado en desarrollo con Java y otros lenguajes JVM, ideal para proyectos con Spring Boot y Maven.                                                       |
| OpenJDK              | Entorno de ejecución y compilación para Java                     | Software Development    | https://jdk.java.net/                             | OpenJDK es una implementación de código abierto del JDK (Java Development Kit), esencial para ejecutar y compilar aplicaciones Java.                                |
| Maven                | Gestión de dependencias y construcción de proyectos Java         | Software Development    | https://maven.apache.org/                         | Herramienta de automatización de compilación y gestión de proyectos Java, ampliamente utilizada con Spring Boot.                                                    |
| Visual Studio Code   | Edición de código para desarrollo rápido                         | Software Development    | https://code.visualstudio.com/                    | Editor de código fuente liviano y extensible, útil para tareas generales de desarrollo y edición de archivos de configuración.                                      |
| Spring Boot          | Framework para desarrollo backend con Java                      | Software Development    | https://spring.io/projects/spring-boot            | Framework que simplifica la creación de aplicaciones backend con Java, permitiendo levantar servicios REST de forma rápida y eficiente.                             |
| JetBrains WebStorm   | Desarrollo frontend con Angular                                  | Software Development    | https://www.jetbrains.com/webstorm/               | IDE especializado en desarrollo web moderno, con soporte completo para Angular, TypeScript y otras tecnologías frontend.                                            |
| Angular CLI          | Utilidad de línea de comandos para Angular                       | Software Development    | https://angular.io/cli                            | Interfaz de línea de comandos que permite generar componentes, servicios y manejar el ciclo de vida de una aplicación Angular.                                      |
| Postman              | Pruebas y documentación de APIs REST                             | Software Development    | https://www.postman.com/                          | Plataforma para probar y documentar APIs de forma interactiva, ideal para validar endpoints desarrollados con Spring Boot.                                           |
| Pivotal Tracker      | Gestión ágil de tareas y backlog del equipo                      | Project Management      | https://www.pivotaltracker.com/                   | Herramienta de gestión de proyectos ágil que permite planificar, asignar y seguir el progreso de tareas y entregables del equipo.                                    |
| UXPressia            | Creación de mapas de experiencia de usuario                      | Product UX/UI Design     | https://uxpressia.com/                            | Herramienta enfocada en la creación de journey maps y perfiles de usuario, útil para visualizar la experiencia del usuario en el sistema.                           |
| Lucidchart           | Diagramación de arquitectura y flujos                            | Product UX/UI Design     | https://www.lucidchart.com/                       | Plataforma para crear diagramas de procesos, flujos y arquitecturas de sistema, facilitando la planificación visual del software.                                    |
| Structurizr          | Modelado de arquitectura de software                             | Product UX/UI Design     | https://structurizr.com/                          | Herramienta para crear modelos de arquitectura de software basada en el modelo C4, útil para documentar sistemas complejos.                                          |
| MySQL                | Sistema de gestión de base de datos relacional                   | Software Development    | https://www.mysql.com/downloads/                  | Sistema gestor de bases de datos ampliamente usado para almacenar y administrar la información estructurada de aplicaciones backend.                                |

### 5.1.2. Source Code Management

Para la gestión del código fuente en VolunTrack, se empleará Git como sistema de control de versiones, utilizando el enfoque de trabajo GitFlow. Esta estrategia facilitará un seguimiento ordenado de las modificaciones en el código, favoreciendo tanto la incorporación de nuevas funcionalidades como la solución de errores. Los repositorios se alojarán en GitHub, manteniendo una estructura de ramas bien definida. Además de la rama principal main, se utilizarán las ramas develop, feature, release y hotfix, lo que permitirá una colaboración fluida y un acceso estructurado al proyecto por parte de todo el equipo.

Repositorio de Frontend Web Applications: https://github.com/Wasi-Masi/VoluntTrack-FrontendWebApplications

Repositorio del landing page: https://github.com/Wasi-Masi/Voluntrack-LandingPage

Repositorio de los web services: https://github.com/Wasi-Masi/VolunTrack-WebServices

### 5.1.3. Source Code Style Guide & Conventions

Con el objetivo de mantener la coherencia, claridad y calidad del código fuente en VolunTrack, se adoptarán convenciones de estilo uniformes. Todo el equipo de desarrollo deberá seguir buenas prácticas como el uso correcto de la indentación, nombres descriptivos para variables y funciones, comentarios útiles y bien estructurados, y una organización lógica de las responsabilidades del código. También se definirán pautas específicas en función del lenguaje de programación y el entorno tecnológico empleado.

Espaciado

El formato del código en VolunTrack se regirá por una convención clara que facilite la lectura y el mantenimiento. Se utilizarán 2 espacios por nivel de indentación, con espacios después de comas, operadores y palabras clave como if, for o while, evitando espacios innecesarios antes de paréntesis o llaves. Para mejorar la organización visual, se incluirán líneas en blanco entre bloques de código relacionados, como funciones o secciones dentro de una misma función. Estas reglas están pensadas para minimizar errores y facilitar el trabajo colaborativo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/fb8dcf35-09af-4901-b150-56c4a1a352bc" alt="Espaciado">
</p>

Nomenclatura

Los nombres de archivos, variables, funciones y clases se escribirán en inglés, favoreciendo la colaboración en entornos internacionales. Se usará minúsculas y, cuando sea necesario separar palabras, se emplearán guiones en lugar de espacios. Esta práctica promueve la claridad, la consistencia y un mantenimiento más sencillo del código, además de facilitar la comprensión entre los distintos miembros del equipo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/cda652f4-a032-43ba-853f-95afbde0cc6f" alt="Nomenclatura">
</p>

Comentarios

Los comentarios en el código de VolunTrack se utilizarán con propósito y mesura. Servirán para explicar lógica compleja, justificar decisiones de diseño o indicar tareas pendientes, pero siempre de forma concisa, clara y en inglés. Se evitarán comentarios redundantes o innecesarios que simplemente repitan lo que ya es evidente en el código. Se fomentará el uso de comentarios estructurados, especialmente en funciones extensas o con lógica crítica, para aportar contexto real y valor adicional.

<p align="center">
  <img src="https://github.com/user-attachments/assets/bb41129b-0724-4061-a890-abbc4281c629" alt="Comentarios">
</p>

Commits

Los mensajes de commit deberán seguir una estructura estandarizada que permita rastrear fácilmente los cambios realizados. Cada mensaje será breve, descriptivo, escrito en inglés y en tiempo presente (por ejemplo: “Add volunteer sign-up form”, “Fix login validation bug”). Se recomienda comenzar con un verbo que exprese claramente la acción realizada, evitando términos genéricos como "update" sin detalles. En commits más extensos, puede añadirse un cuerpo explicativo. Esta convención contribuye a un historial de cambios claro, útil tanto para el equipo actual como para futuros colaboradores.

<p align="center">
  <img src="https://github.com/user-attachments/assets/5806024c-94e4-4898-8bd2-d6f72253afc5" alt="Commits">
</p>

### 5.1.4. Software Deployment Configuration

Para el despliegue de nuestra landing page hemos utilizado github. A continuación daré los pasos a seguir para el despliegue:

Primero vamos a nuestro repositorio 

<p align="center">
  <img src="https://github.com/user-attachments/assets/2846fce1-b78a-41c5-8657-d5284fff2cc4" alt="Primer paso">
</p>

Nos vamos a settings

<p align="center">
  <img src="https://github.com/user-attachments/assets/8e1d90fc-d8cb-41fe-95e8-d57e65e96dfb" alt="Segundo paso">
</p>

Damos click en pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c6ec11b-65a1-4683-b19d-0864a579036e" alt="Tercer paso">
</p>

Nos aseguramos que el source sea “Deploy from a branch”. Escogemos la rama que vamos a desplegar, en nuestro caso la rama main, escogemos el root y le damos a guardar

<p align="center">
  <img src="https://github.com/user-attachments/assets/ff1c6980-359d-4ff3-8399-116b2461fb9f" alt="Cuarto paso">
</p>

Volvemos a code y veremos un punto amarillo

<p align="center">
  <img src="https://github.com/user-attachments/assets/f7eaf141-5a05-4f63-b34b-ded6620f6d78" alt="Cuarto paso">
</p>

Damos click y después click a details

<p align="center">
  <img src="https://github.com/user-attachments/assets/e270dec3-585f-4ad5-9263-b6b8511c99ff" alt="Quinto paso">
</p>

Una vez esperamos a que se terminen todas

<p align="center">
  <img src="https://github.com/user-attachments/assets/26ddd9d5-6183-435b-926a-ae4e8fa9f989" alt="Sexto paso">
</p>

Nos aparecerá el link del despliegue en settings-pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/c11523fd-4fa1-4032-bf6f-b492489791fc" alt="Sexto paso">
</p>

## 5.2. Landing Page, Services & Applications Implementation

### 5.2.1. Sprint 1

Esta sección registra el progreso obtenido durante el Sprint 1 del proyecto VolunTrack, abarcando tanto el desarrollo del producto como la dinámica de colaboración del equipo. Se describen los objetivos planteados, la asignación de responsabilidades, el backlog de tareas y las evidencias del desarrollo y la implementación. Esta organización facilita una visión clara del avance conseguido y establece una base sólida para los próximos ciclos de trabajo.

#### 5.2.1.1. Sprint Planning

El Sprint Planning es la reunión que marca el inicio de cada sprint, donde el equipo Scrum define qué se va a construir y cómo se alcanzará. Durante esta sesión, se establece un objetivo claro (Sprint Goal), se seleccionan las historias de usuario más relevantes y se descomponen en tareas específicas. Esta planificación no solo organiza el trabajo de manera eficiente, sino que también garantiza un enfoque compartido y alinea al equipo hacia la entrega continua de valor al usuario.
A continuación, se presenta la tabla correspondiente al Sprint Planning:

| **Sprint #**                       | Sprint 1                                                                                                                                              |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sprint Planning Background     |                                                                                                                                                           |
| Date                           | 2025-04-07                                                                                                                                                |
| Time                           | 02:40 PM                                                                                                                                                  |
| Location                       | Virtual                                                                                                                                                   |
| Prepared By                    | Martel Andrade Cassius Estefano, Binda Arbañil Marcelo Alejandro                                                                                          |
| Attendees (to planning meeting) | Ainhoa Lucía Castillo Garay / Marcelo Alejandro Binda Arbañil / Martel Andrade Cassius Estefano / Nakamurakare Teruya Alex Tomio / Ortiz Alarcón Víctor Nicolás |
| Sprint 0 Review Summary        | Este es el primer sprint del proyecto, por lo tanto no existe un sprint anterior a evaluar. Las actividades previas se enfocaron en la ideación del producto, validación de problemas mediante entrevistas y elaboración del backlog inicial. |
| Sprint 0 Retrospective Summary | La introducción, los requerimientos y el diseño del producto fueron desarrollados de forma colaborativa y eficiente.                                       |
| Sprint Goal & User Stories     |                                                                                                                                                           |
| Sprint n Goal                  | Publicar la versión inicial de la página de aterrizaje pública de VolunTrack. Buscamos dar mayor visibilidad y credibilidad a potenciales usuarios, validándolo mediante su disponibilidad online y la inclusión de secciones como "Sobre nosotros", "Planes" y "Contacto". |
| Sprint n Velocity              | 13                                                                                                                                                        |
| Sum of Story Points            | 43                                                                                                                                                        |

#### 5.2.1.2. Aspect Leaders and Collaborators

| Team Member                        | Diseño UX | Diseño UI - Wireframes | Diseño UI - MockUps | Diseño Landing Page | Control de versiones |
|-------------------------------------|-----------|------------------------|---------------------|---------------------|-----------------------|
| Binda Arbañil, Marcelo Alejandro    | L         | C                      | C                   | C                   | C                     |
| Castillo Garay, Ainhoa Lucía         | C         | L                      | C                   | C                   | C                     |
| Martel Andrade, Cassius Estefano     | C         | C                      | L                   | C                   | C                     |
| Nakamurakare Teruya, Alex Tomio      | C         | C                      | C                   | C                   | L                     |
| Ortiz Alarcón, Victor Nicolás        | C         | C                      | C                   | L                   | C                     |

#### 5.2.1.3 Sprint Backlog 1

| Sprint #       | Sprint #1 |      |      |      |      |
|----------------|-----------|------|------|------|------|
|      | Work-Item / Task |      |      |      |      |
| User Story ID | Task ID | Description                                         | Estimation (Hours) | Assigned To                        | Status |
| US15          | T01     | Crear la estructura de la sección principal         | 1                  | Binda Arbañil, Marcelo Alejandro    | Done   |
|               | T02     | Diseñar la parte visual de la sección principal     | 1                  | Castillo Garay, Ainhoa Lucía         | Done   |
| US16          | T03     | Crear la estructura de la sección sobre nosotros    | 1                  | Martel Andrade, Cassius Estefano     | Done   |
|               | T04     | Diseñar la parte visual de la sección sobre nosotros| 2                  | Nakamurakare Teruya, Alex Tomio      | Done   |
| US17          | T05     | Crear la estructura de la sección de contacto       | 1                  | Castillo Garay, Ainhoa Lucía         | Done   |
|               | T06     | Diseñar la parte visual de la sección de contacto   | 1                  | Binda Arbañil, Marcelo Alejandro    | Done   |
| US18          | T07     | Crear la estructura de la sección de planes         | 1                  | Martel Andrade, Cassius Estefano     | Done   |
|               | T08     | Diseñar la parte visual de la sección de planes     | 1                  | Martel Andrade, Cassius Estefano     | Done   |
| US03          | T09     | Diseño UX/UI sección Actividad                      | 3                  | Ortiz Alarcón, Victor Nicolás        | Done   |
| US05          | T10     | Diseño UX/UI sección Inscritos                      | 3                  | Binda Arbañil, Marcelo Alejandro    | Done   |
| US11          | T11     | Diseño UX/UI sección Notificaciones                 | 3                  | Nakamurakare Teruya, Alex Tomio      | Done   |
| US22          | T12     | Diseño UX/UI sección Voluntarios                    | 3                  | Ortiz Alarcón, Victor Nicolás        | Done   |
| US23          | T13     | Diseño UX/UI sección Calendario                     | 3                  | Castillo Garay, Ainhoa Lucía         | Done   |
| US24          | T14     | Diseño UX/UI Dashboard                              | 4                  | Nakamurakare Teruya, Alex Tomio      | Done   |

Icebox de las historias de usuario pendientes (no iniciadas en este sprint)
<p align="center">
  <img src="https://github.com/user-attachments/assets/a0845de2-56b3-4375-9c4d-63c17f429499" alt="Icebox US pendientes">
</p>

Historias de usuario empezadas y finalizadas del sprint
<p align="center">
  <img src="https://github.com/user-attachments/assets/f03f3fb6-c1a5-4408-a777-22a4ca97b25c" alt="Icebox US sprint 1">
</p>

Épicas
<p align="center">
  <img src="https://github.com/user-attachments/assets/20f2abcd-6a7b-4ae5-9d31-8e32442803b2" alt="Épicas">
</p>

#### 5.1.2.4. Development Evidence for Sprint Review

Esta sección presenta los principales avances técnicos logrados durante el sprint, en relación con los productos comprometidos: la Landing Page, la Aplicación Web y los Servicios Web. Se detalla el progreso a través de los repositorios utilizados por el equipo, destacando los commits relevantes que reflejan el desarrollo de nuevas funcionalidades, la corrección de errores, las mejoras en la interfaz y la configuración de servicios. Esta evidencia no solo permite evaluar el cumplimiento de los objetivos del sprint, sino que también facilita la retroalimentación durante la reunión de revisión.

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
| [Voluntrack-LandingPage](https://github.com/Wasi-Masi/Voluntrack-LandingPage) | develop | 6431853c2641cfda891d98c7587a0c80e3dd7e5a | Add base structure | - | 27/04/2025 |
| [Voluntrack-LandingPage](https://github.com/Wasi-Masi/Voluntrack-LandingPage) | develop | 4a8b37d585f0225144ef9c8c5b46aed9b6064af6 | Add contact | - | 27/04/2025 |
| [Voluntrack-LandingPage](https://github.com/Wasi-Masi/Voluntrack-LandingPage) | develop | 5c3f9b61314278458573992848a9199e214ec8d5 | Add Planes | - | 27/04/2025 |
| [Voluntrack-LandingPage](https://github.com/Wasi-Masi/Voluntrack-LandingPage) | develop | 3a4fcb57f0bdfc7d2d74a4bf62e6c7042093708a | Add Equipo | - | 27/04/2025 |
| [Voluntrack-LandingPage](https://github.com/Wasi-Masi/Voluntrack-LandingPage) | develop | 15425e080c574b38e742547b30a02e703cdc1e1f | Add faqs | - | 27/04/2025 |
| [Voluntrack-LandingPage](https://github.com/Wasi-Masi/Voluntrack-LandingPage) | develop | 14740c2e6bce187bc4309b2f61f1d37a07cf4307 | Add about | - | 27/04/2025 |
| [Voluntrack-LandingPage](https://github.com/Wasi-Masi/Voluntrack-LandingPage) | develop | 43bab8d5002de7e18a6bb84fbca211137fa340ee | Add index | - | 27/04/2025 |

#### 5.2.1.5. Execution Evidence for Sprint Review.

Durante el Sprint 1 se completó y desplegó la primera versión funcional del Landing Page de FitManager, logrando cumplir con el objetivo establecido en el Sprint Planning. Esta entrega incluyó el diseño, maquetación e implementación de las secciones informativas clave: descripción del producto, características principales, paquetes de suscripción, formulario de contacto y una galería visual del producto.

#### 5.2.1.6. Services Documentation Evidence for Sprint Review

Durante el Sprint 1 no se trabajó en el desarrollo de Web Services ni en la creación de endpoints funcionales, ya que el enfoque del sprint se limitó exclusivamente al diseño, construcción y publicación de la Landing Page de VolunTrack. En consecuencia, no se elaboró documentación técnica de APIs REST ni se empleó OpenAPI.

#### 5.2.1.7. Software Deployment Evidence for Sprint Review

Para el despliegue de nuestra landing page hemos utilizado github. A continuación daré los pasos a seguir para el despliegue:

Primero vamos a nuestro repositorio 

<p align="center">
  <img src="https://github.com/user-attachments/assets/2846fce1-b78a-41c5-8657-d5284fff2cc4" alt="Primer paso">
</p>

Nos vamos a settings

<p align="center">
  <img src="https://github.com/user-attachments/assets/8e1d90fc-d8cb-41fe-95e8-d57e65e96dfb" alt="Segundo paso">
</p>

Damos click en pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c6ec11b-65a1-4683-b19d-0864a579036e" alt="Tercer paso">
</p>

Nos aseguramos que el source sea “Deploy from a branch”. Escogemos la rama que vamos a desplegar, en nuestro caso la rama main, escogemos el root y le damos a guardar

<p align="center">
  <img src="https://github.com/user-attachments/assets/ff1c6980-359d-4ff3-8399-116b2461fb9f" alt="Cuarto paso">
</p>

Volvemos a code y veremos un punto amarillo

<p align="center">
  <img src="https://github.com/user-attachments/assets/f7eaf141-5a05-4f63-b34b-ded6620f6d78" alt="Cuarto paso">
</p>

Damos click y después click a details

<p align="center">
  <img src="https://github.com/user-attachments/assets/e270dec3-585f-4ad5-9263-b6b8511c99ff" alt="Quinto paso">
</p>

Una vez esperamos a que se terminen todas

<p align="center">
  <img src="https://github.com/user-attachments/assets/26ddd9d5-6183-435b-926a-ae4e8fa9f989" alt="Sexto paso">
</p>

Nos aparecerá el link del despliegue en settings-pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/c11523fd-4fa1-4032-bf6f-b492489791fc" alt="Sexto paso">
</p>

#### 5.2.1.8. Team Collaboration Insights during Sprint

A lo largo del Sprint 1, el equipo de VolunTrack sostuvo una colaboración continua y efectiva. Al tratarse del primer sprint del proyecto, se definieron acuerdos fundamentales respecto a la metodología de trabajo, las herramientas de comunicación y los canales para el seguimiento de tareas. A continuación, se presenta evidencia de la participación de cada integrante del equipo:

<p align="center">
  <img src="https://github.com/user-attachments/assets/973bdd4e-2dbe-4d35-a8fb-bef50cf5f414" alt="Insights landing page">
</p>

En esta imagen se aprecia la sección de “Insights” de Github, donde se puede evidenciar que todos formaron parte de los commits de la landing page

<p align="center">
  <img src="https://github.com/user-attachments/assets/65133b54-3b99-4c0b-835e-f8bfe9af5a7a" alt="Commits READ.ME">
</p>

Por otro lado, aquí se aprecia los commits realizados en el repositorio de la landing page

# Conclusiones

El proyecto VolunTrack demostró la capacidad del equipo para aplicar un enfoque integral en el desarrollo de una solución de software, abarcando desde la investigación de usuarios y el análisis de requerimientos hasta el diseño de la arquitectura y la implementación del landing page. Se logró crear una base sólida para el futuro desarrollo de la plataforma completa.

La aplicación de metodologías y técnicas de Lean UX, como la formulación de hipótesis, la creación de user personas y el mapeo de la experiencia del usuario, permitió al equipo comprender profundamente las necesidades de los usuarios y diseñar una solución centrada en sus requerimientos.

El desarrollo del landing page de VolunTrack demostró la capacidad del equipo para comunicar de manera efectiva la propuesta de valor de la plataforma, enfocándose en la necesidad de una herramienta que facilite la conexión entre ONGs y voluntarios. El diseño y el contenido del landing page lograron transmitir la funcionalidad y los beneficios del sistema a potenciales usuarios.

El diseño de la arquitectura del sistema, basado en principios de Domain-Driven Design y una estructura de componentes en servicios, sentó las bases para la creación de una aplicación escalable y mantenible. La definición de la arquitectura y el diseño orientado a objetos facilitaron la planificación del desarrollo futuro.

El proyecto VolunTrack proporcionó una valiosa experiencia en todas las etapas del ciclo de vida del desarrollo de software, desde la concepción de la idea hasta la implementación parcial, fortaleciendo las habilidades técnicas y blandas de los miembros del equipo, incluyendo la colaboración, la comunicación y la resolución de problemas.

# Recomendaciones

Se recomienda priorizar la implementación de la aplicación web y móvil de VolunTrack, siguiendo la arquitectura y el diseño definidos en este informe. El enfoque debe estar en el desarrollo de las funcionalidades clave que permitan a las ONGs gestionar sus actividades de voluntariado y a los voluntarios encontrar y registrarse en ellas.

Se sugiere realizar pruebas de usabilidad exhaustivas con usuarios reales (ONGs y voluntarios) durante el desarrollo de la aplicación, para validar las decisiones de diseño y asegurar que la interfaz sea intuitiva y fácil de usar.

Se aconseja implementar un sistema de gestión de la base de datos robusto y eficiente, que garantice la integridad y la seguridad de la información de los usuarios y las ONGs.

Se recomienda establecer un proceso de desarrollo iterativo e incremental, utilizando metodologías ágiles como Scrum, para facilitar la adaptación a los cambios y la entrega continua de valor.

Se sugiere continuar invirtiendo en la formación del equipo en las últimas tecnologías y mejores prácticas de desarrollo de software, para asegurar la calidad y la innovación en el desarrollo de VolunTrack.

# Bibliografía

León Malca, S. J. (2023). Análisis de la relación entre la experiencia del voluntariado y las habilidades de empleabilidad: Un estudio de caso en la Asociación CEDRO [Tesis de licenciatura, Pontificia Universidad Católica del Perú]. Repositorio Institucional PUCP. https://tesis.pucp.edu.pe/items/7a5ab914-1eb0-46eb-8097-ae2d2df5b4f6

Naciones Unidas Perú. (2024). Situación del voluntariado en el Perú 2024. Naciones Unidas. https://peru.un.org/es/283805-situación-del-voluntariado-en-el-perú-2024

La Escuelita de ONG. (s.f.). ¿Por qué los voluntarios abandonan su voluntariado en ONG? La Escuelita de ONG. https://www.laescuelitadeong.com/por-que-los-voluntarios-abandonan-su-voluntariado-en-ong/

Guirado, O. (2023, junio 28). ¿Cuánto cuesta desarrollar una app? AppDesign. https://appdesign.dev/cuanto-cuesta-desarrollar-una-app/

Pragma. (2022, noviembre 8). Lean UX y Lean Startup: potencia la experiencia y el diseño de producto. Pragma. https://www.pragma.co/es/blog/lean-ux-y-lean-startup-potencia-experiencia-y-diseno-de-producto

Stack Overflow. (2019). Stack Overflow Developer Survey Results 2019. Stack Overflow. https://assets-global.website-files.com/5da60733afec9db1fb998273/5de8285d137d82cb7d96674e_2019-Tech-Report-English.pdf

Programa de Voluntarios de las Naciones Unidas. (2022). Capítulo 2: El voluntariado en los Objetivos de Desarrollo Sostenible [Informe SWVR 2022]. https://swvr2022.unv.org/wp-content/uploads/2022/04/Chapter-2_web_ES.pdf

# Anexos

Anexo A. Entrevistas

Entrevistas VolunTrack. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EccjEo0rS0FCiWl1pw3HLI8Bxj4PJLi6KG8Q-ZWwZvwyzw?e=YNaKTr

Anexo B. Videos del proyecto

Web applications prototyping. https://youtu.be/SiFnEpgN64c

Execution Evidence for Sprint 1 Review. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/ER9RtTS-0HVDv4bMDrQhPz4B_w3sbIZzUJxeNgIRZPjieA?e=3WasT5

Exposición TB1. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EYo4bWjuiZJIto67pij-UGIBvCjIbIDt9vEwSGJBnFQTQQ?e=ZL7e0W

Anexo C. UI

Prototipo Voluntrack. https://www.figma.com/proto/krPEYNc7KDEvZbax5LxfrA/VolunTrack?page-id=15%3A170&node-id=35-189&p=f&viewport=110%2C50%2C0.16&t=onC3hpMX1io72KLX-1&scaling=contain&content-scaling=fixed 

Anexo D. Pivotal Tracker

VolunTrack. https://www.pivotaltracker.com/n/projects/2740950

Anexo E. Lean UX Canvas

VolunTrack Lean UX Canvas. https://drive.google.com/file/d/1uj3f76zZgQNJNxdLU8cLH2YIALPgiF-v/view
