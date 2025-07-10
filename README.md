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
<p align="center">Galván Cerrón, George Aldo U202116055</p>

<p align="center">Abril 2025</p>

# Registro de versiones del informe

| Versión     | Fecha      | Autor/es                                                                                                                                                          | Descripción                                                                                                                           |
|-------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| 1.0 (TB1)   | 27/04/2024 | - Binda Arbañil, Marcelo Alejandro<br>- Castillo Garay, Ainhoa Lucía<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás<br>- George Galván Cerrón | Capítulo I: Introducción<br>Capítulo II: Requirements Elicitation & Analysis<br>Capítulo III: Requirements Specification<br>Capítulo IV: Product Design<br>Capítulo V: Product Implementation, Validation & Deployment |
| 2.0 (TP)    | 16/05/2025 | - Binda Arbañil, Marcelo Alejandro<br>- Castillo Garay, Ainhoa Lucía<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás<br>- Galván Cerrón, George | Correcciones de la TB1<br>Capítulo V: Product Implementation, Validation & Deployment                                                |
| 3.0 (TB2)    | 22/06/2025 | - Binda Arbañil, Marcelo Alejandro<br>- Castillo Garay, Ainhoa Lucía<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás<br>- Galván Cerrón, George | Correcciones del TP<br>Sprint 3<br>Desarrollo del Backend<br>Entrevistas de validación                                               |
| 4.0 (TF)    | 10/07/2025 | - Binda Arbañil, Marcelo Alejandro<br>- Castillo Garay, Ainhoa Lucía<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás<br>- Galván Cerrón, George | Correcciones del TB2<br>Sprint 4<br>Conexiones entre el frontend y backend                                              |


# Project Report Collaboration Insights

Repositorio donde está el project report: https://github.com/Wasi-Masi/VoluntTrack-FrontendWebApplications

Para el desarrollo del informe hemos trabajado en un google docs, y luego hemos pasado el contenido al readme del repositorio principal.
Para esta entrega, se actualizo el readme y se agregó el sprint 4.
<p align="center">
  <img src="https://imgur.com/tDAlnue.png" alt="Insights readme">
</p>

<p align="center">
  <img src="https://imgur.com/undefined.png" alt="Commits readme">
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
    + [5.2.2. Sprint 2](#522-sprint-2)
      - [5.2.2.1. Sprint Planning 2](#5221-sprint-planning-2)
      - [5.2.2.2. 5.2.1.2.](#5222-aspect-leaders-and-collaborators)
      - [5.2.2.3. Sprint Backlog 2](#5223-sprint-backlog-2)
      - [5.2.2.4. Development Evidence for Sprint Review](#5224-development-evidence-for-sprint-review)
      - [5.2.2.5. Execution Evidence for Sprint Review](#5225-execution-evidence-for-sprint-review)
      - [5.2.2.6. Services Documentation Evidence for Sprint Review](#5226-services-documentation-evidence-for-sprint-review)
      - [5.2.2.7. Software Deployment Evidence for Sprint Review](#5227-software-deployment-evidence-for-sprint-review)
      - [5.2.2.8. Team Collaboration Insights during Sprint](#5228-team-collaboration-insights-during-sprint)
    + [5.2.3. Sprint 3](#523-sprint-3)
      - [5.2.3.1. Sprint Planning](#5231-sprint-planning)
      - [5.2.3.2. Aspect Leaders and Collaborators](#5232-aspect-leaders-and-collaborators)
      - [5.2.3.3 Sprint Backlog 3](#5233-sprint-backlog-3)
      - [5.2.3.4. Development Evidence for Sprint Review](#5234-development-evidence-for-sprint-review)
      - [5.2.3.5. Execution Evidence for Sprint Review](#5235-execution-evidence-for-sprint-review)
      - [5.2.3.6. Services Documentation Evidence for Sprint Review](#5236-services-documentation-evidence-for-sprint-review)
      - [5.2.3.7. Software Deployment Evidence for Sprint Review](#5237-software-deployment-evidence-for-sprint-review)
      - [5.2.3.8. Team Collaboration Insights during Sprint](#5238-team-collaboration-insights-during-sprint)
    + [5.2.4. Sprint 3](#524-sprint-4)
      - [5.2.4.1. Sprint Planning](#5241-sprint-planning)
      - [5.2.4.2. Aspect Leaders and Collaborators](#5242-aspect-leaders-and-collaborators)
      - [5.2.4.3 Sprint Backlog 4](#5243-sprint-backlog-4)
      - [5.2.4.4. Development Evidence for Sprint Review](#5244-development-evidence-for-sprint-review)
      - [5.2.4.5. Execution Evidence for Sprint Review](#5245-execution-evidence-for-sprint-review)
      - [5.2.4.6. Services Documentation Evidence for Sprint Review](#5246-services-documentation-evidence-for-sprint-review)
      - [5.2.4.7. Software Deployment Evidence for Sprint Review](#5247-software-deployment-evidence-for-sprint-review)
      - [5.2.4.8. Team Collaboration Insights during Sprint](#5248-team-collaboration-insights-during-sprint)
  * [5.3. Validation Interviews](#53-validation-interviews)
    + [5.3.1. Diseño de Entrevistas](#531-diseño-de-entrevistas)
    + [5.3.2. Registro de Entrevistas](#532-registro-de-entrevistas)
    + [5.3.3. Evaluaciones según Heurísticas](#533-evaluaciones-según-heurísticas)
  * [5.4. Video About-the-Product](#54-video-about-the-product)
- [Conclusiones](#conclusiones)
  
- [Recomendaciones](#recomendaciones)
  
- [Bibliografia](#bibliografia)
  
- [Anexos](#anexos)

# Student Outcome

ABET - EAC - Student Outcome 5
Criterio: La capacidad de funcionar efectivamente en un equipo cuyos miembros juntos proporcionan liderazgo, crean un entorno de colaboración e inclusivo, establecen objetivos, planifican tareas y cumplen objetivos.

| Criterio Específico | Acciones Realizadas | Conclusiones |
|---|---|---|
| **1. Comunica oralmente con efectividad a diferentes rangos de audiencia** | **Cassius Estefano Martel Andrade**<br>**TB1**<br>Asumí un rol activo en el diseño y planificación del proyecto, elaborando entregables clave como user stories, arquitectura de la información y diseño UI, lo que me permitió liderar desde la estructura inicial del producto.<br>**TP**<br>Durante el desarrollo del frontend, me centré en la implementación de los módulos de voluntarios e inscripciones, asegurando la alineación con los objetivos del equipo y contribuyendo al avance general del sistema.<br>**TB2**<br>Lideré el desarrollo de los bounded contexts de Participaciones y Registro de Voluntarios, asumiendo la responsabilidad técnica y la integración funcional de estos módulos.<br>**TF**<br>Garanticé la correcta conexión entre frontend y backend en los módulos asignados, participando además en la revisión del documento final y asegurando su coherencia global.<br><br>**Marcelo Alejandro Binda Arbañil**<br>**TB1**<br>Me encargué de las entrevistas iniciales, análisis de mercado y diseño UI, coordinando con el equipo para definir las bases visuales y funcionales de la plataforma.<br>**TP**<br>Implementé las secciones de organización y actividades, incluyendo traducción con i18n, liderando la estructuración técnica de estos módulos.<br>**TB2**<br>Desarrollé los bounded contexts de Notificaciones y Actividad-Registro, asegurando su integración efectiva con el resto del sistema.<br>**TF**<br>Asumí el liderazgo en la elaboración del documento final, recopilando e integrando aportes del equipo, y garantizando su calidad y coherencia.<br><br>**Ainhoa Lucía Castillo Garay**<br>**TB1**<br>Participé en entrevistas, diseño visual y prototipado de interfaz, colaborando en la construcción de la identidad visual de VolunTrack.<br>**TP**<br>Desarrollé las secciones de certificados y participaciones, aportando en la integración técnica y funcional del sistema.<br>**TB2**<br>Encabecé el desarrollo del Sprint 3, coordinando esfuerzos y tareas del equipo para lograr una entrega cohesionada.<br>**TF**<br>Me enfoqué en la conexión técnica entre frontend y backend del módulo de voluntarios, asegurando su integración completa en la plataforma.<br><br>**Alex Tomio Nakamurakare Teruya**<br>**TB1**<br>Contribuí a la definición del producto mediante user stories, backlog y planificación ágil, fomentando una visión común dentro del equipo.<br>**TP**<br>Participé activamente en exposiciones técnicas, transmitiendo información clara durante las presentaciones del sistema.<br>**TB2**<br>Lideré la validación con usuarios mediante entrevistas estructuradas, recopilando feedback esencial para orientar el desarrollo.<br>**TF**<br>Me encargué de integrar los módulos de dashboard, voluntarios inscritos y calendario, asegurando su funcionalidad conjunta y fluidez.<br><br>**Víctor Nicolás Ortiz Alarcón**<br>**TB1**<br>Colaboré en la implementación de los diseños UI y el desarrollo de la landing page, aportando soluciones técnicas al equipo.<br>**TP**<br>Participé activamente en la exposición del sistema, desarrollando habilidades comunicativas para explicar decisiones técnicas.<br>**TB2**<br>Asistí en el desarrollo del Sprint 3, apoyando al equipo en destrabar dificultades y coordinar funcionalidades asignadas.<br>**TF**<br>Conecté el frontend y backend del módulo de certificados, colaborando en procesos de validación e integración final del sistema.<br><br>**George Aldo Galván Cerrón**<br>**TB1**<br>No participó.<br>**TP**<br>Transformé los documentos del equipo a formato Markdown y realicé los materiales visuales para la exposición.<br>**TB2**<br>Lideré el proceso de deployment del sistema y la documentación técnica, garantizando su correcta publicación.<br>**TF**<br>Me encargué de pasar el documento final a Markdown, estructurándolo profesionalmente y validando su formato para la entrega. | **TB1**<br>El liderazgo se ejerció de forma compartida, con un equipo que desde el inicio asignó roles estratégicos según fortalezas. La planificación visual, la investigación y el diseño inicial fueron guiados por múltiples integrantes, promoviendo una toma de decisiones horizontal y efectiva.<br>**TP**<br>El equipo demostró liderazgo técnico en el desarrollo de funcionalidades clave. Cada miembro asumió la responsabilidad de una sección del sistema, lo que favoreció la autonomía y confianza colectiva.<br>**TB2**<br>El liderazgo se intensificó con la asignación de bounded contexts. Cada integrante se convirtió en referente técnico de su módulo, guiando decisiones de implementación e integración.<br>**TF**<br>Se consolidó un liderazgo maduro, con una alta coordinación y apoyo mutuo. La integración técnica y documental fue liderada por quienes manejaban mejor las herramientas, permitiendo un cierre exitoso. |
| **2. Comunica por escrito con efectividad a diferentes rangos de audiencia** | **Cassius Estefano Martel Andrade**<br>**TB1**<br>Contribuí activamente al diseño UI y la planificación del flujo de trabajo, coordinando tareas de diseño y validación con el equipo.<br>**TP**<br>Me aseguré de que mis desarrollos técnicos estuvieran en sincronía con los de mis compañeros, promoviendo la planificación compartida.<br>**TB2**<br>Fomenté espacios de revisión constante durante el desarrollo de bounded contexts, garantizando el cumplimiento de objetivos y tiempos.<br>**TF**<br>Realicé sesiones colaborativas para validación funcional y cierre técnico, fortaleciendo la entrega con un enfoque integrador.<br><br>**Marcelo Alejandro Binda Arbañil**<br>**TB1**<br>Promoví la organización del equipo y el uso de herramientas compartidas para coordinar metas y tareas.<br>**TP**<br>Me aseguré de que la documentación técnica estuviera bien redactada, facilitando su comprensión por parte de todo el equipo.<br>**TB2**<br>Integré las opiniones del equipo en el diseño de los bounded contexts a mi cargo, asegurando coherencia y colaboración continua.<br>**TF**<br>Coordine con todos los miembros para integrar sus aportes en el documento final, reforzando la organización conjunta.<br><br>**Ainhoa Lucía Castillo Garay**<br>**TB1**<br>Colaboré en el diseño visual y la organización de tareas técnicas, fomentando un entorno participativo.<br>**TP**<br>Propicié una redacción clara de la documentación técnica, ayudando a la comprensión del sistema.<br>**TB2**<br>Distribuí tareas en el Sprint 3, propiciando un entorno de planificación justa y colaborativa.<br>**TF**<br>Participé activamente en la integración funcional del sistema, manteniendo comunicación constante para resolver problemas.<br><br>**Alex Tomio Nakamurakare Teruya**<br>**TB1**<br>Establecí metas claras mediante backlog y planificación ágil, promoviendo la inclusión de todos los integrantes.<br>**TP**<br>Colaboré activamente en la documentación del proyecto, aportando en la redacción y organización de contenidos.<br>**TB2**<br>Fomenté una comunicación horizontal al planificar la entrevista de validación, buscando integración de ideas.<br>**TF**<br>Me aseguré de alinear mis tareas con el resto del equipo para mantener la coherencia del sistema durante la integración final.<br><br>**Víctor Nicolás Ortiz Alarcón**<br>**TB1**<br>Colaboré en tareas técnicas mediante uso de ramas y gestión del código compartido, fomentando la planificación ordenada.<br>**TP**<br>Contribuí a que los documentos técnicos fueran comprensibles y accesibles para todo el equipo.<br>**TB2**<br>Coordiné con el equipo para resolver obstáculos técnicos y asegurar una implementación fluida.<br>**TF**<br>Participé en validaciones funcionales, ayudando en la organización del trabajo y revisión de entregables.<br><br>**George Aldo Galván Cerrón**<br>**TB1**<br>No participó.<br>**TP**<br>Me encargué de estructurar los contenidos técnicos en Markdown, colaborando en su organización para exposición.<br>**TB2**<br>Me aseguré de que el sistema estuviera correctamente deployado, organizando tareas de cierre y documentación.<br>**TF**<br>Mantuve coordinación constante para asegurar que el documento final representara correctamente el trabajo colectivo. | **TB1**<br>Desde el inicio del proyecto se generó un entorno de respeto y apertura, con una planificación organizada basada en habilidades complementarias y objetivos comunes.<br>**TP**<br>El equipo logró una organización eficiente, con tareas distribuidas de forma justa y adaptadas a las capacidades de cada integrante. La colaboración técnica y comunicativa fue constante.<br>**TB2**<br>El entorno de trabajo fue productivo y enfocado en el cumplimiento de objetivos. Las metas se establecieron de manera colaborativa, fortaleciendo el compromiso grupal.<br>**TF**<br>La planificación e integración final fue sólida gracias a una comunicación fluida y un compromiso compartido. Cada tarea fue ejecutada con responsabilidad y apoyo mutuo. |


# CAPÍTULO 1: INTRODUCCIÓN

## 1.1. Startup Profile

### 1.1.1. Descripción del Startup

Wasi Masi es una startup nacida en la Universidad Peruana de Ciencias Aplicadas comprometida con el fortalecimiento del impacto social a través de la tecnología. A partir de este objetivo, se ha desarrollado el proyecto VolunTrack, una plataforma web diseñada para facilitar la gestión integral del voluntariado en organizaciones sin fines de lucro.
Conscientes de los retos que enfrentan muchas ONGs pequeñas, VolunTrack ofrece una solución práctica, intuitiva y accesible. Desde el registro y búsqueda de voluntarios hasta la generación automática de certificados y envío de notificaciones, la plataforma busca optimizar los procesos internos de las organizaciones para que puedan enfocarse en lo que realmente importa: generar cambio.
Para Wasi Masi, el voluntariado no solo representa ayuda, sino comunidad, compromiso y transformación. A través de VolunTrack, se espera empoderar a más organizaciones sociales a mejorar su gestión y fortalecer su red de apoyo.

**Misión:** Diseñar y ofrecer una plataforma innovadora y accesible que transforme la manera en que las organizaciones gestionan el voluntariado. A través de VolunTrack, se busca facilitar la conexión entre personas dispuestas a ayudar y las causas que lo necesitan, optimizando procesos y fortaleciendo el impacto social de las ONGs.

**Visión:** Convertirse en referentes en soluciones tecnológicas para la gestión del voluntariado, siendo reconocidos por la capacidad de empoderar a organizaciones sociales, conectar comunidades solidarias y contribuir a un mundo más colaborativo, justo y comprometido con el cambio. 

### 1.1.2. Perfiles de los integrantes del equipo


| Nombre | Foto                                                                                      | Carrera | Descripción                                                                                                                                                                                                                                                                                                                                |
|--------|-------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Binda Arbañil, Marcelo Alejandro U202311157 | ![image](https://github.com/user-attachments/assets/b14b7ef3-54ee-486d-8223-f7944cd1e732) | Ingeniería de Software | Soy Marcelo Binda y actualmente me encuentro cursando el quinto ciclo de la carrera de Ingeniería de Software, cuento con conocimientos técnicos en C++. Tengo una gran habilidad para organizar y realizar trabajos con la mayor eficiencia posible.                                                                                      |
| Castillo Garay, Ainhoa Lucía U202311701 | ![image](https://github.com/user-attachments/assets/886d267a-d2ba-4f2e-bd33-7d8c7a7ba653) | Ingeniería de Software | Mi nombre es Ainhoa Castillo y estoy cursando mi cuarto ciclo en la carrera de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC). Me considero una persona activa y responsable. Me gusta trabajar en un ambiente tranquilo y divertido, pero siempre eficaz. Me gusta programar y resolver problemas mediante soluciones creativas. |
| Martel Andrade, Cassius Estefano U202312287 | ![image](https://github.com/user-attachments/assets/6d204cd7-48f9-4648-ba72-2c0328ebbd3d) | Ingeniería de Software | Me llamo Cassius Martel y soy estudiante de Ingeniería de Software, y tengo cierta experiencia usando C++. Me caracterizó por ser una persona con iniciativa y liderazgo, que siempre procura la efectividad de cada integrante del equipo y la realización de un buen trabajo.                                                            |
| Nakamurake Teruya, Alex Tomio U20201f855 | ![image](https://github.com/user-attachments/assets/154a072e-92bc-4a6b-958c-2c04a60a616a) | Ingeniería de Software | Mi nombre es Alex Tomio Nakamurakare y soy estudiante de la carrera de Ingeniería de Software de la UPC. El motivo por el cual estoy en esta carrera es debido a que me gusta mucho analizar problemas y crear soluciones mediante el uso de la programación.                                                                              |
| Ortiz Alarcón, Victor Nicolás U202312899 | ![image](https://github.com/user-attachments/assets/66c8134f-6cae-491c-b6d6-06147f1f3cea) | Ingeniería de Software | Soy estudiante del quinto ciclo de la carrera de ingeniería de software de la universidad UPC y escogí esta carrera porque me interesa el desarrollo de aplicaciones web y base de datos. Me gustan los videojuegos y el deporte.                                                                                                          |
| Galván Cerrón, George Aldo U202116055 | ![image](https://github.com/user-attachments/assets/...)                                  | Ingeniería de Software | Mi nombre es George Galván, estudiante de Ingeniería de Software. Me apasiona el desarrollo web, especialmente el backend creando soluciones funcionales y escalables. Me considero una persona entusiasta y con interés por participar en proyectos.                                                                                  |

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

<p align="center">
  <img src="https://github.com/user-attachments/assets/02776839-fc81-4676-8be4-6c2207159dc5" alt="Tamaño relativo de las ONGs en América Latina (%)">
</p>
<p align="center"><strong>Figura 1.</strong> Tamaño relativo de las ONGs en América Latina (%).</p>

_Nota._ El criterio para determinar el tamaño de una organización en este estudio es totalmente subjetivo. Las mismas ONGs indicaron si se consideran pequeñas, medianas o grandes. Adaptado de Technology Report 2019, por Global NGO, 2019 (https://assets-global.website-files.com/5da60733afec9db1fb998273/5de8285d137d82cb7d96674e_2019-Tech-Report-English.pdf).

De acuerdo con Global NGO (2019), solo el 58% de las organizaciones no gubernamentales envía correos electrónicos a sus voluntarios, y más del 70% de ellas lo hace únicamente una vez al mes o con menor frecuencia. Esta limitada comunicación podría generar un sentimiento de desconexión entre los voluntarios, afectando su motivación y rendimiento. Además, la baja frecuencia en el envío de mensajes podría estar vinculada a la falta de herramientas adecuadas para gestionar comunicaciones masivas de manera eficiente. En este contexto, VolunTrack busca facilitar esta tarea, proporcionando un sistema automatizado y accesible que permita a las ONGs mantener una comunicación constante y significativa con sus voluntarios.

<p align="center">
  <img src="https://github.com/user-attachments/assets/51164d42-6103-4db3-8870-1236fe8ddd64" alt="Frecuencia de las ONGs en cuanto al envío de correos a los voluntarios">
</p>
<p align="center"><strong>Figura 2.</strong> Frecuencia de las ONGs en cuanto al envío de correos a los voluntarios.</p>

_Nota._ No se están teniendo en cuenta otros métodos de comunicación que las ONGs puedan tener con sus voluntarios. Adaptado de Technology Report 2019, por Global NGO, 2019 (https://assets-global.website-files.com/5da60733afec9db1fb998273/5de8285d137d82cb7d96674e_2019-Tech-Report-English.pdf).

De la población en edad de trabajar, un 20,8% participa en actividades de voluntariado, de las cuales un 14,3% corresponde a voluntariado informal (United Nations Volunteers, 2022). Esta cifra revela no solo una significativa predisposición social hacia el voluntariado, sino también una alta proporción de participación fuera de canales institucionales. Esto evidencia la necesidad de plataformas como VolunTrack, que pueden ayudar a formalizar, organizar y potenciar estas iniciativas, facilitando la conexión entre personas dispuestas a colaborar y organizaciones que requieren apoyo estructurado.

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c91e210-5c7c-4256-88ef-e2e006ae4046" alt="Porcentaje de la población en edad de trabajar que participan en voluntariados formales e informales">
</p>
<p align="center"><strong>Figura 3.</strong> Porcentaje de la población en edad de trabajar que participan en voluntariados formales e informales.</p>

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
<p align="center"><strong>Figura 4.</strong> Canvas de VolunTrack con hipótesis clave de usuario, problema, solución y métricas.</p>

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

**Segmento objetivo #2:  Voluntarios existentes y potenciales**

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

**Tabla 1. Comparación competitiva entre VolunTrack y plataformas similares de gestión de voluntariado.**

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


### 2.1.2. Estrategias y tácticas frente a los competidores
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
<p align="center"><strong>Figura 5.</strong> Entrevista a Claudio Astocondor, coordinador de ONG.</p>


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
<p align="center"><strong>Figura 6.</strong> Entrevista a Leonardo López, coordinador de ONG.</p>

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
<p align="center"><strong>Figura 7.</strong> Entrevista a Jorge Casaboza, coordinador juvenil de ONG.</p>

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
<p align="center"><strong>Figura 8.</strong> Entrevista a Tatiana Nakamurakare, voluntaria potencial.</p>

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
<p align="center"><strong>Figura 9.</strong> Entrevista a Roxana Arbañil, voluntaria activa.</p>

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
<p align="center"><strong>Figura 10.</strong> Entrevista a Diego Peralta, voluntario activo.</p>

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
<p align="center"><strong>Figura 11.</strong> User Persona – Líder/coordinador de ONG.</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/EyxOif1.png" alt="up2" width="500">
</p>
<p align="center"><strong>Figura 12.</strong> User Persona – Voluntario actual o potencial.</p>

### 2.3.2. User Task Matrix
**Tabla 2. Matriz de frecuencia e importancia de tareas para distintos perfiles de usuario.**

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
<p align="center"><strong>Figura 13.</strong> User Journey de líderes y coordinadores de ONGs.</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/E7Htrk7.png" alt="uj2" width="500">
</p>
<p align="center"><strong>Figura 14.</strong> User Journey de voluntarios actuales o potenciales.</p>

### 2.3.4. Empathy Mapping

**Segmento #1: Líderes y coordinadores de ONGs**

<p align="center">
  <img src="https://imgur.com/04xScfM.png" alt="em1" width="500">
</p>
<p align="center"><strong>Figura 15.</strong> Empathy Map de líderes y coordinadores de ONGs.</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/cLUcxIg.png" alt="em2" width="500">
</p>
<p align="center"><strong>Figura 16.</strong> Empathy Map de voluntarios actuales o potenciales.</p>

### 2.3.5. As-Is Scenario Mapping

**Segmento #1: Líderes y coordinadores de ONGs**

<p align="center">
  <img src="https://imgur.com/InY4IbU.png" alt="asis1" width="500">
</p>
<p align="center"><strong>Figura 17.</strong> As-Is Scenario de líderes y coordinadores de ONGs.</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/wQ2iwLg.png" alt="asis2" width="500">
</p>
<p align="center"><strong>Figura 18.</strong> As-Is Scenario de voluntarios actuales o potenciales.</p>

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
<p align="center"><strong>Figura 19.</strong> To-Be Scenario de líderes y coordinadores de ONGs.</p>

**Segmento #2: Voluntarios existentes y potenciales**

<p align="center">
  <img src="https://imgur.com/gCslzZW.png" alt="tobe2" width="500">
</p>
<p align="center"><strong>Figura 20.</strong> To-Be Scenario de voluntarios actuales o potenciales.</p>

## 3.2. User Stories
### 3.2.1. Requisitos
**Tabla 3. Requisitos funcionales del sistema VolunTrack.**

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

**Tabla 4. Requisitos no funcionales del sistema VolunTrack.**

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

**Tabla 5. Historia de usuario US01 - Registrar nueva ONG.**

| **User Story ID** | US01 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Registrar nueva ONG |
| **Description**    | Como coordinador de una ONG, quiero poder registrar mi organización en VolunTrack para empezar a gestionar a mis voluntarios y actividades en un solo lugar. |
| **Acceptance Criteria #1** | Dado que el usuario accede a la página de registro de ONG<br>Cuando completa todos los campos requeridos y hace clic en “Registrarse”<br>Entonces el sistema guarda los datos y muestra un mensaje de confirmación con instrucciones para verificar el correo electrónico. |
| **Acceptance Criteria #2** | Dado que el usuario intenta registrarse con un correo electrónico ya utilizado<br>Cuando presiona el botón de “Registrarse”<br>Entonces el sistema muestra un mensaje de error indicando que ese correo ya está en uso. |
| **Acceptance Criteria #3** | Dado que el usuario ingresa una contraseña que no cumple con los requisitos mínimos<br>Cuando intenta enviar el formulario<br>Entonces el sistema muestra una advertencia que describe los criterios necesarios (mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número o símbolo). |

**Tabla 6. Historia de usuario US02 - Explorar actividades disponibles.**


| **User Story ID** | US02 |
|-------------------|------|
| **Epic ID**        | E02 |
| **Title**          | Explorar actividades disponibles |
| **Description**    | Como voluntario, quiero poder explorar las diferentes actividades de voluntariado disponibles en VolunTrack para encontrar oportunidades que se ajusten a mis intereses y disponibilidad. |
| **Acceptance Criteria #1** | Dado que el voluntario accede a la página de actividades disponibles<br>Cuando el voluntario filtra las actividades por interés o tipo<br>Entonces el sistema muestra solo las actividades que coinciden con los filtros seleccionados. |
| **Acceptance Criteria #2** | Dado que el voluntario está en la página de actividades<br>Cuando selecciona una actividad específica<br>Entonces el sistema muestra los detalles completos de la actividad, incluyendo descripción, fecha, hora, lugar, y número de voluntarios necesarios. |
| **Acceptance Criteria #3** | Dado que el voluntario desea ver las actividades de una fecha específica<br>Cuando elige una fecha en el calendario o usa los filtros de fecha<br>Entonces el sistema actualiza la lista de actividades disponibles para esa fecha. |

**Tabla 7. Historia de usuario US03 - Crear nueva actividad.**

| **User Story ID** | US03 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Crear nueva actividad |
| **Description**    | Como coordinador de una ONG, quiero poder crear nuevas actividades de voluntariado en VolunTrack, especificando detalles como la descripción, fecha, hora, ubicación y número de voluntarios necesarios. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al formulario de creación de actividad<br>Cuando ingresa todos los detalles requeridos (descripción, fecha, hora, ubicación, número de voluntarios)<br>Entonces el sistema permite guardar la actividad y muestra un mensaje de confirmación. |
| **Acceptance Criteria #2** | Dado que el coordinador está creando una nueva actividad<br>Cuando la fecha y hora de la actividad ingresada ya están ocupadas por otra actividad<br>Entonces el sistema muestra un mensaje de advertencia indicando el conflicto de horario y no permite guardar la actividad. |
| **Acceptance Criteria #3** | Dado que el coordinador ha creado una actividad<br>Cuando la actividad es guardada<br>Entonces el sistema muestra la nueva actividad en el calendario de la organización y notifica a los voluntarios que la actividad está disponible para registrarse. |

**Tabla 8. Historia de usuario US04 - Inscribirme en una actividad.**

| **User Story ID** | US04 |
|-------------------|------|
| **Epic ID**        | E02 |
| **Title**          | Inscribirme en una actividad |
| **Description**    | Como voluntario, quiero poder inscribirme fácilmente en una actividad de voluntariado que me interese a través de VolunTrack. |
| **Acceptance Criteria #1** | Dado que el voluntario está viendo una actividad disponible<br>Cuando hace clic en el botón "Inscribirme"<br>Entonces el sistema registra al voluntario en la actividad y muestra un mensaje de confirmación de inscripción. |
| **Acceptance Criteria #2** | Dado que el voluntario intenta inscribirse en una actividad<br>Cuando la actividad ya está llena (número máximo de voluntarios alcanzado)<br>Entonces el sistema muestra un mensaje indicando que no es posible inscribirse debido a que no hay más plazas disponibles. |
| **Acceptance Criteria #3** | Dado que el voluntario ya está inscrito en una actividad<br>Cuando el voluntario accede a la actividad<br>Entonces el sistema muestra un mensaje indicando que ya está inscrito y permite cancelar la inscripción si lo desea. |

**Tabla 9. Historia de usuario US05 - Ver lista de voluntarios por actividad.**

| **User Story ID** | US05 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Ver lista de voluntarios por actividad |
| **Description**    | Como coordinador de una ONG, quiero poder ver la lista de voluntarios inscritos en cada actividad para tener una visión clara de quién participará. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a una actividad específica<br>Cuando selecciona la opción de ver los voluntarios inscritos<br>Entonces el sistema muestra una lista con los nombres y detalles de los voluntarios registrados en esa actividad. |
| **Acceptance Criteria #2** | Dado que el coordinador visualiza la lista de voluntarios<br>Cuando la lista contiene más de 10 voluntarios<br>Entonces el sistema permite al coordinador buscar y filtrar voluntarios por nombre, fecha de inscripción u otros criterios relevantes. |
| **Acceptance Criteria #3** | Dado que el coordinador está visualizando la lista de voluntarios<br>Cuando un voluntario decide cancelar su inscripción<br>Entonces el sistema actualiza la lista de voluntarios inscritos y muestra un mensaje de confirmación. |

**Tabla 10. Historia de usuario US06 - Recibir notificaciones de actividades.**

| **User Story ID** | US06 |
|-------------------|------|
| **Epic ID**        | E03 |
| **Title**          | Recibir notificaciones de actividades |
| **Description**    | Como voluntario, quiero poder recibir notificaciones sobre nuevas actividades que coincidan con mis intereses o recordatorios de las actividades en las que me he inscrito. |
| **Acceptance Criteria #1** | Dado que el voluntario ha especificado sus intereses en el perfil<br>Cuando se publiquen nuevas actividades que coincidan con esos intereses<br>Entonces el sistema envía una notificación al voluntario informándole sobre las nuevas actividades disponibles. |
| **Acceptance Criteria #2** | Dado que el voluntario está inscrito en una actividad<br>Cuando se acerque la fecha de la actividad<br>Entonces el sistema envía un recordatorio al voluntario para que se prepare para la actividad. |
| **Acceptance Criteria #3** | Dado que el voluntario ha optado por recibir notificaciones<br>Cuando se realice cualquier cambio importante en una actividad a la que está inscrito (hora, ubicación, cancelación, etc.)<br>Entonces el sistema envía una notificación informando al voluntario sobre el cambio. |

**Tabla 11. Historia de usuario US07 - Marcar asistencia de voluntarios.**

| **User Story ID** | US07 |
|-------------------|------|
| **Epic ID**        | E03 |
| **Title**          | Marcar asistencia de voluntarios |
| **Description**    | Como coordinador de una ONG, quiero poder marcar la asistencia de los voluntarios en una actividad para llevar un registro de su participación. |
| **Acceptance Criteria #1** | Dado que el coordinador está en la actividad<br>Cuando selecciona la opción de marcar asistencia<br>Entonces el sistema muestra una lista de voluntarios inscritos y permite al coordinador marcar su asistencia con un clic. |
| **Acceptance Criteria #2** | Dado que el coordinador marca la asistencia de los voluntarios<br>Cuando un voluntario está ausente<br>Entonces el coordinador puede registrar la ausencia y el sistema actualizará el estado de asistencia. |
| **Acceptance Criteria #3** | Dado que el coordinador ha marcado la asistencia de los voluntarios<br>Cuando se guarda la información<br>Entonces el sistema genera un informe de asistencia que puede ser descargado o visualizado por el coordinador. |

**Tabla 12. Historia de usuario US08 - Ver mi historial de participación.**

| **User Story ID** | US08 |
|-------------------|------|
| **Epic ID**        | E04 |
| **Title**          | Ver mi historial de participación |
| **Description**    | Como voluntario, quiero poder ver un historial de todas las actividades en las que he participado a través de VolunTrack. |
| **Acceptance Criteria #1** | Dado que el voluntario accede a su perfil<br>Cuando selecciona la opción de "Historial de Participación"<br>Entonces el sistema muestra una lista con todas las actividades en las que el voluntario ha participado, ordenadas por fecha. |
| **Acceptance Criteria #2** | Dado que el voluntario está visualizando su historial de participación<br>Cuando selecciona una actividad de la lista<br>Entonces el sistema muestra los detalles completos de la actividad, incluyendo la fecha, hora, lugar y si completó la actividad. |
| **Acceptance Criteria #3** | Dado que el voluntario tiene un historial de participación<br>Cuando se ha completado una actividad<br>Entonces el sistema marca la actividad como "Completada" y la incluye en su historial con un indicador de estado. |

**Tabla 13. Historia de usuario US09 - Generar certificado de participación.**

| **User Story ID** | US09 |
|-------------------|------|
| **Epic ID**        | E04 |
| **Title**          | Generar certificado de participación |
| **Description**    | Como coordinador de una ONG, quiero poder generar certificados de participación para los voluntarios que completaron una actividad. |
| **Acceptance Criteria #1** | Dado que el coordinador tiene acceso a una actividad completada<br>Cuando selecciona la opción de generar certificado para un voluntario<br>Entonces el sistema genera un certificado con el nombre del voluntario, nombre de la actividad, fecha y horas de participación. |
| **Acceptance Criteria #2** | Dado que el coordinador desea generar un certificado de participación<br>Cuando genera el certificado<br>Entonces el sistema ofrece la opción de descargar el certificado en formato PDF o enviarlo por correo electrónico al voluntario. |
| **Acceptance Criteria #3** | Dado que un voluntario ha completado varias actividades<br>Cuando el coordinador selecciona varios voluntarios de la lista de inscritos<br>Entonces el sistema permite generar certificados individuales para cada uno de los voluntarios seleccionados. |

**Tabla 14. Historia de usuario US10 - Editar detalles de una actividad.**

| **User Story ID** | US10 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Editar detalles de una actividad |
| **Description**    | Como coordinador de una ONG, quiero poder editar los detalles de una actividad existente (como fecha, hora, descripción o número de voluntarios necesarios) para mantener la información actualizada. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a una actividad existente<br>Cuando selecciona la opción "Editar" en los detalles de la actividad<br>Entonces el sistema muestra un formulario con todos los campos editables (fecha, hora, descripción, número de voluntarios necesarios, etc.). |
| **Acceptance Criteria #2** | Dado que el coordinador edita los detalles de una actividad<br>Cuando se realiza un cambio en la fecha y hora<br>Entonces el sistema verifica que la nueva fecha y hora no generen conflictos con otras actividades y muestra un mensaje de advertencia en caso de conflicto. |
| **Acceptance Criteria #3** | Dado que el coordinador ha editado los detalles de la actividad<br>Cuando hace clic en "Guardar cambios"<br>Entonces el sistema actualiza la actividad con los nuevos detalles y muestra un mensaje de confirmación indicando que los cambios fueron guardados correctamente. |

**Tabla 15. Historia de usuario US11 - Comunicarme con los voluntarios de una actividad.**

| **User Story ID** | US11 |
|-------------------|------|
| **Epic ID**        | E03 |
| **Title**          | Comunicarme con los voluntarios de una actividad |
| **Description**    | Como coordinador de una ONG, quiero poder enviar mensajes o notificaciones a los voluntarios inscritos en una actividad específica para compartir información importante o recordatorios. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a una actividad específica<br>Cuando selecciona la opción para enviar un mensaje a los voluntarios inscritos<br>Entonces el sistema muestra una interfaz para redactar el mensaje y permite elegir a los voluntarios a quienes se enviará el mensaje. |
| **Acceptance Criteria #2** | Dado que el coordinador ha redactado un mensaje<br>Cuando hace clic en "Enviar mensaje"<br>Entonces el sistema envía el mensaje o notificación a todos los voluntarios inscritos en la actividad y muestra un mensaje de confirmación. |
| **Acceptance Criteria #3** | Dado que el coordinador ha enviado un mensaje a los voluntarios<br>Cuando los voluntarios reciban el mensaje<br>Entonces el sistema muestra una notificación en la plataforma o envía una alerta por correo electrónico o mensaje de texto (según la preferencia del voluntario). |

**Tabla 16. Historia de usuario US12 - Gestionar el estado de inscripción de un voluntario.**

| **User Story ID** | US12 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Gestionar el estado de inscripción de un voluntario |
| **Description**    | Como coordinador de una ONG, quiero poder aprobar o rechazar la inscripción de un voluntario a una actividad, o incluso dar de baja a un voluntario si es necesario. |
| **Acceptance Criteria #1** | Dado que el coordinador está viendo la lista de voluntarios inscritos en una actividad<br>Cuando selecciona un voluntario de la lista<br>Entonces el sistema muestra opciones para aprobar, rechazar o dar de baja al voluntario de la actividad. |
| **Acceptance Criteria #2** | Dado que el coordinador aprueba o rechaza la inscripción de un voluntario<br>Cuando se hace la selección<br>Entonces el sistema actualiza el estado de inscripción del voluntario y envía una notificación al voluntario informándole sobre la decisión (aprobación, rechazo o baja). |
| **Acceptance Criteria #3** | Dado que el coordinador decide dar de baja a un voluntario<br>Cuando el coordinador confirma la acción<br>Entonces el sistema elimina al voluntario de la actividad y actualiza la lista de voluntarios inscritos, notificando al voluntario que su inscripción ha sido cancelada. |

**Tabla 17. Historia de usuario US13 - Ver un resumen de la participación de un voluntario.**

| **User Story ID** | US13 |
|-------------------|------|
| **Epic ID**        | E04 |
| **Title**          | Ver un resumen de la participación de un voluntario |
| **Description**    | Como coordinador de una ONG, quiero poder ver un resumen del historial de participación de un voluntario específico, incluyendo las actividades en las que ha participado y las horas dedicadas. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al perfil de un voluntario<br>Cuando selecciona la opción de "Ver resumen de participación"<br>Entonces el sistema muestra un resumen con las actividades en las que el voluntario ha participado, ordenadas por fecha, junto con las horas dedicadas a cada una. |
| **Acceptance Criteria #2** | Dado que el coordinador visualiza el historial de participación<br>Cuando el coordinador hace clic en una actividad específica del resumen<br>Entonces el sistema muestra los detalles completos de esa actividad, incluyendo el número de horas y la descripción de la actividad. |
| **Acceptance Criteria #3** | Dado que el coordinador ve el historial de participación<br>Cuando el voluntario ha completado varias actividades<br>Entonces el sistema proporciona un total acumulado de las horas de participación del voluntario y un indicador de su nivel de participación. |

**Tabla 18. Historia de usuario US14 - Generar informes de impacto para voluntarios.**

| **User Story ID** | US14 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Generar informes de impacto para voluntarios |
| **Description**    | Como coordinador de una ONG, quiero poder generar informes personalizados para cada voluntario que muestren su contribución en términos de horas dedicadas, tareas realizadas e incluso un estimado del impacto que han generado para que se sientan valorados y vean el resultado de su esfuerzo. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al perfil de un voluntario<br>Cuando selecciona la opción para generar un informe de impacto<br>Entonces el sistema genera un informe con el total de horas dedicadas por el voluntario, las actividades en las que participó y un resumen de las tareas realizadas. |
| **Acceptance Criteria #2** | Dado que el coordinador está generando el informe de impacto<br>Cuando se calculan las horas dedicadas y las tareas realizadas<br>Entonces el sistema permite incluir una estimación del impacto del voluntario, basada en parámetros como el número de personas beneficiadas, el tipo de actividad y otros factores relevantes. |
| **Acceptance Criteria #3** | Dado que el coordinador ha generado el informe de impacto<br>Cuando hace clic en "Descargar informe"<br>Entonces el sistema proporciona el informe en formato PDF o permite enviarlo por correo electrónico al voluntario, mostrando el valor de su contribución. |

**Tabla 19. Historia de usuario US15 - Entender la propuesta de valor para ONGs.**

| **User Story ID** | US15 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Entender la propuesta de valor para ONGs |
| **Description**    | Como visitante (líder o coordinador de una ONG), quiero poder entender claramente en la página principal de VolunTrack cómo esta plataforma puede ayudar a mi organización a gestionar el voluntariado de manera más eficiente y efectiva, destacando los beneficios clave como la centralización, el ahorro de tiempo y la mejora del impacto social. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la página principal de VolunTrack<br>Cuando visualiza la propuesta de valor de la plataforma<br>Entonces el sistema debe presentar una sección clara y destacada que explique cómo la plataforma centraliza la gestión del voluntariado, con ejemplos prácticos de uso. |
| **Acceptance Criteria #2** | Dado que el visitante está viendo la propuesta de valor<br>Cuando hace clic en los beneficios clave<br>Entonces el sistema debe mostrar más detalles interactivos o pop-ups que expliquen cómo VolunTrack ahorra tiempo y mejora la eficiencia en la gestión de voluntarios. |
| **Acceptance Criteria #3** | Dado que el visitante está interesado en los beneficios de la plataforma<br>Cuando lee la propuesta de valor<br>Entonces el sistema debe incluir ejemplos de casos de éxito o testimonios que resalten cómo VolunTrack ha mejorado el impacto social de otras ONGs. |

**Tabla 20. Historia de usuario US16 - Explorar funcionalidades clave para voluntarios.**

| **User Story ID** | US16 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Explorar las funcionalidades clave para voluntarios |
| **Description**    | Como visitante, quiero poder identificar fácilmente en la página principal de VolunTrack las funcionalidades que me permitirán encontrar y participar en actividades de voluntariado de forma sencilla, como la búsqueda por intereses, la visualización de actividades disponibles y el proceso de registro. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la página principal de VolunTrack<br>Cuando visualiza las funcionalidades clave de la plataforma<br>Entonces el sistema debe presentar claramente las opciones para buscar actividades por intereses, mostrando un campo de búsqueda prominente y fácil de usar. |
| **Acceptance Criteria #2** | Dado que el visitante está explorando las funcionalidades de la plataforma<br>Cuando hace clic en "Ver actividades disponibles"<br>Entonces el sistema debe mostrar una lista actualizada de las actividades disponibles que el visitante puede explorar, con filtros para ayudar a organizar la información (por ejemplo, por fecha, ubicación, tipo de actividad). |
| **Acceptance Criteria #3** | Dado que el visitante encuentra una actividad de interés<br>Cuando hace clic en el botón "Registrarse"<br>Entonces el sistema debe guiar al visitante a través del proceso de registro para esa actividad, solicitando la información necesaria para completar la inscripción de manera sencilla. |

**Tabla 21. Historia de usuario US17 - Encontrar información de contacto y cómo empezar.**

| **User Story ID** | US17 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Encontrar información de contacto y cómo empezar |
| **Description**    | Como visitante, quiero poder encontrar fácilmente la información de contacto de VolunTrack y saber cuáles son los siguientes pasos para registrar mi ONG o comenzar a explorar las oportunidades de voluntariado en la plataforma. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la página principal de VolunTrack<br>Cuando busca información de contacto<br>Entonces el sistema debe mostrar de forma clara y visible los métodos de contacto (correo electrónico, teléfono, formulario de contacto, etc.) en la parte superior o inferior de la página, con un enlace directo a una página de contacto. |
| **Acceptance Criteria #2** | Dado que el visitante desea comenzar a explorar las oportunidades de voluntariado<br>Cuando selecciona la opción para "Empezar a explorar" o "Registrarse"<br>Entonces el sistema debe mostrar los pasos siguientes, incluyendo la opción para registrarse en la plataforma o crear una cuenta de ONG, con instrucciones claras para guiar al visitante a través del proceso. |
| **Acceptance Criteria #3** | Dado que el visitante desea registrar su ONG<br>Cuando hace clic en "Registrar mi ONG"<br>Entonces el sistema debe redirigir al visitante a un formulario de registro con los campos necesarios, o proporcionar detalles sobre el proceso para crear una cuenta de ONG, destacando las ventajas y el valor de registrarse en VolunTrack. |

**Tabla 22. Historia de usuario US18 - Conocer los planes y precios para ONGs.**

| **User Story ID** | US18 |
|-------------------|------|
| **Epic ID**        | E06 |
| **Title**          | Conocer los planes y precios para ONGs |
| **Description**    | Como visitante, quiero poder encontrar de forma clara y accesible en la Landing Page de VolunTrack la información sobre los diferentes planes de suscripción y sus respectivos precios, para evaluar si se ajustan al presupuesto y las necesidades de mi organización. |
| **Acceptance Criteria #1** | Dado que el visitante accede a la Landing Page de VolunTrack<br>Cuando busca información sobre planes y precios<br>Entonces el sistema debe mostrar una sección claramente visible con una lista de los planes de suscripción disponibles y sus respectivos precios. |
| **Acceptance Criteria #2** | Dado que el visitante visualiza la información de planes y precios<br>Cuando selecciona un plan específico<br>Entonces el sistema debe mostrar más detalles sobre ese plan, incluyendo características específicas, beneficios adicionales y cualquier restricción o requisito relacionado con el plan. |
| **Acceptance Criteria #3** | Dado que el visitante está interesado en obtener más información sobre los planes<br>Cuando hace clic en un enlace de "Más información" o "Contacto para consultas"<br>Entonces el sistema debe redirigir al visitante a una página de contacto o a una sección donde pueda enviar preguntas o recibir asistencia personalizada para evaluar mejor el plan que más le convenga. |

**Tabla 23. Historia de usuario US19 - Ver y gestionar voluntarios.**

| **User Story ID** | US19 |
|-------------------|------|
| **Epic ID**        | E05 |
| **Title**          | Ver y gestionar voluntarios |
| **Description**    | Como coordinador de una ONG, quiero poder ver una lista completa de todos los voluntarios registrados en la plataforma junto con información relevante, para poder administrar nuestra base de voluntarios de manera eficiente. |
| **Acceptance Criteria #1** | Dado que el coordinador accede a la sección de voluntarios<br>Cuando selecciona la opción "Ver voluntarios"<br>Entonces el sistema debe mostrar una lista completa de todos los voluntarios registrados, incluyendo información relevante como nombre, correo electrónico, historial de actividades y estado de participación. |
| **Acceptance Criteria #2** | Dado que el coordinador está visualizando la lista de voluntarios<br>Cuando realiza una búsqueda o aplica filtros (por nombre, actividad, estado, etc.)<br>Entonces el sistema debe actualizar la lista de voluntarios para mostrar solo aquellos que coinciden con los criterios de búsqueda o filtro seleccionados. |
| **Acceptance Criteria #3** | Dado que el coordinador está viendo la lista de voluntarios<br>Cuando selecciona un voluntario específico<br>Entonces el sistema debe mostrar los detalles completos de ese voluntario, incluyendo su perfil, historial de actividades y cualquier otra información relevante, permitiendo al coordinador gestionar su información (editar, eliminar, etc.). |

**Tabla 24. Historia de usuario US20 - Visualizar calendario de actividades.**

| **User Story ID** | US20 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Visualizar Calendario de Actividades |
| **Description**    | Como coordinador de una ONG, quiero tener una vista de calendario interactiva de todas las actividades programadas de mi organización dentro de un panel de control, para poder visualizar fácilmente la distribución de las actividades a lo largo del tiempo, identificar posibles conflictos de programación y tener una visión general rápida de nuestro plan de voluntariado. |
| **Acceptance Criteria #1** | Dado que el coordinador accede al panel de control de actividades<br>Cuando visualiza el calendario interactivo<br>Entonces el sistema muestra todas las actividades programadas en un formato de calendario (mensual, semanal o diario) según la preferencia seleccionada por el coordinador. |
| **Acceptance Criteria #2** | Dado que el coordinador visualiza el calendario de actividades<br>Cuando hace clic en una actividad<br>Entonces el sistema muestra una ventana emergente o un modal con los detalles completos de la actividad, como la fecha, hora, descripción, lugar, y número de voluntarios inscritos. |
| **Acceptance Criteria #3** | Dado que el coordinador ve el calendario<br>Cuando hay un conflicto de programación (actividades que se superponen en el mismo horario)<br>Entonces el sistema resalta las actividades en conflicto y muestra una advertencia o notificación para que el coordinador pueda identificar y resolver el conflicto de manera eficiente. |
| **Acceptance Criteria #4** | Dado que el coordinador desea agregar una nueva actividad<br>Cuando selecciona una fecha en el calendario y completa los campos necesarios para crear una nueva actividad<br>Entonces el sistema agrega la actividad al calendario y actualiza la vista para reflejar la nueva programación. |

**Tabla 25. Historia de usuario US21 - Dashboard de actividades.**

| **User Story ID** | US21 |
|-------------------|------|
| **Epic ID**        | E01 |
| **Title**          | Dashboard de Actividades |
| **Description**    | Como coordinador de una ONG, quiero tener un panel de control (dashboard) que me ofrezca una visión general del estado de nuestras actividades para poder tener una perspectiva general del programa de voluntariado de mi organización y tomar decisiones informadas. |
| **Acceptance Criteria #1** | Dado que un usuario ha ingresado sus credenciales válidas y ha pulsado el botón "Iniciar Sesión"<br>Cuando la autenticación es exitosa<br>Entonces el sistema lo redirige automáticamente a la vista de su dashboard principal. |
| **Acceptance Criteria #2** | Dado que hay próximas actividades programadas para la ONG<br>Cuando el coordinador visualiza el dashboard<br>Entonces se muestra una lista de las próximas actividades con su título y fecha de inicio. |
| **Acceptance Criteria #3** | Dado que el coordinador ha iniciado sesión<br>Cuando visualiza los elementos del dashboard<br>Entonces se muestra un pequeño calendario integrado que permite acceder rápidamente a la vista completa del calendario de actividades de la ONG. |
| **Acceptance Criteria #4** | Dado que el coordinador ha iniciado sesión<br>Cuando visualiza los elementos del dashboard<br>Entonces se muestran botones o enlaces claramente identificados para las acciones más comunes de la ONG, como crear actividades. |

### 3.2.3. Technical Stories

| **User Story ID**     | TS01 |
|------------------------|------|
| **Epic ID**            | E07 |
| **Title**              | Gestión Completa de Voluntarios en la API |
| **Description**        | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los voluntarios, para interactuar de forma eficiente con el sistema de voluntariado. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de voluntarios<br>Cuando realiza una solicitud POST a /api/v1/volunteers con los datos completos y válidos<br>Entonces el sistema debe crear un nuevo voluntario, devolver 201 Created y los datos recién creados. |
| **Acceptance Criteria #2** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza una solicitud GET a /api/v1/volunteers<br>Entonces el sistema devuelve 200 OK y una lista de todos los voluntarios registrados. |
| **Acceptance Criteria #3** | Dado que existe un voluntario con un ID específico<br>Cuando se envía una solicitud PUT a /api/v1/volunteers/{volunteerId}<br>Entonces el sistema actualiza los datos y devuelve 200 OK con el voluntario actualizado. |
| **Acceptance Criteria #4** | Dado que existe un voluntario con un ID específico<br>Cuando se envía una solicitud DELETE a /api/v1/volunteers/{volunteerId}<br>Entonces el sistema elimina al voluntario, devuelve 204 No Content y ya no aparece en búsquedas. |

| **User Story ID**     | TS02 |
|------------------------|------|
| **Epic ID**            | E07 |
| **Title**              | Gestión Completa de Actividades en la API |
| **Description**        | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las actividades, para poder organizar y administrar eventos de voluntariado. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente<br>Cuando realiza POST a /api/v1/activities con los datos válidos<br>Entonces el sistema crea la actividad, devuelve 201 Created y los datos creados. |
| **Acceptance Criteria #2** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza GET a /api/v1/activities<br>Entonces recibe 200 OK y una lista de todas las actividades registradas. |
| **Acceptance Criteria #3** | Dado que existe una actividad con un ID<br>Cuando se envía GET a /api/v1/activities/{activityId}<br>Entonces el sistema devuelve 200 OK con los datos solicitados. |
| **Acceptance Criteria #4** | Dado que existe una actividad con un ID<br>Cuando se envía PUT a /api/v1/activities/{activityId} con datos actualizados<br>Entonces se actualiza la actividad, devuelve 200 OK y los datos actualizados. |
| **Acceptance Criteria #5** | Dado que existe una actividad con un ID<br>Cuando se envía DELETE a /api/v1/activities/{activityId}<br>Entonces se elimina la actividad, devuelve 204 No Content y no aparece en búsquedas posteriores. |

| **User Story ID**     | TS03 |
|------------------------|------|
| **Epic ID**            | E07 |
| **Title**              | Gestión de Certificados en la API |
| **Description**        | Como desarrollador, quiero que la RESTful API me permita gestionar los certificados, para poder emitir y consultar reconocimientos a los participantes. |
| **Acceptance Criteria #1** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza POST a /api/v1/certificates con participationId y descripción<br>Entonces el sistema crea el certificado, devuelve 201 Created y los datos del certificado. |
| **Acceptance Criteria #2** | Dado que se necesita consultar los certificados de un voluntario<br>Cuando se envía GET a /api/v1/certificates/by-volunteer/{volunteerId}<br>Entonces se devuelve 200 OK con todos los certificados de ese voluntario. |

| **User Story ID**     | TS04 |
|------------------------|------|
| **Epic ID**            | E07 |
| **Title**              | Gestión Completa de Organizaciones en la API |
| **Description**        | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las organizaciones, para poder administrar las entidades que colaboran con el voluntariado. |
| **Acceptance Criteria #1** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza POST a /api/v1/organizations con datos válidos<br>Entonces se crea la organización, devuelve 201 Created y los datos correspondientes. |
| **Acceptance Criteria #2** | Dado que existe una organización con un ID<br>Cuando se realiza GET a /api/v1/organizations/{organizationId}<br>Entonces se devuelve 200 OK y los datos de esa organización. |
| **Acceptance Criteria #3** | Dado que existe una organización con un ID<br>Cuando se realiza PUT a /api/v1/organizations/{organizationId} con datos actualizados<br>Entonces se actualiza y devuelve 200 OK con los datos modificados. |
| **Acceptance Criteria #4** | Dado que existe una organización con un ID<br>Cuando se envía DELETE a /api/v1/organizations/{organizationId}<br>Entonces se elimina, devuelve 204 No Content y no aparece más. |

| **User Story ID**     | TS05 |
|------------------------|------|
| **Epic ID**            | E07 |
| **Title**              | Gestión Completa de Inscripciones en la API |
| **Description**        | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las inscripciones, para administrar la participación de voluntarios en actividades. |
| **Acceptance Criteria #1** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza POST a /api/v1/inscriptions con datos válidos<br>Entonces se crea una inscripción, devuelve 201 Created y los datos. |
| **Acceptance Criteria #2** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza GET a /api/v1/inscriptions<br>Entonces recibe 200 OK y una lista de inscripciones. |
| **Acceptance Criteria #3** | Dado que existe una inscripción con un ID<br>Cuando realiza GET a /api/v1/inscriptions/{inscriptionId}<br>Entonces el sistema devuelve 200 OK y los datos solicitados. |
| **Acceptance Criteria #4** | Dado que existe una inscripción con un ID<br>Cuando realiza PUT a /api/v1/inscriptions/{inscriptionId} con datos nuevos<br>Entonces actualiza la inscripción, devuelve 200 OK y los datos actualizados. |
| **Acceptance Criteria #5** | Dado que existe una inscripción con un ID<br>Cuando realiza DELETE a /api/v1/inscriptions/{inscriptionId}<br>Entonces elimina el registro, devuelve 204 No Content y no aparece más. |
| **Acceptance Criteria #6** | Dado que se desea consultar inscripciones por actividad<br>Cuando realiza GET a /api/v1/inscriptions/byActivity/{activityId}<br>Entonces devuelve 200 OK con la lista de inscripciones para esa actividad. |

| **User Story ID**     | TS06 |
|------------------------|------|
| **Epic ID**            | E07 |
| **Title**              | Gestión Completa de Notificaciones en la API |
| **Description**        | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las notificaciones, para poder enviar y administrar comunicados en el sistema. |
| **Acceptance Criteria #1** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza POST a /api/v1/notifications con datos válidos<br>Entonces se crea una notificación, devuelve 201 Created y los datos. |
| **Acceptance Criteria #2** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza GET a /api/v1/notifications<br>Entonces recibe 200 OK y una lista de notificaciones. |
| **Acceptance Criteria #3** | Dado que se quiere consultar por destinatario<br>Cuando se realiza GET a /api/v1/notifications/byRecipient/{recipientType}/{recipientId}<br>Entonces devuelve 200 OK con las notificaciones correspondientes. |
| **Acceptance Criteria #4** | Dado que existe una notificación con ID<br>Cuando realiza DELETE a /api/v1/notifications/{notificationId}<br>Entonces se elimina, devuelve 204 No Content y no aparece más. |

| **User Story ID**     | TS07 |
|------------------------|------|
| **Epic ID**            | E07 |
| **Title**              | Gestión de Participaciones en la API |
| **Description**        | Como desarrollador, quiero que la RESTful API me permita gestionar las participaciones, para registrar y consultar las inscripciones de voluntarios en actividades. |
| **Acceptance Criteria #1** | Dado que el desarrollador está en una aplicación cliente<br>Cuando realiza POST a /api/v1/participations con datos válidos<br>Entonces se crea una participación, devuelve 201 Created y los datos. |
| **Acceptance Criteria #2** | Dado que se desea consultar participaciones por voluntario<br>Cuando realiza GET a /api/v1/participations/by-volunteer/{volunteerId}<br>Entonces devuelve 200 OK con todas las participaciones de ese voluntario. |
| **Acceptance Criteria #3** | Dado que se desea consultar participaciones por actividad<br>Cuando realiza GET a /api/v1/participations/by-activity/{activityId}<br>Entonces devuelve 200 OK con todas las participaciones de esa actividad. |

### 3.2.4. Epicas

**Tabla 29. Agrupación de historias de usuario por épicas temáticas del sistema VolunTrack.**

| **EPIC 01:** | Gestión de ONGs y Actividades |
|:------------:|:------------------------------|
| | Como coordinador de una ONG, quiero tener herramientas completas para registrar mi organización, crear y modificar actividades de voluntariado, para poder gestionar de manera eficiente nuestras operaciones y oportunidades de participación. |
| **User Story ID** | **Título** |
| US01 | Registrar nueva ONG |
| US03 | Crear nueva actividad |
| US10 | Editar detalles de una actividad |
| US20 | Visualizar Calendario de Actividades |
| US21 | Dashboard de actividades |

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
| US19 | Ver y gestionar voluntarios |

| **EPIC 06:** | Experiencia en Landing Page |
|:------------:|:----------------------------|
| | Como visitante interesado, quiero encontrar fácilmente en la Landing Page información clara sobre la propuesta de valor de VolunTrack, las funcionalidades clave y cómo empezar a utilizar la plataforma, para comprender sus beneficios y decidir si se ajusta a mis necesidades. |
| **User Story ID** | **Título** |
| US15 | Entender la propuesta de valor para ONGs |
| US16 | Explorar las funcionalidades clave para voluntarios |
| US17 | Encontrar información de contacto y cómo empezar |
| US18 | Conocer los planes y precios para ONGs |

| **EPIC 07:** | RESTful API |
|:------------:|:-----------------------------------------------------------------------|
| | Como desarrollador, quiero implementar y mantener los endpoints del RESTful API necesarios para las funciones clave de la plataforma, como gestión de voluntarios, inscripciones, notificaciones y actividades para asegurar la operatividad y escalabilidad del sistema. |
| **User Story ID** | **Título** |
| TS01 | Gestión Completa de Voluntarios en la API |
| TS02 | Gestión Completa de Actividades en la API |
| TS03 | Gestión de Certificados en la API |
| TS04 | Gestión Completa de Organizaciones en la API |
| TS05 | Gestión Completa de Inscripciones en la API |
| TS06 | Gestión Completa de Notificaciones en la API |
| TS07 | Gestión de Participaciones en la API |

## 3.3. Impact Mapping
**Business Goals**

1. Alcanzar 30 ONGs activas en la plataforma con al menos 2 actividades creadas cada una en los primeros 3 meses. 

<p align="center">
  <img src="https://imgur.com/Z7n2gAE.png" alt="Im1" width="500">
</p>
<p align="center"><strong>Figura 21.</strong> Meta: alcanzar 30 ONGs activas con mínimo dos actividades.</p>

2. Conseguir que el 70% de los voluntarios que se registran en VolunTrack se inscriban en al menos una actividad durante su primer mes.

<p align="center">
  <img src="https://imgur.com/2HfWMOV.png" alt="Im2" width="500">
</p>
<p align="center"><strong>Figura 22.</strong> Meta: 70% de voluntarios inscritos participen en al menos una actividad.</p>

3. Lograr que el 70% de las ONGs activas utilicen las herramientas de la plataforma para analizar la participación de sus voluntarios y reconocer su contribución (viendo listas, resúmenes, generando certificados o informes de impacto) al menos una vez al mes durante los próximos 3 meses.

<p align="center">
  <img src="https://imgur.com/rA1TX1O.png" alt="Im3" width="500">
</p>
<p align="center"><strong>Figura 23.</strong> Meta: uso recurrente de herramientas de análisis y reconocimiento.</p>

4. Aumentar en un 15% la tasa de conversión de visitantes de la Landing Page a usuarios registrados en la plataforma en los próximos 2 meses

<p align="center">
  <img src="https://imgur.com/aJ4KXYo.png" alt="Im4" width="500">
</p>
<p align="center"><strong>Figura 24.</strong> Meta: aumentar conversión de visitantes a registros en la Landing Page.</p>

## 3.4. Product Backlog

**Tabla 30. Product Backlog priorizado con historias de usuario y estimaciones en Story Points.**

| # Orden | User Story ID | Descripción | Story Points (1/2/3/5/8) |
|:-------:|:-------------:|-------------|:------------------------:|
| 1 | US01 | Como coordinador de una ONG, quiero poder registrar mi organización en VolunTrack para empezar a gestionar a mis voluntarios y actividades en un solo lugar. | 3 |
| 2 | US03 | Como coordinador de una ONG, quiero poder crear nuevas actividades de voluntariado en VolunTrack, especificando detalles como la descripción, fecha, hora, ubicación y número de voluntarios necesarios. | 5 |
| 3 | US02 | Como voluntario, quiero poder explorar las diferentes actividades de voluntariado disponibles en VolunTrack para encontrar oportunidades que se ajusten a mis intereses y disponibilidad. | 5 |
| 4 | US04 | Como voluntario, quiero poder inscribirme fácilmente en una actividad de voluntariado que me interese a través de VolunTrack. | 3 |
| 5 | US23 | Como coordinador de una ONG, quiero tener una vista de calendario interactiva de todas las actividades programadas de mi organización dentro de un panel de control, para poder visualizar fácilmente la distribución de las actividades a lo largo del tiempo, identificar posibles conflictos de programación y tener una visión general rápida de nuestro plan de voluntariado. | 5 |
| 6 | US24 | Como coordinador de una ONG, quiero tener un panel de control (dashboard) que me ofrezca una visión general del estado de nuestras actividades para poder tener una perspectiva general del programa de voluntariado de mi organización y tomar decisiones informadas. | 8 |
| 7 | US05 | Como coordinador de una ONG, quiero poder ver la lista de voluntarios inscritos en cada actividad para tener una visión clara de quién participará. | 3 |
| 8 | US07 | Como coordinador de una ONG, quiero poder marcar la asistencia de los voluntarios en una actividad para llevar un registro de su participación. | 3 |
| 9 | US06 | Como voluntario, quiero poder recibir notificaciones sobre nuevas actividades que coincidan con mis intereses o recordatorios de las actividades en las que me he inscrito. | 5 |
| 10 | TS04 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las organizaciones, para poder administrar las entidades que colaboran con el voluntariado. | 2 |
| 11 | US08 | Como voluntario, quiero poder ver un historial de todas las actividades en las que he participado a través de VolunTrack. | 3 |
| 12 | TS05 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las inscripciones, para administrar la participación de voluntarios en actividades. | 2 |
| 13 | TS02 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las actividades, para poder organizar y administrar eventos de voluntariado. | 2 |
| 14 | US09 | Como coordinador de una ONG, quiero poder generar certificados de participación para los voluntarios que completaron una actividad. | 5 |
| 15 | TS01 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los voluntarios, para interactuar de forma eficiente con el sistema de voluntariado. | 3 |
| 16 | US12 | Como coordinador de una ONG, quiero poder aprobar o rechazar la inscripción de un voluntario a una actividad, o incluso dar de baja a un voluntario si es necesario. | 3 |
| 17 | US11 | Como coordinador de una ONG, quiero poder enviar mensajes o notificaciones a los voluntarios inscritos en una actividad específica para compartir información importante o recordatorios. | 3 |
| 18 | US13 | Como coordinador de una ONG, quiero poder ver un resumen del historial de participación de un voluntario específico, incluyendo las actividades en las que ha participado y las horas dedicadas. | 3 |
| 19 | TS06 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las notificaciones, para poder enviar y administrar comunicados en el sistema. | 2 |
| 20 | TS07 | Como desarrollador, quiero que la RESTful API me permita gestionar las participaciones, para registrar y consultar las inscripciones de voluntarios en actividades. | 2 |
| 21 | US14 | Como coordinador de una ONG, quiero poder generar informes personalizados para cada voluntario que muestren su contribución en términos de horas dedicadas, tareas realizadas e incluso un estimado del impacto que han generado para que se sientan valorados y vean el resultado de su esfuerzo. | 3 |
| 22 | US10 | Como coordinador de una ONG, quiero poder editar los detalles de una actividad existente (como fecha, hora, descripción o número de voluntarios necesarios) para mantener la información actualizada. | 3 |
| 23 | US22 | Como coordinador de una ONG, quiero poder ver una lista completa de todos los voluntarios registrados en la plataforma junto con información relevante, para poder administrar nuestra base de voluntarios de manera eficiente. | 5 |
| 24 | TS03 | Como desarrollador, quiero que la RESTful API me permita gestionar los certificados, para poder emitir y consultar reconocimientos a los participantes. | 2 |
| 25 | US15 | Como visitante (líder o coordinador de una ONG), quiero poder entender claramente en la página principal de VolunTrack cómo esta plataforma puede ayudar a mi organización a gestionar el voluntariado de manera más eficiente y efectiva, destacando los beneficios clave como la centralización, el ahorro de tiempo y la mejora del impacto social. | 2 |
| 26 | US16 | Como visitante, quiero poder identificar fácilmente en la página principal de VolunTrack las funcionalidades que me permitirán encontrar y participar en actividades de voluntariado de forma sencilla, como la búsqueda por intereses, la visualización de actividades disponibles y el proceso de registro. | 2 |
| 27 | US17 | Como visitante, quiero poder encontrar fácilmente la información de contacto de VolunTrack y saber cuáles son los siguientes pasos para registrar mi ONG o comenzar a explorar las oportunidades de voluntariado en la plataforma. | 2 |
| 28 | US18 | Como visitante, quiero poder encontrar de forma clara y accesible en la Landing Page de VolunTrack la información sobre los diferentes planes de suscripción y sus respectivos precios, para evaluar si se ajustan al presupuesto y las necesidades de mi organización. | 2 |

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
<p align="center"><strong>Figura 25.</strong> Tipografía oficial utilizada en la identidad visual de VolunTrack.</p>

#### 4.1.1.2. Colores
La paleta de color no es solo una cuestión estética; es el alma visual de VolunTrack. Los colores elegidos giran en torno al color cian, utilizando diferentes variaciones de este, para que la experiencia sea no solo funcional, sino también emocionalmente significativa. Cada tono ha sido seleccionado con intención de transmitir los valores centrales de la plataforma: organización, confianza, energía positiva y empatía.

<p align="center">
  <img src="https://imgur.com/giFbySZ.png" alt="Colores" width="500">
</p>
<p align="center"><strong>Figura 26.</strong> Paleta cromática principal de VolunTrack basada en tonos de cian.</p>

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
<p align="center"><strong>Figura 27.</strong> Espaciado base de 50px aplicado en el Dashboard inicial.</p>

Espaciados con múltiplos de 5 (5px, 15px y 25px):

<p align="center">
  <img src="https://imgur.com/dtDoDIJ.png" alt="Es122" width="500">
</p>
<p align="center"><strong>Figura 28.</strong> Variaciones de espaciado en múltiplos de 5 píxeles: 5px, 15px y 25px.</p>


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
<p align="center"><strong>Figura 29.</strong> Vista del Dashboard de actividades de VolunTrack.</p>

*Sección de Mis Voluntarios*

<p align="center">
  <img src="https://imgur.com/UpNNBV3.png" alt="WBG2" width="500">
</p>
<p align="center"><strong>Figura 30.</strong> Sección “Mis Voluntarios” para la gestión de participantes.</p>

VolunTrack se estructura en dos pantallas principales para la gestión integral del voluntariado: el Dashboard de Actividades y la sección de Mis Voluntarios. El Dashboard de Actividades sirve como el centro neurálgico para la supervisión y la gestión operativa de las oportunidades de voluntariado, ofreciendo una visión panorámica de las actividades en curso y futuras. Por otro lado, la sección de Mis Voluntarios se enfoca en la gestión de la base de voluntarios de la organización, permitiendo visualizar perfiles, historial de participación y realizar acciones de comunicación y gestión específicas. Esta división en dos áreas principales responde a la necesidad de separar claramente la gestión de las actividades en sí de la gestión de las personas que participan en ellas, facilitando así un flujo de trabajo más organizado e intuitivo. Dentro de estas dos secciones principales, los coordinadores pueden llevar a cabo todas las acciones necesarias para la gestión integral de sus actividades de voluntariado, desde la creación y publicación de oportunidades hasta el seguimiento de la participación y la comunicación con los voluntarios.

## 4.2. Information Architecture
En esta sección, se detallan las decisiones fundamentales que guiarán la organización del contenido tanto en la web como en la aplicación móvil de VolunTrack. El objetivo primordial es asegurar que la estructura de la información, el etiquetado, la navegación y las funcionalidades de búsqueda permitan a visitantes y usuarios interactuar intuitivamente y encontrar la información deseada sin dificultad, facilitando así la adopción y el uso efectivo de la plataforma.

## 4.2.1. Organization Systems
Organization Systems Diagrams

<p align="center">
  <img src="https://imgur.com/2ghtdki.png" alt="OS1" width="500">
</p>
<p align="center"><strong>Figura 31.</strong> Diagrama del sistema organizacional de contenidos: vista general.</p>

<p align="center">
  <img src="https://imgur.com/yjxlwBV.png" alt="OS2" width="500">
</p>
<p align="center"><strong>Figura 32.</strong> Diagrama del sistema organizacional de contenidos: estructura detallada.</p>

En la definición de nuestros Organization Systems, hemos establecido una estrategia clara sobre cómo estructurar y presentar la información dentro de VolunTrack. La organización visual del contenido se adaptará al contexto específico de cada sección. Aplicaremos una jerarquía visual para destacar la información más relevante y guiar la atención del usuario, asegurando que los elementos cruciales sean fácilmente identificables. Para procesos que requieran múltiples pasos, como la creación de una nueva actividad, emplearemos una organización secuencial, presentando la información de manera lineal y lógica para facilitar la comprensión y la finalización de la tarea. Finalmente, una organización matricial podría utilizarse en la presentación de listados complejos, como la gestión de voluntarios con múltiples atributos, permitiendo a los usuarios explorar la información a través de diferentes dimensiones.

En cuanto a los esquemas de categorización del contenido, la elección se basará en la naturaleza de la información y las necesidades de los usuarios. Utilizaremos un esquema alfabético para facilitar la búsqueda y localización rápida de elementos específicos, como la lista de voluntarios. Un esquema cronológico será fundamental para presentar información sensible al tiempo, como el historial de participación o el calendario de actividades. La mayor parte del contenido se organizará por tópicos, agrupando la información relacionada para facilitar la exploración y el descubrimiento dentro de las secciones principales como el Dashboard de Actividades o Mis Voluntarios. Finalmente, consideraremos la audiencia para adaptar la presentación y el lenguaje en secciones específicas, asegurando que tanto los coordinadores de ONG como los voluntarios encuentren la información relevante y accesible.

### 4.2.2. Labeling Systems
En la definición de nuestros Labeling Systems, priorizamos la claridad y la concisión para asegurar una comprensión intuitiva de la información presentada en VolunTrack. Las etiquetas utilizadas para representar conjuntos de datos y sus asociaciones se han seleccionado cuidadosamente para ser directas y emplear el mínimo número de palabras posible, evitando la ambigüedad y reduciendo la carga cognitiva para los usuarios. Por ejemplo, al momento de seleccionar una actividad, se tienen las etiquetas “Detalles” e “Inscritos”, que transmiten al usuario perfectamente la distinción entre la información general y específica de la actividad y la sección dedicada a la gestión de los voluntarios que se han unido a ella.

<p align="center">
  <img src="https://imgur.com/1gSxiVc.png" alt="LSLSLS" width="500">
</p>
<p align="center"><strong>Figura 33.</strong> Etiquetas utilizadas para distinguir entre información general e inscritos por actividad.</p>

En los listados de voluntarios, los atributos clave se identifican con etiquetas breves y descriptivas como "Nombre", "Edad" o "Profesión".

<p align="center">
  <img src="https://imgur.com/hYvPZSb.png" alt="LSLSLS2" width="500">
</p>
<p align="center"><strong>Figura 34.</strong> Etiquetas clave en el listado de voluntarios como “Nombre”, “Edad” y “Profesión”.</p>

Buscamos establecer una correspondencia unívoca entre la etiqueta y el contenido que representa, manteniendo la coherencia en toda la interfaz web y móvil. Las acciones disponibles se etiquetan con verbos claros y orientados a la tarea, como "Crear", "Ver más", "Enviar Notificación" y "Marcar Asistencia". 

<p align="center">
  <img src="https://imgur.com/8wc2WqW.png" alt="LSLSLS3" width="500">
</p>
<p align="center"><strong>Figura 35.</strong> Etiquetas orientadas a tareas como “Crear”, “Ver más” o “Marcar Asistencia”.</p>

Para las agrupaciones de información relacionada, utilizamos títulos de sección concisos como "Dashboard de Actividades", "Mis Voluntarios" y "Mi Perfil". Este enfoque en la simplicidad y la precisión en el etiquetado busca minimizar la confusión, facilitar la navegación y permitir que los visitantes y usuarios identifiquen rápidamente la información y las funcionalidades que necesitan.

<p align="center">
  <img src="https://imgur.com/GDRvLEV.png" alt="LSLSLS4" width="500">
</p>
<p align="center"><strong>Figura 36.</strong> Títulos de sección como “Dashboard de Actividades”, “Mis Voluntarios” y “Mi Perfil”.</p>

### 4.2.3. SEO Tags and Meta Tags

<p align="center">
  <img src="https://imgur.com/PWrstqC.png" alt="SEO" width="500">
</p>
<p align="center"><strong>Figura 37.</strong> Metaetiquetas esenciales para responsividad y compatibilidad web.</p>

Estos metatags son esenciales para optimizar la visibilidad y la funcionalidad del landing page de VolunTrack. El <meta charset="UTF-8'> asegura la correcta codificación de caracteres, permitiendo la visualización adecuada de texto en diversos idiomas y símbolos. Los metatags <meta name="viewport" content="width=device-width, initial-scale=1.0'> son cruciales para la responsividad, garantizando que la página se adapte correctamente a diferentes tamaños de pantalla y dispositivos móviles, mejorando la experiencia del usuario. Los metatags <meta http-equiv="X-UA-Compatible" content="IE=edge'> y <meta http-equiv="X-UA-Compatible" content="ie=edge'> aseguran la compatibilidad con diferentes versiones de Internet Explorer, evitando problemas de visualización y funcionamiento. Finalmente, el <title>VolunTrack - Plataforma de Gestión de Voluntariado | HOME</title> define el título de la página, que es fundamental para el SEO (Optimización para Motores de Búsqueda) y la identificación de la página en las pestañas del navegador, mejorando la usabilidad y el posicionamiento de VolunTrack.

<p align="center">
  <img src="https://imgur.com/q7Y5In8.png" alt="SEO" width="500">
</p>
<p align="center"><strong>Figura 38.</strong> Título optimizado para SEO en el encabezado de la landing page.</p>

Estos metatags optimizan la página "Crear Nueva Actividad" de VolunTrack: el &lt;title&gt; y la &lt;meta name="description"&gt; mejoran el SEO y la comprensión de la página, la &lt;meta name="keywords"&gt; aumenta la visibilidad en búsquedas y la &lt;meta name="author"&gt; atribuye la creación al equipo de desarrollo.

### 4.2.4. Searching Systems

En la sección de Voluntarios Inscritos a una Actividad, implementaremos una barra de búsqueda que permitirá a los coordinadores encontrar rápidamente a un voluntario específico dentro de la lista de inscritos. Esta búsqueda se realizará principalmente por nombre. Los resultados de la búsqueda se actualizarán dinámicamente en la lista de voluntarios inscritos, resaltando el nombre del voluntario encontrado.

<p align="center">
  <img src="https://imgur.com/OucbV8S.png" alt="ss1" width="500">
</p>
<p align="center"><strong>Figura 39.</strong> Búsqueda dinámica en la lista de voluntarios inscritos a una actividad.</p>

De manera similar, en la sección principal de "Mis Voluntarios", se dispone de una barra de búsqueda para localizar voluntarios en toda la base de datos de la ONG. La búsqueda principal se realizará por nombre y correo electrónico. Para refinar la búsqueda, se ofrecen diversos filtros

Los resultados de la búsqueda se mostrarán en la tabla de la lista de voluntarios, manteniendo las columnas informativas relevantes (Nombre, Edad, Profesión, etc.). La barra de búsqueda incluye funcionalidad de autocompletado para nombres y correos electrónicos registrados, facilitando la rapidez y precisión de la búsqueda. Al igual que en otras secciones con listados, se implementará paginación para gestionar grandes volúmenes de voluntarios.

<p align="center">
  <img src="https://imgur.com/xBBksbx.png" alt="ss2" width="500">
</p>
<p align="center"><strong>Figura 40.</strong> Barra de búsqueda con autocompletado y filtros en la sección Mis Voluntarios.</p>

El objetivo de estos sistemas de búsqueda centrados en voluntarios es permitir a los coordinadores encontrar y gestionar la información de los voluntarios de manera eficiente, ya sea dentro del contexto de una actividad específica o en la gestión general de su base de datos.

### 4.2.5. Navigation Systems

<p align="center">
  <img src="https://imgur.com/v84fLNS.png" alt="ns1" width="500">
</p>
<p align="center"><strong>Figura 41.</strong> Menú superior de la landing page con jerarquía visual clara y botón de acción destacado.</p>

El menú superior del landing page de VolunTrack está diseñado para proporcionar una navegación clara e intuitiva, guiando a los usuarios hacia las secciones clave de información y acción. La estructura del menú se basa en una jerarquía simple y lógica, con etiquetas concisas que representan categorías de contenido fácilmente comprensibles para el usuario. La ubicación destacada del botón "ÚNETE" invita a la acción principal, facilitando a los usuarios el inicio del registro o la exploración de la plataforma. La consistencia en el diseño visual del menú, incluyendo la tipografía, el espaciado y los colores, contribuye a una experiencia de usuario coherente y profesional. Además, la disposición horizontal del menú es un patrón común y esperado, lo que reduce la carga cognitiva y permite a los usuarios encontrar rápidamente la información que buscan.

<p align="center">
  <img src="https://imgur.com/fLEJqNi.png" alt="ns2" width="500">
</p>
<p align="center"><strong>Figura 42.</strong> Menú superior de la aplicación VolunTrack con estructura funcional y consistente.</p>

El menú superior de la aplicación VolunTrack mantiene una estructura y filosofía de diseño similar al menú del landing page, priorizando la claridad y la eficiencia en la navegación. Al igual que en la página principal, se emplean etiquetas concisas y fácilmente comprensibles para representar las secciones funcionales clave de la aplicación.

<p align="center">
  <img src="https://imgur.com/Cp6SEdr.png" alt="ns3" width="500">
</p>
<p align="center"><strong>Figura 43.</strong> Vista del dashboard con widgets y accesos rápidos a secciones clave.</p>

El dashboard de VolunTrack organiza la información y las funciones principales de la aplicación para facilitar la navegación y la interacción eficiente del usuario. Al presentar una visión general estructurada mediante widgets, se prioriza la información clave y se proveen accesos directos a las acciones más comunes, como la gestión de actividades o la visualización de voluntarios. La jerarquía visual, establecida mediante encabezados claros y el agrupamiento lógico de la información, guía al usuario a través del contenido, permitiéndole identificar rápidamente las áreas de interés y las tareas pendientes. La disposición de los elementos y la inclusión de botones de acción estratégicamente ubicados buscan minimizar el esfuerzo cognitivo y optimizar el flujo de trabajo, asegurando que los usuarios puedan alcanzar sus objetivos de manera intuitiva y satisfactoria.

<p align="center">
  <img src="https://imgur.com/NBgt1FC.png" alt="ns4" width="500">
</p>
<p align="center"><strong>Figura 44.</strong> Segmentación por pestañas “Detalles” e “Inscritos” dentro de una actividad.</p>

Los botones "Detalles" e "Inscritos" funcionan como un sistema de navegación segmentado dentro de la vista de una actividad, permitiendo a los usuarios cambiar entre dos tipos de información relevante. Esta segmentación organiza la información en categorías claras y distintas, evitando la sobrecarga cognitiva y facilitando la búsqueda de información específica. 

## 4.3. Landing Page UI Design

### 4.3.1. Landing Page Wireframes

* Wireframe de la sección Home

<p align="center">
  <img src="https://imgur.com/WYRKUPm.png" alt="LDW1" width="500">
</p>
<p align="center"><strong>Figura 45.</strong> Wireframe de la sección Home.</p>

El wireframe presenta una estructura limpia con un titular principal y texto de apoyo en la parte superior, seguido de dos botones de acción clave. El diseño general busca una jerarquía visual clara para guiar al usuario.

* Wireframe de la sección Planes

<p align="center">
  <img src="https://imgur.com/stQvGXQ.png" alt="LDW2" width="500">
</p>
<p align="center"><strong>Figura 46.</strong> Wireframe de la sección Planes.</p>

El wireframe de "Planes" muestra tres columnas distintas, cada una representando un plan de suscripción con un título, una breve descripción de sus características y un botón de suscripción. La disposición busca facilitar la comparación directa de las diferentes ofertas.

* Wireframe de la sección FAQ

<p align="center">
  <img src="https://imgur.com/7jVYYfL.png" alt="LDW3" width="500">
</p>
<p align="center"><strong>Figura 47.</strong> Wireframe de la sección FAQ – Parte 1.</p>

<p align="center">
  <img src="https://imgur.com/ZfHdD8Q.png" alt="LDW4" width="500">
</p>
<p align="center"><strong>Figura 48.</strong> Wireframe de la sección FAQ – Parte 2.</p>

El wireframe de "Preguntas Frecuentes" presenta un título principal seguido de una pregunta destacada y su respuesta. Debajo, se listan otras preguntas con un formato que sugiere que las respuestas se mostrarán al interactuar con ellas. A la izquierda, se observan placeholders para elementos visuales complementarios.

* Wireframe de la sección Contáctanos

<p align="center">
  <img src="https://imgur.com/AWZipmv.png" alt="LDW5" width="500">
</p>
<p align="center"><strong>Figura 49.</strong> Wireframe de la sección Contáctanos.</p>

El wireframe de "Contáctanos" muestra un formulario a la derecha para que los usuarios envíen mensajes, precedido por un breve texto introductorio. A la izquierda, se observa un placeholder para un elemento visual. En la parte inferior, hay placeholders para información de contacto adicional.

* Wireframe de la sección Nuestro Equipo

<p align="center">
  <img src="https://imgur.com/Ihh80CQ.png" alt="LDW6" width="500">
</p>
<p align="center"><strong>Figura 50.</strong> Wireframe de la sección Nuestro Equipo.</p>

El wireframe de "Nuestro Equipo" presenta una disposición en cuadrícula con placeholders para fotografías de los miembros del equipo, debajo de cada uno con espacio para su nombre y su rol.

* Wireframe del Footer

<p align="center">
  <img src="https://imgur.com/ZZoSi9v.png" alt="LDW7" width="500">
</p>
<p align="center"><strong>Figura 51.</strong> Wireframe del Footer.</p>

El wireframe del footer muestra el logo y una breve descripción de VolunTrack a la izquierda, enlaces de navegación en el centro y placeholders para los logos de clientes que confían en la plataforma a la derecha, junto con iconos de redes sociales.

### 4.3.2. Landing Page Mock-ups

<p align="center">
  <img src="https://imgur.com/PnaDJ9u.png" alt="LDMU1" width="500">
</p>
<p align="center"><strong>Figura 52.</strong> Mock-up de la pantalla de inicio de VolunTrack.</p>

La pantalla de inicio de VolunTrack presenta de inmediato su propuesta de valor con un titular llamativo y un subtítulo conciso, comunicando el beneficio principal para las ONGs. La imagen de fondo, con manos de diversos colores elevándose, busca conectar emocionalmente con el usuario y transmitir la idea de colaboración e impacto colectivo. La ubicación prominente de los botones de llamada a la acción guía al usuario hacia los siguientes pasos lógicos: registrarse o solicitar más información. El menú de navegación superior es claramente visible y ofrece acceso directo a las secciones clave del sitio, facilitando la exploración de la plataforma. La combinación de elementos textuales y visuales busca captar la atención del visitante y comunicar de manera efectiva el propósito y los beneficios de VolunTrack desde el primer contacto.

<p align="center">
  <img src="https://imgur.com/51oJTv8.png" alt="LDMU2" width="500">
</p>
<p align="center"><strong>Figura 53.</strong> Mock-up de la sección Sobre Nosotros.</p>

La sección "Sobre Nosotros" busca establecer la identidad y los valores de VolunTrack, comenzando con un titular que destaca su propuesta de valor diferencial. Un breve párrafo explica la misión de la plataforma, enfocándose en la creación de comunidades y la conexión entre ONGs y voluntarios. Se utilizan elementos visuales impactantes, como un collage de imágenes que representan la diversidad y el impacto del voluntariado, para conectar emocionalmente con el usuario y reforzar el mensaje. 

<p align="center">
  <img src="https://imgur.com/TZTswhp.png" alt="LDMU3" width="500">
</p>
<p align="center"><strong>Figura 54.</strong> Mock-up de la sección Planes.</p>

La pantalla de "Planes" presenta las opciones de suscripción de manera clara y comparativa, guiando al usuario a través del proceso de selección. La información se organiza en tarjetas o columnas distintas para cada plan, lo que facilita la comparación de características y precios. Se utiliza una jerarquía visual para destacar los elementos más importantes, como el precio y el botón de llamada a la acción, atrayendo la atención del usuario hacia la conversión. La pantalla emplea un lenguaje conciso y descriptivo para explicar los beneficios de cada plan, y utiliza elementos visuales como íconos o marcas de verificación para resaltar las funcionalidades clave. La disposición de los planes y la información sigue un flujo lógico, desde las opciones más básicas hasta las más avanzadas, permitiendo al usuario tomar una decisión informada y segura.

<p align="center">
  <img src="https://imgur.com/IMmN3qj.png" alt="LDMU4" width="500">
</p>
<p align="center"><strong>Figura 55.</strong> Mock-up inicial de la sección Preguntas Frecuentes.</p>

La sección inicial de Preguntas Frecuentes facilita la búsqueda rápida de información mediante una presentación clara y estructurada. El título "Preguntas Frecuentes" indica directamente el contenido, y el subtítulo "¿Cómo Podemos Ayudarte?" orienta al usuario hacia la utilidad del recurso. Una breve introducción contextualiza la información que se ofrece. Las preguntas se muestran como elementos seleccionables, diseñados para expandirse y mostrar las respuestas, lo que permite un escaneo veloz de los temas y evita la sobrecarga de texto. La diferenciación visual de las preguntas mediante su formato las distingue claramente de las respuestas. Imágenes relevantes complementan el texto, manteniendo el interés del usuario. El diseño general es limpio y espacioso, lo que favorece la legibilidad y la comprensión.

<p align="center">
  <img src="https://imgur.com/Yuz4HnB.png" alt="LDMU5" width="500">
</p>
<p align="center"><strong>Figura 56.</strong> Mock-up inicial de la sección Preguntas Frecuentes – Parte 1.</p>

La segunda sección de la página de Preguntas Frecuentes continúa facilitando el acceso a información relevante mediante una estructura clara y directa. Cada pregunta se presenta de forma individual, con un formato que permite expandir la respuesta al hacer clic. Se mantiene la coherencia visual con la sección anterior, utilizando un diseño limpio y suficiente espacio en blanco para mejorar la legibilidad. 

<p align="center">
  <img src="https://imgur.com/UZ0ldi5.png" alt="LDMU6" width="500">
</p>
<p align="center"><strong>Figura 57.</strong> Mock-up de la sección Preguntas Frecuentes – Parte 2.</p>

La sección "Contáctanos" está diseñada para facilitar la comunicación entre los usuarios y VolunTrack. Un formulario de contacto ocupa el espacio derecho, mientras que el izquierdo tiene el logo como refuerzo de marca. permitiendo a los usuarios enviar consultas específicas de manera directa. La estructura de la sección organiza claramente las diferentes opciones.

<p align="center">
  <img src="https://imgur.com/jNMab0X.png" alt="LDMU7" width="500">
</p>
<p align="center"><strong>Figura 58.</strong> Mock-up de la sección Contáctanos – Parte 1.</p>

La continuación de la sección "Contáctanos" proporciona información de contacto adicional organizada de forma clara y accesible. Se presentan tres métodos principales: teléfono, correo electrónico y dirección de oficina, cada uno acompañado de un icono distintivo para facilitar su identificación visual. La información de cada método se muestra de manera concisa y legible, permitiendo a los usuarios encontrar rápidamente los detalles que necesitan. La inclusión de un mapa interactivo de Google Maps en la parte inferior ofrece una referencia visual de la ubicación de la oficina, facilitando la planificación de visitas presenciales. La disposición de los elementos en columnas y el uso de iconos ayudan a estructurar la información y a reducir la carga cognitiva, permitiendo a los usuarios elegir el método de contacto más conveniente de manera intuitiva.

<p align="center">
  <img src="https://imgur.com/QcKTytN.png" alt="LDMU8" width="500">
</p>
<p align="center"><strong>Figura 59.</strong> Mock-up de la sección Contáctanos – Parte 2.</p>

La sección "Nuestro Equipo" presenta a los miembros del equipo de VolunTrack de una manera visual y organizada. Cada miembro se identifica con una fotografía clara y un breve texto que incluye su nombre y rol dentro del proyecto. La disposición de las fotos en una cuadrícula facilita la visualización y el escaneo de los diferentes integrantes. El uso de etiquetas de color distintivas debajo de cada foto ayuda a diferenciar visualmente a los miembros y a categorizarlos por área de especialización. Este diseño busca generar confianza y transparencia al mostrar el lado humano del proyecto de forma accesible y directa.

<p align="center">
  <img src="https://imgur.com/LNKoyCn.png" alt="LDMU9" width="500">
</p>
<p align="center"><strong>Figura 60.</strong> Mock-up de la sección Nuestro Equipo.</p>

Esta sección, ubicada estratégicamente cerca del final de las pantallas, busca generar confianza y credibilidad al mostrar logotipos de organizaciones que aparentemente utilizan VolunTrack. El título "¿Quién confía en VolunTrack?" plantea una pregunta directa que se responde visualmente con los logos de diversas entidades. La disposición horizontal de los logos permite un escaneo rápido y fácil de las marcas asociadas. 

<p align="center">
  <img src="https://imgur.com/oX9HJPw.png" alt="LDMU10" width="500">
</p>
<p align="center"><strong>Figura 61.</strong> Mock-up de logotipos de organizaciones aliadas en VolunTrack.</p>

El pie de página de VolunTrack organiza información relevante y enlaces de interés de forma concisa y accesible. La sección "Links rápidos" ofrece una navegación alternativa a las secciones principales del sitio, facilitando el acceso directo a información clave. La sección "Clientes que confían en nosotros" refuerza la credibilidad al mostrar visualmente los logos de organizaciones que utilizan la plataforma. Además, se incluye un breve texto descriptivo de VolunTrack y enlaces a redes sociales, proporcionando contexto y extendiendo la presencia de la marca. La disposición de los elementos en columnas facilita la lectura y el escaneo, permitiendo a los usuarios encontrar rápidamente la información que buscan o conectar con VolunTrack en diferentes canales.

## 4.4. Web Applications UX/UI Design

### 4.4.1. Web Applications Wireframes

<p align="center">
  <img src="https://imgur.com/1cV72ZZ.png" alt="WAW1" width="500">
</p>
<p align="center"><strong>Figura 62.</strong> Wireframe del Dashboard de actividades.</p>

El primer wireframe de VolunTrack corresponde a la pantalla principal de la plataforma. En la parte superior se ubica una barra de navegación que integra el logo y accesos directos al Dashboard, la sección de voluntarios, las notificaciones y el perfil personal. En el área central se despliega el "Dashboard de Actividades", donde se listan las diversas oportunidades de voluntariado que ofrece el sistema.

<p align="center">
  <img src="https://imgur.com/Iz0uSHa.png" alt="WAW2" width="500">
</p>
<p align="center"><strong>Figura 63.</strong> Wireframe de la vista detallada de una actividad.</p>

El presente wireframe muestra la información de una actividad de voluntariado seleccionada de la anterior pantalla, dividida en la descripción, instrucciones y propósito de esta.

<p align="center">
  <img src="https://imgur.com/Ahb8PwG.png" alt="WAW3" width="500">
</p>
<p align="center"><strong>Figura 64.</strong> Wireframe de la lista de voluntarios inscritos en una actividad.</p>

Al presionar el botón “Inscritos”, se visualiza una pantalla donde se presenta una lista de los voluntarios registrados en la actividad. Asimismo, en el lado izquierdo se encuentran cuatro botones con diferentes funcionalidades con relación al evento de voluntariado. En el lado derecho se encuentra el voluntario seleccionado de la lista central.

<p align="center">
  <img src="https://imgur.com/kXqrmRt.png" alt="WAW4" width="500">
</p>
<p align="center"><strong>Figura 65.</strong> Wireframe del formulario de creación de actividades.</p>

El presente wireframe muestra la pantalla de creación de eventos de voluntariado, donde el usuario tendrá que llenar diferentes apartados para finalizar la entrada de datos.

<p align="center">
  <img src="https://imgur.com/6PGyp0Q.png" alt="WAW5" width="500">
</p>
<p align="center"><strong>Figura 66.</strong> Wireframe del calendario mensual de actividades.</p>

Esta pantalla muestra el calendario de las actividades mensuales de la asociación de voluntariado.

<p align="center">
  <img src="https://imgur.com/FZyOzxq.png" alt="WAW6" width="500">
</p>
<p align="center"><strong>Figura 67.</strong> Wireframe de la sección "Mis Voluntarios".</p>

Accediendo a "Mis Voluntarios" desde el menú principal, se accede a la pantalla reflejada en el sexto wireframe. La interfaz divide la información en bloques: estadísticas generales de los voluntarios, listado detallado de usuarios (con nombre, edad y profesión), perfil ampliado del voluntario seleccionado y un historial de las actividades en las que ha participado.

<p align="center">
  <img src="https://imgur.com/dzIe7ln.png" alt="WAW7" width="500">
</p>
<p align="center"><strong>Figura 68.</strong> Wireframe de gestión del perfil del coordinador de ONG.</p>

El séptimo wireframe corresponde a la gestión de perfil del líder o coordinador de la ONG. Accediendo mediante el segundo ícono ubicado en la esquina superior derecha, se despliega la información personal, la descripción de la organización y configuraciones de cuenta, permitiendo personalizar la experiencia de uso.

<p align="center">
  <img src="https://imgur.com/6vAEngk.png" alt="WAW8" width="500">
</p>
<p align="center"><strong>Figura 69.</strong> Wireframe del sistema de notificaciones.</p>

En este wireframe se visualiza el sistema de notificaciones. Al presionar el primer ícono de la barra superior, se abre un panel lateral donde se enlistan todas las alertas relevantes para el usuario, facilitando el monitoreo de actividades y comunicaciones importantes.

<p align="center">
  <img src="https://imgur.com/uDBsM90.png" alt="WAW9" width="500">
</p>
<p align="center"><strong>Figura 70.</strong> Wireframe final de la interfaz del sistema VolunTrack.</p>

Por último, se puede apreciar la pantalla de acceso a la plataforma. El usuario puede iniciar sesión mediante su Email y contraseña o crear una nueva cuenta.

### 4.4.2. Web Applications Wireflow Diagrams
**Wireflow #1**

Como usuario, quiero crear una actividad de voluntariado nueva y quiero visualizar los detalles más importantes de esta.

*Task Flow:*

<p align="center">
  <img src="https://imgur.com/U7sUKSh.png" alt="TF1" width="500">
</p>
<p align="center"><strong>Figura 71.</strong> Task Flow – Crear y visualizar detalles de una actividad.</p>

*Wireflow:*

<p align="center">
  <img src="https://imgur.com/udAXA5Z.png" alt="WF1" width="500">
</p>
<p align="center"><strong>Figura 72.</strong> Wireflow – Crear y visualizar detalles de una actividad.</p>

Para poder crear una actividad o ver las existentes, se debe seguir un conjunto de pasos. Primero, es vital que el usuario inicie sesión con su cuenta registrada. Continuamente, aparecerá en la pantalla principal de VolunTrack, es decir, el dashboard de actividades. En este, se pueden visualizar los eventos creados previamente por el usuario. Al seleccionar uno de ellos a través del botón “Ver Más”, se mostrarán los detalles de aquel. 

Asimismo, si se desea crear una nueva actividad, encima del dashboard, en la parte derecha, se encuentra el botón de “Crear”, el cual permitirá esta acción. Al presionarlo, aparecerá un formulario con campos relevantes para la creación de la actividad; es necesario llenarlos todos para continuar. Al finalizar, aparecerá la nueva actividad con los detalles colocados.

**Wireflow #2**

Como usuario, quiero ver detalles sobre mis colaboradores, así como la cantidad de nuevos voluntarios que se han inscrito en mi organización.

*Taskflow:*

<p align="center">
  <img src="https://imgur.com/FgJ6OPq.png" alt="TF2" width="500">
</p>
<p align="center"><strong>Figura 73.</strong> Task Flow – Visualizar voluntarios y nuevos ingresos.</p>

*Wireflow:*

<p align="center">
  <img src="https://imgur.com/0xJUIx9.png" alt="WF2" width="500">
</p>
<p align="center"><strong>Figura 74.</strong> Wireflow – Visualizar voluntarios y nuevos ingresos.</p>

Para ver detalles sobre los voluntarios y la cantidad de nuevos ingresos, se debe, en primer lugar, iniciar sesión en VolunTrack con credenciales previamente establecidas. Al realizar esta acción, se presentará la pantalla principal de la plataforma, el dashboard de actividades. En el encabezado, que se encuentra en la parte superior, se debe apretar el enlace “Mis Voluntarios”. Este llevará al usuario a la sección de voluntarios de su organización, en la cual podrá ver detalles e información sobre ellos, así como la cantidad de nuevos ingresos. 

Por otro lado, VolunTrack mandará notificaciones al usuario sobre su progreso y su estado. Un tipo de notificación es la felicitación por la cantidad de nuevos ingresos. Desde cualquier sección de la plataforma, al hacer clic en el enlace con el ícono de campana, se podrá acceder a las notificaciones que le llegan al usuario. Al presionar en aquella sobre la cantidad de ingresos, el sistema llevará al usuario a la sección de sus voluntarios, en la cual verá la información proporcionada en la notificación.

**Wireflow #3**

Como usuario, quiero pasar asistencia y emitir certificados para los voluntarios que han asistido a una de las actividades.

*Taskflow:*

<p align="center">
  <img src="https://imgur.com/wolS9u6.png" alt="TF3" width="500">
</p>
<p align="center"><strong>Figura 75.</strong> Task Flow – Pasar asistencia y emitir certificados.</p>

*Wireflow:*

<p align="center">
  <img src="https://imgur.com/bincdvb.png" alt="WF3" width="500">
</p>
<p align="center"><strong>Figura 76.</strong> Wireflow – Pasar asistencia y emitir certificados.</p>

Para que un usuario pase asistencia y emita certificados en VolunTrack debe empezar por el inicio de sesión en la plataforma, con su correo y contraseña registrada. Luego, desde el "Dashboard de Actividades", el usuario selecciona la actividad correspondiente. Al ingresar a los detalles de la actividad, accede a la sección de "Inscritos", donde puede visualizar la lista de voluntarios registrados. Desde esta pantalla, el usuario puede marcar quiénes asistieron a la actividad y, posteriormente, emitir los certificados para aquellos voluntarios que cumplieron con su participación. Además, hay otras opciones de gestión que puede realizar el usuario, según sea su necesidad.

Para mejor visualización de los Wireflows de VolunTrack, acceder al siguiente link: https://lucid.app/lucidchart/6d203d95-a99b-42f5-89a4-18abdc85c7a8/edit?viewport_loc=-4179%2C-3628%2C29871%2C13885%2C0_0&invitationId=inv_030ec1fa-a7fe-46c5-a660-10386174a01b 

### 4.4.3. Web Applications Mock-up

<p align="center">
  <img src="https://imgur.com/zXEmnVs.png" alt="WAM1" width="500">
</p>
<p align="center"><strong>Figura 77.</strong> Mock-up de la pantalla principal del dashboard de actividades.</p>

El primer mockup de Voluntrack muestra la pantalla de inicio de la plataforma. En la parte superior se aprecia un encabezado donde aparecen el logo y accesos rápidos al “Dashboard”, “Mis Voluntarios”, a las notificaciones y al perfil del usuario. El centro de la página contiene el “Dashboard de Actividades”, en el cual se encuentran las oportunidades de voluntariado que ofrece la aplicación.

<p align="center">
  <img src="https://imgur.com/cjcW4qS.png" alt="WAM2" width="500">
</p>
<p align="center"><strong>Figura 78.</strong> Mock-up de la vista de detalles de una actividad seleccionada.</p>

Al presionar el botón “VER MÁS”, se podrá apreciar la segunda pantalla de la aplicación. La sección “Detalles” ofrece información completa sobre el evento o actividad de voluntariado seleccionada: descripción extensa, instrucciones, propósito, ubicación y la fecha en la cual se realizará.

<p align="center">
  <img src="https://imgur.com/MPb1l3Q.png" alt="WAM3" width="500">
</p>
<p align="center"><strong>Figura 79.</strong> Mock-up de la sección de voluntarios inscritos en una actividad.</p>

El tercer mockup corresponde a la sección de “Inscritos”. En la parte izquierda de la pantalla se muestran cuatro botones: “Enviar Notificación”, “Marcar Asistencia”, “Crear Certificados”, “Abrir Inscripciones”, cada uno con su respectiva funcionalidad. En el centro se aprecia una lista de los voluntarios inscritos a la actividad. En la parte derecha de la pantalla se muestra el perfil del voluntario seleccionado en la lista, con la posibilidad de marcar su asistencia y cambiar el estado de inscripción.

<p align="center">
  <img src="https://imgur.com/LXgsrPl.png" alt="WAM4" width="500">
</p>
<p align="center"><strong>Figura 80.</strong> Mock-up del formulario de creación de actividades.</p>

Luego de presionar el botón “+ Crear” de la pantalla principal, el usuario se dirige a un formulario de creación de actividades o eventos de voluntariado dividido en campos básicos como título, fecha, dirección, instrucciones y propósito. En la parte izquierda se encuentra un botón de “Adjuntar archivo”, con el cual se podrán adjuntar hasta un máximo de 4 imágenes. 

<p align="center">
  <img src="https://imgur.com/YHuk76R.png" alt="WAM5" width="500">
</p>
<p align="center"><strong>Figura 81.</strong> Mock-up del calendario de actividades mensuales.</p>

Luego de presionar el botón “Calendario” de la pantalla principal, se podrán visualizar todas las actividades de voluntariado creadas por el usuario en cada mes del año.

<p align="center">
  <img src="https://imgur.com/dM4NBu3.png" alt="WAM6" width="500">
</p>
<p align="center"><strong>Figura 82.</strong> Mock-up de la sección “Mis Voluntarios”.</p>

Al presionar “Mis Voluntarios” de la página principal, se aprecia una pantalla dividida en secciones. La primera sección contiene las métricas de los voluntarios inscritos en tus actividades. En la segunda sección, se observa una lista de todos tus voluntarios, mostrando su nombre, edad y profesión. La tercera sección muestra al voluntario seleccionado en la lista anteriormente mencionada. La cuarta sección contiene el historial de las actividades anteriormente realizadas.

<p align="center">
  <img src="https://imgur.com/g5vSzDF.png" alt="WAM7" width="500">
</p>
<p align="center"><strong>Figura 83.</strong> Mock-up del perfil del líder o coordinador de ONG.</p>

Al presionar el segundo ícono ubicado en la esquina superior derecha, el usuario se redirigirá a la pantalla de “Mi Perfil”, en el cual se encuentra toda la información personal, descripción y configuración de la asociación de voluntariado.

<p align="center">
  <img src="https://imgur.com/8G8kvF4.png" alt="WAM8" width="500">
</p>
<p align="center"><strong>Figura 84.</strong> Mock-up del sistema de notificaciones del usuario.</p>

Al presionar el primer ícono ubicado en la esquina superior derecha, se desplegará una sección en la parte derecha de la pantalla, en el cual se muestran todas las notificaciones posibles.

<p align="center">
  <img src="https://imgur.com/hRDHl7I.png" alt="WAM9" width="500">
</p>
<p align="center"><strong>Figura 85.</strong> Mock-up del formulario de inicio de sesión de VolunTrack.</p>

El último mockup corresponde al formulario de inicio de sesión de VolunTrack. En esta pantalla, el usuario puede iniciar sesión utilizando su cuenta de Google o Apple. Además, en la parte inferior se encuentra un botón destacado que invita a los nuevos usuarios a "Crear Cuenta", facilitando así tanto el acceso rápido como el registro dentro de la plataforma.

### 4.4.4. Web Applications User Flow Diagrams

**Userflow #1**

Como usuario, quiero crear una actividad de voluntariado nueva y quiero visualizar los detalles más importantes de esta.

<p align="center">
  <img src="https://imgur.com/QsqsgEO.png" alt="UF1" width="500">
</p>
<p align="center"><strong>Figura 86.</strong> Userflow de creación y visualización de actividades de voluntariado.</p>

**Userflow #2**

Como usuario, quiero ver detalles sobre mis colaboradores, así como la cantidad de nuevos voluntarios que se han inscrito en mi organización.

<p align="center">
  <img src="https://imgur.com/eU7S8E0.png" alt="UF2" width="500">
</p>
<p align="center"><strong>Figura 87.</strong> Userflow para consultar detalles de colaboradores y nuevos voluntarios.</p>

**Userflow #3**

Como usuario, quiero pasar asistencia y emitir certificados para los voluntarios que han asistido a una de las actividades.

<p align="center">
  <img src="https://imgur.com/FP7dWFc.png" alt="UF3" width="500">
</p>
<p align="center"><strong>Figura 88.</strong> Userflow para pasar asistencia y emitir certificados a voluntarios.</p>

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
<p align="center"><strong>Figura 89.</strong> Diagrama de contexto de la arquitectura de software.</p>

### 4.6.2. Software Architecture Container Diagram

<p align="center">
  <img src="https://imgur.com/54gnZXo.png" alt="ContainerD" width="500">
</p>
<p align="center"><strong>Figura 90.</strong> Diagrama de contenedores de la arquitectura de software.</p>

### 4.6.3. Software Architecture Components Diagram

<p align="center">
  <img src="https://imgur.com/16VhhFW.png" alt="ComponentsD" width="500">
</p>
<p align="center"><strong>Figura 91.</strong> Diagrama de componentes de la arquitectura de software.</p>

## 4.7. Software Object-Oriented Design
### 4.7.1. Class Diagram

<p align="center">
  <img src="https://imgur.com/RvZpsav.png" alt="Class" width="500">
</p>
<p align="center"><strong>Figura 92.</strong> Diagrama de clases del sistema VolunTrack.</p>

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
  <img src="https://github.com/user-attachments/assets/56aae29b-331c-4b6e-aeff-3cd495aa5862" alt="Database" width="500">
</p>
<p align="center"><strong>Figura 93.</strong> Diagrama de la base de datos de VolunTrack.</p>

# CAPÍTULO 5: PRODUCT IMPLEMENTATION & DEPLOYMENT

## 5.1. Software Configuration Management

La Gestión de Configuración de Software (SCM) cumple una función clave en el desarrollo de software, ya que garantiza el control y la coherencia de las versiones y configuraciones a lo largo de todo el ciclo de vida del producto. Según Configu Editorial Team (2024), esta práctica favorece una colaboración fluida entre los equipos, simplifica la administración de cambios complejos y asegura que todos los participantes trabajen en un entorno estandarizado y sincronizado.

### 5.1.1. Software Development Environment Configuration
**Tabla 31. Herramientas utilizadas para la configuración del entorno de desarrollo de software.**

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
<p align="center"><strong>Figura 94.</strong> Ejemplo de espaciado e indentación del código en VolunTrack.</p>

Nomenclatura

Los nombres de archivos, variables, funciones y clases se escribirán en inglés, favoreciendo la colaboración en entornos internacionales. Se usará minúsculas y, cuando sea necesario separar palabras, se emplearán guiones en lugar de espacios. Esta práctica promueve la claridad, la consistencia y un mantenimiento más sencillo del código, además de facilitar la comprensión entre los distintos miembros del equipo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/cda652f4-a032-43ba-853f-95afbde0cc6f" alt="Nomenclatura">
</p>
<p align="center"><strong>Figura 95.</strong> Convención de nomenclatura para archivos y variables en el proyecto.</p>

Comentarios

Los comentarios en el código de VolunTrack se utilizarán con propósito y mesura. Servirán para explicar lógica compleja, justificar decisiones de diseño o indicar tareas pendientes, pero siempre de forma concisa, clara y en inglés. Se evitarán comentarios redundantes o innecesarios que simplemente repitan lo que ya es evidente en el código. Se fomentará el uso de comentarios estructurados, especialmente en funciones extensas o con lógica crítica, para aportar contexto real y valor adicional.

<p align="center">
  <img src="https://github.com/user-attachments/assets/bb41129b-0724-4061-a890-abbc4281c629" alt="Comentarios">
</p>
<p align="center"><strong>Figura 96.</strong> Ejemplo de uso apropiado de comentarios dentro del código fuente.</p>

Commits

Los mensajes de commit deberán seguir una estructura estandarizada que permita rastrear fácilmente los cambios realizados. Cada mensaje será breve, descriptivo, escrito en inglés y en tiempo presente (por ejemplo: “Add volunteer sign-up form”, “Fix login validation bug”). Se recomienda comenzar con un verbo que exprese claramente la acción realizada, evitando términos genéricos como "update" sin detalles. En commits más extensos, puede añadirse un cuerpo explicativo. Esta convención contribuye a un historial de cambios claro, útil tanto para el equipo actual como para futuros colaboradores.

<p align="center">
  <img src="https://github.com/user-attachments/assets/5806024c-94e4-4898-8bd2-d6f72253afc5" alt="Commits">
</p>
<p align="center"><strong>Figura 97.</strong> Formato estandarizado para mensajes de commits en VolunTrack.</p>

### 5.1.4. Software Deployment Configuration

Para el despliegue de nuestra landing page hemos utilizado github. A continuación daré los pasos a seguir para el despliegue:

Primero vamos a nuestro repositorio 

<p align="center">
  <img src="https://github.com/user-attachments/assets/2846fce1-b78a-41c5-8657-d5284fff2cc4" alt="Primer paso">
</p>
<p align="center"><strong>Figura 98.</strong> Paso 1: Acceso al repositorio de GitHub para iniciar el despliegue.</p>

Nos vamos a settings

<p align="center">
  <img src="https://github.com/user-attachments/assets/8e1d90fc-d8cb-41fe-95e8-d57e65e96dfb" alt="Segundo paso">
</p>
<p align="center"><strong>Figura 99.</strong> Paso 2: Ingreso a la pestaña "Settings" del repositorio.</p>

Damos click en pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c6ec11b-65a1-4683-b19d-0864a579036e" alt="Tercer paso">
</p>
<p align="center"><strong>Figura 100.</strong> Paso 3: Acceso a la sección "Pages" dentro de los ajustes.</p>

Nos aseguramos que el source sea “Deploy from a branch”. Escogemos la rama que vamos a desplegar, en nuestro caso la rama main, escogemos el root y le damos a guardar

<p align="center">
  <img src="https://github.com/user-attachments/assets/ff1c6980-359d-4ff3-8399-116b2461fb9f" alt="Cuarto paso">
</p>
<p align="center"><strong>Figura 101.</strong> Paso 4: Selección de rama y carpeta raíz para desplegar el sitio.</p>

Volvemos a code y veremos un punto amarillo

<p align="center">
  <img src="https://github.com/user-attachments/assets/f7eaf141-5a05-4f63-b34b-ded6620f6d78" alt="Cuarto paso">
</p>
<p align="center"><strong>Figura 102.</strong> Paso 5: Indicador del estado de despliegue dentro de la pestaña "Code".</p>

Damos click y después click a details

<p align="center">
  <img src="https://github.com/user-attachments/assets/e270dec3-585f-4ad5-9263-b6b8511c99ff" alt="Quinto paso">
</p>
<p align="center"><strong>Figura 103.</strong> Paso 6: Acceso al enlace de "Details" del proceso de despliegue.</p>

Una vez esperamos a que se terminen todas

<p align="center">
  <img src="https://github.com/user-attachments/assets/26ddd9d5-6183-435b-926a-ae4e8fa9f989" alt="Sexto paso">
</p>
<p align="center"><strong>Figura 104.</strong> Paso 7: Confirmación de despliegue exitoso mediante icono verde.</p>

Nos aparecerá el link del despliegue en settings-pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/c11523fd-4fa1-4032-bf6f-b492489791fc" alt="Sexto paso">
</p>
<p align="center"><strong>Figura 105.</strong> Paso 8: Visualización del enlace de despliegue desde "Settings > Pages".</p>

## 5.2. Landing Page, Services & Applications Implementation

### 5.2.1. Sprint 1

Esta sección registra el progreso obtenido durante el Sprint 1 del proyecto VolunTrack, abarcando tanto el desarrollo del producto como la dinámica de colaboración del equipo. Se describen los objetivos planteados, la asignación de responsabilidades, el backlog de tareas y las evidencias del desarrollo y la implementación. Esta organización facilita una visión clara del avance conseguido y establece una base sólida para los próximos ciclos de trabajo.

#### 5.2.1.1. Sprint Planning

El Sprint Planning es la reunión que marca el inicio de cada sprint, donde el equipo Scrum define qué se va a construir y cómo se alcanzará. Durante esta sesión, se establece un objetivo claro (Sprint Goal), se seleccionan las historias de usuario más relevantes y se descomponen en tareas específicas. Esta planificación no solo organiza el trabajo de manera eficiente, sino que también garantiza un enfoque compartido y alinea al equipo hacia la entrega continua de valor al usuario.
A continuación, se presenta la tabla correspondiente al Sprint Planning:

**Tabla 32.** Detalles del Sprint Planning para el primer sprint del proyecto VolunTrack.

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

**Tabla 33.** Asignación de líderes y colaboradores por área de trabajo en el equipo VolunTrack.

| Team Member                        | Diseño UX | Diseño UI - Wireframes | Diseño UI - MockUps | Diseño Landing Page | Control de versiones |
|-------------------------------------|-----------|------------------------|---------------------|---------------------|-----------------------|
| Binda Arbañil, Marcelo Alejandro    | L         | C                      | C                   | C                   | C                     |
| Castillo Garay, Ainhoa Lucía         | C         | L                      | C                   | C                   | C                     |
| Martel Andrade, Cassius Estefano     | C         | C                      | L                   | C                   | C                     |
| Nakamurakare Teruya, Alex Tomio      | C         | C                      | C                   | C                   | L                     |
| Ortiz Alarcón, Victor Nicolás        | C         | C                      | C                   | L                   | C                     |

#### 5.2.1.3 Sprint Backlog 1

**Tabla 34.** Sprint Backlog 1: tareas por historia de usuario, estimación, responsables y estado.

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
<p align="center"><strong>Figura 106.</strong> Icebox de las historias de usuario pendientes (no iniciadas en este sprint).</p>

Historias de usuario empezadas y finalizadas del sprint
<p align="center">
  <img src="https://github.com/user-attachments/assets/f03f3fb6-c1a5-4408-a777-22a4ca97b25c" alt="Icebox US sprint 1">
</p>
<p align="center"><strong>Figura 107.</strong> Historias de usuario empezadas y finalizadas durante el Sprint 1.</p>

Épicas
<p align="center">
  <img src="https://github.com/user-attachments/assets/20f2abcd-6a7b-4ae5-9d31-8e32442803b2" alt="Épicas">
</p>
<p align="center"><strong>Figura 108.</strong> Panel de épicas definidas en el backlog del proyecto.</p>

#### 5.1.2.4. Development Evidence for Sprint Review

Esta sección presenta los principales avances técnicos logrados durante el sprint, en relación con los productos comprometidos: la Landing Page, la Aplicación Web y los Servicios Web. Se detalla el progreso a través de los repositorios utilizados por el equipo, destacando los commits relevantes que reflejan el desarrollo de nuevas funcionalidades, la corrección de errores, las mejoras en la interfaz y la configuración de servicios. Esta evidencia no solo permite evaluar el cumplimiento de los objetivos del sprint, sino que también facilita la retroalimentación durante la reunión de revisión.

**Tabla 35.** Evidencia técnica de desarrollo obtenida desde los commits del repositorio de la Landing Page de VolunTrack.

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
<p align="center"><strong>Figura 109.</strong> Vista del repositorio desde el que se iniciará el despliegue.</p>

Nos vamos a settings

<p align="center">
  <img src="https://github.com/user-attachments/assets/8e1d90fc-d8cb-41fe-95e8-d57e65e96dfb" alt="Segundo paso">
</p>
<p align="center"><strong>Figura 110.</strong> Sección “Settings” del repositorio seleccionada para configurar GitHub Pages.</p>

Damos click en pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c6ec11b-65a1-4683-b19d-0864a579036e" alt="Tercer paso">
</p>
<p align="center"><strong>Figura 111.</strong> Acceso al menú “Pages” dentro de Settings.</p>

Nos aseguramos que el source sea “Deploy from a branch”. Escogemos la rama que vamos a desplegar, en nuestro caso la rama main, escogemos el root y le damos a guardar

<p align="center">
  <img src="https://github.com/user-attachments/assets/ff1c6980-359d-4ff3-8399-116b2461fb9f" alt="Cuarto paso">
</p>
<p align="center"><strong>Figura 112.</strong> Configuración del origen de despliegue (branch y root) para activar GitHub Pages.</p>

Volvemos a code y veremos un punto amarillo

<p align="center">
  <img src="https://github.com/user-attachments/assets/f7eaf141-5a05-4f63-b34b-ded6620f6d78" alt="Cuarto paso">
</p>
<p align="center"><strong>Figura 113.</strong> Indicador de progreso de despliegue en la vista de código.</p>

Damos click y después click a details

<p align="center">
  <img src="https://github.com/user-attachments/assets/e270dec3-585f-4ad5-9263-b6b8511c99ff" alt="Quinto paso">
</p>
<p align="center"><strong>Figura 114.</strong> Acceso a detalles del estado de despliegue mediante clic en el punto amarillo.</p>

Una vez esperamos a que se terminen todas

<p align="center">
  <img src="https://github.com/user-attachments/assets/26ddd9d5-6183-435b-926a-ae4e8fa9f989" alt="Sexto paso">
</p>
<p align="center"><strong>Figura 115.</strong> Proceso de espera hasta que se completen todos los pasos de despliegue.</p>

Nos aparecerá el link del despliegue en settings-pages

<p align="center">
  <img src="https://github.com/user-attachments/assets/c11523fd-4fa1-4032-bf6f-b492489791fc" alt="Sexto paso">
</p>
<p align="center"><strong>Figura 116.</strong> Confirmación final del enlace de despliegue generado por GitHub Pages.</p>

#### 5.2.1.8. Team Collaboration Insights during Sprint

A lo largo del Sprint 1, el equipo de VolunTrack sostuvo una colaboración continua y efectiva. Al tratarse del primer sprint del proyecto, se definieron acuerdos fundamentales respecto a la metodología de trabajo, las herramientas de comunicación y los canales para el seguimiento de tareas. A continuación, se presenta evidencia de la participación de cada integrante del equipo:

<p align="center">
  <img src="https://github.com/user-attachments/assets/973bdd4e-2dbe-4d35-a8fb-bef50cf5f414" alt="Insights landing page">
</p>
<p align="center"><strong>Figura 117.</strong> Sección de Insights de GitHub evidenciando la colaboración de todos los integrantes en la landing page.</p>

En esta imagen se aprecia la sección de “Insights” de Github, donde se puede evidenciar que todos formaron parte de los commits de la landing page

<p align="center">
  <img src="https://github.com/user-attachments/assets/65133b54-3b99-4c0b-835e-f8bfe9af5a7a" alt="Commits READ.ME">
</p>
<p align="center"><strong>Figura 118.</strong> Historial de commits del archivo README.md, mostrando contribuciones de múltiples miembros del equipo.</p>

Por otro lado, aquí se aprecia los commits realizados en el repositorio de la landing page

### 5.2.2. Sprint 2

#### 5.2.2.1. Sprint Planning 2


| **Sprint #**                      | Sprint 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Sprint Planning Background**   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Date**                         | 2025-04-07                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Time**                         | 02:40 PM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Location**                     | Virtual                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Prepared By**                  | Martel Andrade Cassius Estefano, Binda Arbañil Marcelo Alejandro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Attendees (to planning meeting)** | Ainhoa Lucía Castillo Garay / Marcelo Alejandro Binda Arbañil / Martel Andrade Cassius Estefano / Nakamurakare Teruya Alex Tomio / Ortiz Alarcón Victor Nicolás / George Aldo Galván Cerrón                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Sprint 1 Review Summary**      | Durante el Sprint, se logró desarrollar y publicar la primera versión funcional de la página de aterrizaje pública de VolunTrack, cumpliendo con el objetivo planteado en el Sprint Planning. Esta versión incluyó las secciones esenciales: “Sobre nosotros”, “Planes” y “Contacto”, permitiendo transmitir la propuesta de valor de manera clara a potenciales organizaciones y voluntarios. El equipo de desarrollo, con contribuciones clave de Tomio y Víctor, destacó que la coordinación efectiva y la claridad de objetivos facilitaron una implementación técnica sólida. La diseñadora UX/UI, Ainhoa Castillo, resaltó el trabajo colaborativo con el equipo técnico, lo que permitió mantener una coherencia visual y funcional alineada con la identidad de VolunTrack. Los product owners, Cassius y Marcelo, expresaron satisfacción con los resultados, subrayando que la página proyecta una imagen profesional y accesible, cumpliendo con el objetivo de aumentar la visibilidad y credibilidad del proyecto en esta etapa inicial. |
| **Sprint 1 Retrospective Summary** | Durante el Sprint, el equipo destacó como fortalezas la adecuada planificación y el enfoque compartido en la entrega de un producto funcional. La comunicación constante y la claridad en las responsabilidades facilitaron el cumplimiento de los objetivos. Se reconoció como acierto la alineación entre el diseño UX/UI y las necesidades del producto. Sin embargo, se identificaron oportunidades de mejora: algunos textos clave para la página fueron definidos tardíamente, generando pequeños retrasos en la maquetación. Para el siguiente sprint, se plantea anticipar la validación de contenido antes de su integración, aplicar revisiones de accesibilidad básicas y considerar la inclusión de testimonios o casos reales que refuercen el impacto de VolunTrack desde el primer contacto con el usuario.                                                                                                                                                                                                                            |
| **Sprint Goal & User Stories**   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Sprint n Goal**                | Our focus is on developing and implementing the core frontend functionalities of the VolunTrack web application, emphasizing a user-centered interface design and intuitive interaction flows. This includes catalog browsing, the purchase interface, and the login/registration experience. We believe it delivers a robust visual and functional foundation that enhances user engagement and usability from the first interaction. This approach not only improves the initial user experience but also sets a clear path for seamless backend integration in future sprints. This will be confirmed when users are able to smoothly navigate the main interface, browse the activity catalog, access the purchase section, and successfully complete login or registration using the implemented frontend components.                                                                                                                                                                                                                            |
| **Sprint n Velocity**            | 15                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Sum of Story Points**          | 47                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |


#### 5.2.2.2. Aspect Leaders and Collaborators

Durante el desarrollo del Sprint, se han identificado diversos aspectos funcionales relacionados con el diseño y la construcción de la Landing Page de la aplicación web **Livria**. Con el propósito de organizar el trabajo del equipo de forma eficiente, se ha elaborado una matriz de **Liderazgo y Colaboración (LACX)**. En esta matriz, a cada integrante se le asigna el rol de **líder (L)** en uno de los aspectos clave del desarrollo, y el rol de **colaborador (C)** en otros aspectos complementarios.

Los aspectos definidos para este Sprint son los siguientes:
- User Account
- Activity Dashboard
- Volunteers Section
- Review & Improvements
- Notifications Section
- Calendar Section
- Create Activity Section
- Login and Register Section

| **Team Member (Last Name, First Name)**        | **User Account** | **Activity Dashboard** | **Volunteers Section** | **Review, Improvements** | **Notification Section** | **Calendar Section** | **Create Activity Section** | **Login and Register Section** |
|-----------------------------------------------|------------------|-------------------------|-------------------------|---------------------------|--------------------------|----------------------|-----------------------------|--------------------------------|
| **Castillo Garay, Ainhoa Lucía**              | C                | C                       | C                       | C                         | L                        | C                    | L                           | C                              |
| **Binda Arbañil, Marcelo Alejandro**          | L                | C                       | C                       | C                         | C                        | C                    | C                           | L                              |
| **Martel Andrade, Cassius Estefano**          | C                | L                       | L                       | C                         | C                        | C                    | C                           | C                              |
| **Ortiz Alarcón, Victor Nicolás**             | C                | C                       | C                       | L                         | C                        | C                    | C                           | C                              |
| **Nakamurake Teruya, Alex Tomio**             | C                | C                       | C                       | C                         | C                        | L                    | C                           | C                              |
| **George Aldo Galván Cerrón**                 | -                | C                       | -                       | -                         | -                        | -                    | -                           | -                              |

#### 5.2.2.3. Sprint Backlog 2

<table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; text-align: center;">
  <thead style="background-color: #dde4f0;">
    <tr>
      <th>Sprint #</th>
      <th colspan="6">Sprint #2</th>
    </tr>
    <tr style="background-color: #f5cccc;">
      <th colspan="7">Work-Item / Task</th>
    </tr>
    <tr style="background-color: #e9ebf5;">
      <th>User Story ID</th>
      <th>Id</th>
      <th>Description</th>
      <th>Estimation (Hours)</th>
      <th>Assigned To</th>
      <th>Status (To-do / InProcess / To-Review / Done)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><strong>US14</strong></td>
      <td>T01</td>
      <td>Diseñar plantilla de informe de impacto con datos relevantes</td>
      <td>2</td>
      <td>Binda Arbañil, Marcelo Alejandro</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Implementar generación del informe desde perfil del voluntario</td>
      <td>2</td>
      <td>Castillo Garay, Ainhoa Lucía</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Implementar opción de descarga PDF y envío por email</td>
      <td>3</td>
      <td>Binda Arbañil, Marcelo Alejandro</td>
      <td>To-do</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>US15</strong></td>
      <td>T01</td>
      <td>Diseñar sección destacada de propuesta de valor en la página principal</td>
      <td>3</td>
      <td>Castillo Garay, Ainhoa Lucía</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Implementar pop-ups o detalles interactivos para beneficios clave</td>
      <td>3</td>
      <td>Binda Arbañil, Marcelo Alejandro</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Incluir casos de éxito o testimonios reales</td>
      <td>3</td>
      <td>Castillo Garay, Ainhoa Lucía</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>US16</strong></td>
      <td>T01</td>
      <td>Implementar búsqueda por intereses con campo destacado</td>
      <td>4</td>
      <td>Ortiz Alarcón, Victor Nicolás</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Mostrar lista de actividades disponibles con filtros</td>
      <td>3</td>
      <td>Ortiz Alarcón, Victor Nicolás</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>US17</strong></td>
      <td>T01</td>
      <td>Mostrar información de contacto visible y accesible</td>
      <td>4</td>
      <td>Martel Andrade, Cassius Estefano</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Crear pantalla de contacto con opciones para registrar ONG o empezar a explorar</td>
      <td>3</td>
      <td>Nakamurake Teruya, Alex Tomio</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Implementar redirección a formulario para registrar ONG con campos e instrucciones claras</td>
      <td>3</td>
      <td>Martel Andrade, Cassius Estefano</td>
      <td>Done</td>
    </tr> 
    <tr>
      <td rowspan="3"><strong>US18</strong></td>
      <td>T01</td>
      <td>Diseñar sección de planes y precios clara y atractiva</td>
      <td>3</td>
      <td>Nakamurake Teruya, Alex Tomio</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Implementar visualización de detalles por plan seleccionado</td>
      <td>4</td>
      <td>Ortiz Alarcón, Victor Nicolás</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Añadir opción de contacto o formulario para consultas sobre planes</td>
      <td>2</td>
      <td>Ortiz Alarcón, Victor Nicolás</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>US19</strong></td>
      <td>T01</td>
      <td>Crear endpoint POST para nuevas actividades con validación</td>
      <td>1</td>
      <td>Martel Andrade, Cassius Estefano</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Crear endpoint GET para leer detalles de actividades</td>
      <td>1</td>
      <td>Nakamurake Teruya, Alex Tomio</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Crear endpoint PUT para actualizar actividades</td>
      <td>1</td>
      <td>Binda Arbañil, Marcelo Alejandro</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>US20</strong></td>
      <td>T01</td>
      <td>Crear endpoint POST para registrar voluntarios</td>
      <td>1</td>
      <td>Castillo Garay, Ainhoa Lucía</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Crear endpoint GET para obtener perfil de voluntario</td>
      <td>1</td>
      <td>Martel Andrade, Cassius Estefano</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Crear endpoint PUT para actualizar información del voluntario</td>
      <td>1</td>
      <td>Nakamurake Teruya, Alex Tomio</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>US21</strong></td>
      <td>T01</td>
      <td>Crear endpoint POST para inscripción en actividades</td>
      <td>1</td>
      <td>Binda Arbañil, Marcelo Alejandro</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Crear endpoint GET para listar voluntarios inscritos</td>
      <td>1</td>
      <td>Castillo Garay, Ainhoa Lucía</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Crear endpoint PUT para registrar asistencia</td>
      <td>1</td>
      <td>Ortiz Alarcón, Victor Nicolás</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T04</td>
      <td>Crear endpoint DELETE para eliminar inscripción</td>
      <td>1</td>
      <td>Ortiz Alarcón, Victor Nicolás</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>US22</strong></td>
      <td>T01</td>
      <td>Implementar vista de lista de voluntarios con información relevante</td>
      <td>3</td>
      <td>Martel Andrade, Cassius Estefano</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Añadir funcionalidades de búsqueda y filtrado en la lista de voluntarios</td>
      <td>2</td>
      <td>Nakamurake Teruya, Alex Tomio</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Mostrar detalles y opciones de gestión para voluntarios</td>
      <td>2</td>
      <td>Martel Andrade, Cassius Estefano</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>US23</strong></td>
      <td>T01</td>
      <td>Crear vista de calendario interactivo para actividades</td>
      <td>3</td>
      <td>Nakamurake Teruya, Alex Tomio</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Implementar función para agregar nueva actividad desde el calendario</td>
      <td>3</td>
      <td>Binda Arbañil, Marcelo Alejandro</td>
      <td>Done</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>US24</strong></td>
      <td>T01</td>
      <td>Implementar redirección al dashboard tras login</td>
      <td>2</td>
      <td>Castillo Garay, Ainhoa Lucía</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T02</td>
      <td>Mostrar próximas actividades programadas en dashboard</td>
      <td>3</td>
      <td>Martel Andrade, Cassius Estefano</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>T03</td>
      <td>Agregar botones de acción rápida (crear actividad, etc.)</td>
      <td>3</td>
      <td>Nakamurake Teruya, Alex Tomio</td>
      <td>Done</td>
    </tr>
  </tbody>
</table>

## 5.2.2.4. Development Evidence for Sprint Review

En este capítulo se expone el progreso logrado durante el Sprint 2 en el desarrollo de la aplicación web. Gracias al trabajo colaborativo del equipo y al enfoque ágil adoptado, se avanzó significativamente en la implementación de funcionalidades clave y en la mejora de la interfaz de usuario. Este sprint ha permitido consolidar una base técnica robusta que facilitará el desarrollo futuro y garantizará el cumplimiento de los objetivos planteados.

**Branch: `develop`**

<p align="center">
  <img src="./assets/brach%20develop.png" alt="develop" width="700">
</p>
<p align="center"><strong>Figura 119.</strong> Commits de la rama develop.</p>

<p align="center">
  <img src="./assets/brach%20develop%202.png" alt="develop" width="700">
</p>
<p align="center"><strong>Figura 120.</strong> Commits de la rama develop.</p>

<p align="center">
  <img src="./assets/brach%20develop%203.png" alt="develop" width="700">
</p>
<p align="center"><strong>Figura 121.</strong> Commits de la rama develop.</p>

<p align="center">
  <img src="./assets/brach%20develop%204.png" alt="develop" width="700">
</p>
<p align="center"><strong>Figura 122.</strong> Commits de la rama develop.</p>

<p align="center">
  <img src="./assets/brach%20develop%205.png" alt="develop" width="700">
</p>
<p align="center"><strong>Figura 123.</strong> Commits de la rama develop.</p>

<p align="center">
  <img src="./assets/brach%20develop%206.png" alt="develop" width="700">
</p>
<p align="center"><strong>Figura 124.</strong> Commits de la rama develop.</p>

**Branch: `feature/-images-and-tables`**

<p align="center">
  <img src="./assets/feature-image-and-tables.png" alt="images-and-tables" width="700">
</p>
<p align="center"><strong>Figura 125.</strong> Evidencia de commits en la rama para imágenes y tablas.</p>

<p align="center">
  <img src="./assets/feature-images-end-tables-2.png" alt="images-and-tables" width="700">
</p>
<p align="center"><strong>Figura 126.</strong> Evidencia de commits en la rama para imágenes y tablas.</p>

**Branch: `feature/activities`**

<p align="center">
  <img src="./assets/feature-activities.png" alt="activities" width="700">
</p>
<p align="center"><strong>Figura 127.</strong> Commits asociados a la funcionalidad de actividades.</p>

<p align="center">
  <img src="./assets/feature-activities-2.png" alt="activities" width="700">
</p>
<p align="center"><strong>Figura 128.</strong> Commits asociados a la funcionalidad de actividades.</p>

<p align="center">
  <img src="./assets/feature-activities-3.png" alt="activities" width="700">
</p>
<p align="center"><strong>Figura 129.</strong> Commits asociados a la funcionalidad de actividades.</p>

<p align="center">
  <img src="./assets/feature-activities-4.png" alt="activities" width="700">
</p>
<p align="center"><strong>Figura 130.</strong> Commits asociados a la funcionalidad de actividades.</p>

**Branch: `feature/activity-details`**

<p align="center">
  <img src="./assets/feature-activity-details.png" alt="activity-details" width="700">
</p>
<p align="center"><strong>Figura 131.</strong> Commits relacionados con la vista de detalles de actividad.</p>

<p align="center">
  <img src="./assets/feature-activity-details-2.png" alt="activity-details" width="700">
</p>
<p align="center"><strong>Figura 132.</strong> Commits relacionados con la vista de detalles de actividad.</p>

**Branch: `feature/calendar`**

<p align="center">
  <img src="./assets/feature-calendar.png" alt="calendar" width="700">
</p>
<p align="center"><strong>Figura 133.</strong> Evidencia de desarrollo en el calendario de actividades.</p>

<p align="center">
  <img src="./assets/feature-calendar-2.png" alt="calendar" width="700">
</p>
<p align="center"><strong>Figura 134.</strong> Evidencia de desarrollo en el calendario de actividades.</p>

<p align="center">
  <img src="./assets/feature-calendar-3.png" alt="calendar" width="700">
</p>
<p align="center"><strong>Figura 135.</strong> Evidencia de desarrollo en el calendario de actividades.</p>

<p align="center">
  <img src="./assets/feature-calendar-4.png" alt="calendar" width="700">
</p>
<p align="center"><strong>Figura 136.</strong> Evidencia de desarrollo en el calendario de actividades.</p>

<p align="center">
  <img src="./assets/feature-calendar-5.png" alt="calendar" width="700">
</p>
<p align="center"><strong>Figura 137.</strong> Evidencia de desarrollo en el calendario de actividades.</p>

**Branch: `feature/dashboard`**

<p align="center">
  <img src="./assets/feature-dashboard.png" alt="dashboard" width="700">
</p>
<p align="center"><strong>Figura 138.</strong> Commits que implementan mejoras en el dashboard.</p>

<p align="center">
  <img src="./assets/feature-dashboard-2.png" alt="dashboard" width="700">
</p>
<p align="center"><strong>Figura 139.</strong> Commits que implementan mejoras en el dashboard.</p>

<p align="center">
  <img src="./assets/feature-dashboard-3.png" alt="dashboard" width="700">
</p>
<p align="center"><strong>Figura 140.</strong> Commits que implementan mejoras en el dashboard.</p>

<p align="center">
  <img src="./assets/feature-dashboard-4.png" alt="dashboard" width="700">
</p>
<p align="center"><strong>Figura 141.</strong> Commits que implementan mejoras en el dashboard.</p>

**Branch: `feature/edit-activity`**

<p align="center">
  <img src="./assets/feature-edit-activity.png" alt="edit-activity" width="700">
</p>
<p align="center"><strong>Figura 142.</strong> Desarrollo de funcionalidades para editar actividades.</p>

<p align="center">
  <img src="./assets/feature-edit-activity-2.png" alt="edit-activity" width="700">
</p>
<p align="center"><strong>Figura 143.</strong> Desarrollo de funcionalidades para editar actividades.</p>

<p align="center">
  <img src="./assets/feature-edit-activity-3.png" alt="edit-activity" width="700">
</p>
<p align="center"><strong>Figura 144.</strong> Desarrollo de funcionalidades para editar actividades.</p>

<p align="center">
  <img src="./assets/feature-edit-activity-4.png" alt="edit-activity" width="700">
</p>
<p align="center"><strong>Figura 145.</strong> Desarrollo de funcionalidades para editar actividades.</p>

**Branch: `feature/metrics`**

<p align="center">
  <img src="./assets/feature-metrics.png" alt="metrics" width="700">
</p>
<p align="center"><strong>Figura 146.</strong> Evidencia de implementación de métricas de voluntariado.</p>

<p align="center">
  <img src="./assets/feature-metrics-2.png" alt="metrics" width="700">
</p>
<p align="center"><strong>Figura 147.</strong> Evidencia de implementación de métricas de voluntariado.</p>

<p align="center">
  <img src="./assets/feature-metrics-3.png" alt="metrics" width="700">
</p>
<p align="center"><strong>Figura 148.</strong> Evidencia de implementación de métricas de voluntariado.</p>

<p align="center">
  <img src="./assets/feature-metrics-4.png" alt="metrics" width="700">
</p>
<p align="center"><strong>Figura 149.</strong> Evidencia de implementación de métricas de voluntariado.</p>

**Branch: `feature/notifications`**

<p align="center">
  <img src="./assets/feature-notifications.png" alt="notifications" width="700">
</p>
<p align="center"><strong>Figura 150.</strong> Commits relacionados con la sección de notificaciones.</p>

<p align="center">
  <img src="./assets/feature-notifications-2.png" alt="notifications" width="700">
</p>
<p align="center"><strong>Figura 151.</strong> Commits relacionados con la sección de notificaciones.</p>

<p align="center">
  <img src="./assets/feature-notifications-3.png" alt="notifications" width="700">
</p>
<p align="center"><strong>Figura 152.</strong> Commits relacionados con la sección de notificaciones.</p>

<p align="center">
  <img src="./assets/feature-notifications-4.png" alt="notifications" width="700">
</p>
<p align="center"><strong>Figura 153.</strong> Commits relacionados con la sección de notificaciones.</p>

## 5.2.2.5. Execution Evidence for Sprint Review

Durante el Sprint 2, se desarrollaron 11 historias de usuario enfocadas en la implementación de funcionalidades clave para la plataforma web de VolunTrack. Este sprint tuvo como objetivo principal fortalecer las capacidades del sistema en torno a la gestión de voluntariados, la interacción entre usuarios y organizaciones, y la mejora general de la experiencia de usuario.

Entre las funcionalidades implementadas se destacan la navegación entre oportunidades de voluntariado, la creación y gestión de actividades, el proceso de postulación a actividades y la personalización del perfil del voluntario. Las historias abarcaron tanto el diseño de interfaces intuitivas como la implementación de funcionalidades como la inscripción y visualización de actividades y la interacción mediante el envío de notificaciones y los certificados.

El equipo logró completar satisfactoriamente todas las tareas planificadas. Asimismo, se alcanzó una interfaz intuitiva en todas las secciones críticas de la plataforma, asegurando una experiencia de usuario fluida, accesible y alineada con los objetivos estratégicos de VolunTrack.

### Evidencia visual

A continuación, se presentan capturas de pantalla de las vistas desarrolladas durante este sprint.

<p align="center">
  <img src="./assets/login.png" alt="Login" width="700">
</p>
<p align="center"><strong>Figura 154.</strong> Vista de inicio de sesión de la plataforma VolunTrack.</p>

<p align="center">
  <img src="./assets/register.png" alt="Registro" width="700">
</p>
<p align="center"><strong>Figura 155.</strong> Vista del formulario de registro de nuevos usuarios.</p>

<p align="center">
  <img src="./assets/dashboard-1.png" alt="Dashboard1" width="700">
</p>
<p align="center"><strong>Figura 156.</strong> Vista principal del Dashboard de actividades.</p>

<p align="center">
  <img src="./assets/dashboard-2.png" alt="Dashboard2" width="700">
</p>
<p align="center"><strong>Figura 157.</strong> Sección de navegación y métricas dentro del Dashboard.</p>

<p align="center">
  <img src="./assets/dashboard-3.png" alt="Dashboard3" width="700">
</p>
<p align="center"><strong>Figura 158.</strong> Calendario.</p>

<p align="center">
  <img src="./assets/card.png" alt="CardActividad" width="700">
</p>
<p align="center"><strong>Figura 159.</strong> Visualización de tarjeta de actividad.</p>

<p align="center">
  <img src="./assets/notificaciones-1.png" alt="Notificaciones" width="700">
</p>
<p align="center"><strong>Figura 160.</strong> Sistema de gestion de voluntarios.</p>

<p align="center">
  <img src="./assets/perfil.png" alt="Perfil" width="700">
</p>
<p align="center"><strong>Figura 161.</strong> Vista del perfil del usuario con información detallada.</p>

<p align="center">
  <img src="./assets/notificaiones-perfil.png" alt="NotificacionesPerfil" width="700">
</p>
<p align="center"><strong>Figura 162.</strong> Visualización de notificaciones desde la sección de perfil del usuario.</p>

### Video del Sprint 2 Review

[Ver video del Sprint 2 Review](https://drive.google.com/file/d/1pp985R2apsaa4qa8KcvP_UM9SSYTLKDV/view?usp=sharing)


## 5.2.2.6. Services Documentation Evidence for Sprint Review

Se implementó la gestión de solicitudes HTTP desde el frontend hacia una API falsa basada en JSON Server, la cual se estructuró a partir de los datos de `db.json` y sus endpoints simulados.

**URL de la API Simulada (Local):** `http://localhost:3000/`

<table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; text-align: center;">
  <thead style="background-color: #f5e8b0;">
    <tr>
      <th>Endpoint Simulado (Fake API)</th>
      <th>Entidad Principal Gestionada</th>
      <th>Operaciones CRUD Soportadas (Simuladas) vía JSON Server</th>
      <th>Futuro Alcance con OpenAPI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="http://localhost:3000/activities/">http://localhost:3000/activities/</a></td>
      <td>Actividades (activities)</td>
      <td>GET, POST</td>
      <td>Documentación para obtener información de las actividades, los posts para la creación de las actividades.</td>
    </tr>
    <tr>
      <td><a href="http://localhost:3000/volunteers/">http://localhost:3000/volunteers/</a></td>
      <td>Voluntarios (volunteers)</td>
      <td>GET, POST, DELETE</td>
      <td>Documentación para obtener información de las comunidades, los posts y delete para la creación y eliminación de voluntarios.</td>
    </tr>
    <tr>
      <td><a href="http://localhost:3000/notifications/">http://localhost:3000/notifications/</a></td>
      <td>Notificaciones (notifications)</td>
      <td>GET, POST</td>
      <td>Documentación para obtener información de las actividades, los posts para la creación de las notificaciones.</td>
    </tr>
    <tr>
      <td><a href="http://localhost:3000/users/">http://localhost:3000/users/</a></td>
      <td>Usuarios (users)</td>
      <td>GET, POST</td>
      <td>Documentación para obtener información de los usuarios, los posts para la creación de los usuarios.</td>
    </tr>
    <tr>
      <td><a href="http://localhost:3000/userlogin/">http://localhost:3000/userlogin/</a></td>
      <td>User logeado (userlogin)</td>
      <td>GET, POST</td>
      <td>Documentación para obtener información del usuario logeado, los posts para la creación del usuario logeado.</td>
    </tr>
    <tr>
      <td><a href="http://localhost:3000/registers/">http://localhost:3000/registers/</a></td>
      <td>Registros (registers)</td>
      <td>GET, POST</td>
      <td>Documentación para obtener información de los registros, los posts para la creación de los registros.</td>
    </tr>
    <tr>
      <td><a href="http://localhost:3000/certificates/">http://localhost:3000/certificates/</a></td>
      <td>Certificados (certificates)</td>
      <td>GET, POST</td>
      <td>Documentación para obtener información de los certificados, los posts para la creación de los certificados.</td>
    </tr>
  </tbody>
</table>

**URL de la API Simulada (Local):** [http://localhost:3000/](http://localhost:3000/)

Se implementó la gestión de solicitudes HTTP desde el frontend hacia una API falsa basada en JSON Server, la cual se estructuró a partir de los datos de `db.json` y sus endpoints simulados.

#### 5.2.2.7. Software Deployment Evidence for Sprint Review

<p align="center">
  <img src="./assets/5.2.2.7-1.png" alt="deploy1" width="700">
</p>
<p align="center"><strong>Figura 163.</strong> Creación del repositorio en GitHub.</p>

Primero crearemos el repositorio de nuestra fake API, para subirla a la nube mediante Render.

<p align="center">
  <img src="./assets/5.2.2.7-2.png" alt="deploy1" width="700">
</p>
<p align="center"><strong>Figura 164.</strong> Creación del repositorio de la fake API en GitHub.</p>

Con el repositorio listo, ingresamos a Render y creamos un nuevo Web Service, vinculando el repositorio de GitHub que habíamos preparado. Durante la configuración, optamos por una instancia gratuita y seguimos los pasos requeridos para iniciar el proceso de despliegue.

<p align="center">
  <img src="./assets/5.2.2.7-3.png" alt="deploy2" width="700">
</p>
<p align="center"><strong>Figura 165.</strong> Configuración del servicio Web en Render a partir del repositorio.</p>

Tras unos instantes, Render indicó que el servicio estaba "Live", lo que significaba que la API se había desplegado exitosamente y era accesible de forma pública.

<p align="center">
  <img src="./assets/5.2.2.7-4.png" alt="deploy3" width="700">
</p>
<p align="center"><strong>Figura 166.</strong> Servicio desplegado exitosamente en Render (estado “Live”).</p>

Para asegurar el correcto funcionamiento, accedimos a la URL pública proporcionada por Render y probamos los diferentes endpoints. Una vez confirmada su operatividad, actualizamos en nuestro proyecto las direcciones locales de la API simulada por el nuevo enlace público de Render.  
Este ajuste posibilitó que nuestra aplicación accediera a los datos de forma remota y operativa en cualquier ambiente.

<p align="center">
  <img src="./assets/5.2.2.7-5.png" alt="deploy4" width="700">
</p>
<p align="center"><strong>Figura 167.</strong> Comprobación de endpoints funcionando desde la API desplegada.</p>

### Actividades realizadas:

1. Instalación de Firebase CLI  
   Se instaló Firebase CLI globalmente en el entorno local para poder gestionar el despliegue.  
   Comando utilizado: npm install -g firebase-tools

<p align="center">
  <img src="./assets/instalacion.png" alt="Instalación Firebase CLI" width="700">
</p>
<p align="center"><strong>Figura 168.</strong> Instalación de Firebase CLI en el entorno local.</p>

2. Autenticación en Firebase  
   Se autenticó la cuenta de Firebase utilizando el siguiente comando:  
   firebase login

3. Inicialización del Proyecto en Firebase  
   Se inicializó el proyecto Firebase en la raíz del proyecto. Durante la configuración, se especificó el directorio de distribución del build (por ejemplo, `dist`) y se indicó que no se trataba de una single-page application.  
   Comando utilizado: firebase init hosting

<p align="center">
  <img src="./assets/inicio.png" alt="Inicialización Firebase" width="700">
</p>
<p align="center"><strong>Figura 169.</strong> Proceso de inicialización del hosting en Firebase CLI.</p>

### 5.2.2.8. Team Collaboration Insights during Sprint

Durante este Sprint, el equipo se centró en la implementación de las funcionalidades clave del frontend para la aplicación web de VolunTrack, utilizando Angular como el marco principal de desarrollo. Se trabajó en la creación de interfaces de usuario intuitivas y en la integración de diversas funcionalidades, como la visualización del dashboard de actividades y la visualización de voluntarios pertenecientes a una actividad. Además, se desarrollaron pantallas esenciales para la experiencia del usuario, tales como la sección de calendario y notificaciones.

#### Actividades de implementación:
- La interfaz de usuario fue implementada con base en los diseños realizados en Figma, aplicando los estilos y flujos definidos de forma fluida y coherente.

- Utilizando Angular, se desarrollaron estructuras dinámicas mediante componentes reutilizables que permiten gestionar el estado de la interfaz de manera eficiente y escalable.

- Se integró Angular Router para la navegación fluida entre las distintas secciones de la plataforma, y se utilizaron servicios para manejar el estado compartido entre componentes, facilitando la futura integración con funcionalidades de backend.

#### Colaboradores en el repositorio:

<p align="center">
  <img src="./assets/colaboradores.png" alt="Colaboradores repositorio" width="700">
</p>
<p align="center"><strong>Figura 170.</strong> Participación de miembros del equipo en los commits del repositorio principal del frontend.</p>

#### Histograma de contribuciones en el tiempo:
[Ver histograma en Google Drive](https://drive.google.com/drive/folders/1R20lekxhffWaysbl4PmnwoOmCMK34kw_?usp=sharing)

### 5.2.3. Sprint 3

#### 5.2.3.1. Sprint Planning

| **Sprint #**                    | Sprint 3 |
|--------------------------------|----------|
|                                | **Sprint Planning Background** |
| **Date**                       | 2025-06-21 |
| **Time**                       | 12:40 PM |
| **Location**                   | Virtual |
| **Prepared By**                | Castillo Garay Ainhoa Lucía |
| **Attendees (to planning meeting)** | Ainhoa Lucía Castillo Garay / Marcelo Alejandro Binda Arbañil / Martel Andrade Cassius Estefano / Nakamurakare Teruya Alex Tomio / Ortiz Alarcón Victor Nicolás / George Galván Cerrón |
| **Sprint 2 Review Summary**    | Durante el Sprint 2, el equipo desarrolló exitosamente el frontend de la aplicación web VolunTrack, centrándose en las secciones clave para la gestión de voluntarios, actividades, organizaciones y participaciones. Este sprint también introdujo un soporte fundamental para la accesibilidad y la internacionalización, permitiendo que la interfaz se adapte a diferentes idiomas y tecnologías de asistencia. Las vistas creadas son ahora completamente navegables e interactivas, ofreciendo a los coordinadores y administradores de ONGs una primera versión funcional de la plataforma para gestionar sus programas de voluntariado y recursos operativos. Adicionalmente, se implementaron APIs simuladas (fake APIs) para simular las interacciones de datos, sentando las bases para la futura integración con los servicios de backend. |
| **Sprint 2 Retrospective Summary** | Durante la revisión del Sprint 2, el equipo de VolunTrack destacó un sólido progreso en la transformación de los diseños UX/UI en interfaces funcionales para la gestión de voluntarios, actividades, organizaciones y participaciones. Se hizo un énfasis particular en alinear el desarrollo frontend con los estándares arquitectónicos del proyecto, así como en la implementación de soporte fundamental para la accesibilidad y la internacionalización. El uso de APIs simuladas (fake APIs) demostró ser muy valioso para probar e iterar componentes en un contexto realista. Los miembros del equipo valoraron la mejora en los flujos de comunicación y una mayor alineación entre diseño y desarrollo en comparación con el Sprint 1. No obstante, se identificaron desafíos menores en el mantenimiento de una estructura de código consistente y en asegurar el cumplimiento total de la accesibilidad en todas las vistas. Para el futuro, el equipo acordó establecer guías de codificación más estrictas y realizar revisiones de accesibilidad en etapas más tempranas del desarrollo. |
|                                | **Sprint Goal & User Stories** |
| **Sprint 3 Goal**              | Our primary focus in Sprint 3 has been the development and implementation of the core backend functionalities of the VolunTrack web application. We have emphasized robust data management, the construction of secure API endpoints, and the implementation of efficient business logic for the key domains. This includes the management of VolunteerRegistration, ActivityRegistration, Participation, and Notifications. <br><br>We believe this approach provides a solid data and logic foundation that ensures the system's reliability and scalability. This focus not only enhances the application's fundamental ability to process information but also lays the groundwork for seamless integration with user interfaces that will be developed in upcoming sprints. <br><br>This will be confirmed when frontend developers (or automated integration tests) are able to consistently create, retrieve, update, and delete data through the implemented API endpoints for the main domains. |
| **Sprint 3 Velocity**          | 15 |
| **Sum of Story Points**        | 15 |

#### 5.2.3.2. Aspect Leaders and Collaborators

Durante el Sprint 3 del desarrollo de VolunTrack, el equipo se ha embarcado en la fase crucial de construcción del backend de la aplicación. Este sprint está enfocado en establecer una base sólida y funcional para el sistema, sentando las bases para las interacciones con el frontend y el correcto funcionamiento de la plataforma de voluntariado. El trabajo se ha estructurado alrededor del desarrollo intensivo de los siguientes bounded contexts clave:
- VolunteerRegistration
- ActivityRegistration
- Notifications
- Participation

| **Team Member (Last Name, First Name)** | **VolunteerRegistration** | **ActivityRegistration** | **Notifications** | **Participation** |
|----------------------------------------|----------------------------|---------------------------|--------------------|--------------------|
| Castillo Garay, Ainhoa Lucía           | C                          | C                         | C                  | C                  |
| Binda Arbañil, Marcelo Alejandro       | C                          | L                         | L                  | C                  |
| Martel Andrade, Cassius Estefano       | L                          | C                         | C                  | L                  |
| Ortiz Alarcón, Victor Nicolás          | C                          | C                         | C                  | C                  |
| Nakamurake Teruya, Alex Tomio          | C                          | C                         | C                  | C                  |
| Galván Cerrón, George                  | C                          | C                         | C                  | C                  |

#### 5.2.3.3 Sprint Backlog 3

| **Sprint** | **User Story ID** | **Task ID** | **Descripción**                                                                                         | **Estimación (hrs)** | **Asignado a**                             | **Estado** |
|------------|-------------------|-------------|----------------------------------------------------------------------------------------------------------|----------------------|---------------------------------------------|------------|
| Sprint #3  | TS01              | T01         | Crear voluntario                                                                                         | 2                    | Binda Arbañil, Marcelo Alejandro            | Done       |
|            |                   | T02         | Consultar todos los voluntarios                                                                          | 3                    | Castillo Garay, Ainhoa Lucía                | Done       |
|            |                   | T03         | Actualizar información de un voluntario                                                                  | 3                    | Binda Arbañil, Marcelo Alejandro            | Done       |
|            |                   | T04         | Eliminar un voluntario                                                                                   | 1                    | Martel Andrade, Cassius Estefano            | Done       |
| Sprint #3  | TS02              | T01         | Crear una nueva actividad                                                                                | 2                    | Castillo Garay, Ainhoa Lucía                | Done       |
|            |                   | T02         | Consultar todas las actividades                                                                          | 3                    | Binda Arbañil, Marcelo Alejandro            | Done       |
|            |                   | T03         | Consultar una actividad por ID                                                                           | 3                    | Binda Arbañil, Marcelo Alejandro            | Done       |
|            |                   | T04         | Actualizar información de una actividad                                                                  | 3                    | Galván Cerrón, George                       | Done       |
|            |                   | T05         | Eliminar una actividad                                                                                   | 1                    | Martel Andrade, Cassius Estefano            | Done       |
| Sprint #3  | TS03              | T01         | Crear certificado                                                                                        | 2                    | Nakamurake Teruya, Alex Tomio               | Done       |
|            |                   | T02         | Consultar todos los certificados de un voluntario en específico mediante su ID                           | 3                    | Nakamurake Teruya, Alex Tomio               | Done       |
| Sprint #3  | TS04              | T01         | Crear una organización                                                                                   | 2                    | Galván Cerrón, George                       | Done       |
|            |                   | T02         | Consultar una organización en específico por su ID                                                       | 3                    | Nakamurake Teruya, Alex Tomio               | Done       |
|            |                   | T03         | Actualizar la información de una organización                                                            | 3                    | Martel Andrade, Cassius Estefano            | Done       |
|            |                   | T04         | Eliminar una organización                                                                                | 1                    | Martel Andrade, Cassius Estefano            | Done       |
| Sprint #3  | TS05              | T01         | Crear una inscripción                                                                                    | 2                    | Nakamurake Teruya, Alex Tomio               | Done       |
|            |                   | T02         | Consultar todas las inscripciones                                                                        | 3                    | Galván Cerrón, George                       | Done       |
|            |                   | T03         | Consultar una inscripción en específico por su ID                                                        | 3                    | Ortiz Alarcón, Victor Nicolás               | Done       |
|            |                   | T04         | Actualizar la información de una inscripción                                                             | 3                    | Ortiz Alarcón, Victor Nicolás               | Done       |
|            |                   | T05         | Eliminar una inscripción                                                                                 | 1                    | Ortiz Alarcón, Victor Nicolás               | Done       |
|            |                   | T06         | Consultar todas las inscripciones de una actividad mediante su ID                                        | 3                    | Galván Cerrón, George                       | Done       |
| Sprint #3  | TS06              | T01         | Crear una notificación                                                                                   | 2                    | Castillo Garay, Ainhoa Lucía                | Done       |
|            |                   | T02         | Consultar todas las notificaciones                                                                       | 3                    | Castillo Garay, Ainhoa Lucía                | Done       |
|            |                   | T03         | Consultar todas notificaciones de un destinatario por su ID                                              | 3                    | Castillo Garay, Ainhoa Lucía                | Done       |
| Sprint #3  | TS07              | T01         | Crear una participación                                                                                  | 2                    | Castillo Garay, Ainhoa Lucía                | Done       |
|            |                   | T02         | Consultar todas las participaciones de un voluntario mediante su ID                                      | 3                    | Martel Andrade, Cassius Estefano            | Done       |
|            |                   | T03         | Consultar todas las participaciones en una actividad por su ID                                           | 3                    | Galván Cerrón, George                       | Done       |

- Historias de usuario a desarrollar en este sprint

<p align="center">
  <img src="https://github.com/user-attachments/assets/6f48856f-4f47-4197-b240-1de208848172" alt="User Stories">
</p>

- Ejemplo de tareas y descripción de una historia

<p align="center">
  <img src="https://github.com/user-attachments/assets/82649060-0135-4d1a-954e-6788b5d32a99" alt="Tasks and Description">
</p>

#### 5.2.3.4. Development Evidence for Sprint Review

| Repository              | Branch              | Commit ID                                | Commit Message                                                                                     | Committed on   |
|:------------------------|:--------------------|:------------------------------------------|:----------------------------------------------------------------------------------------------------|:---------------|
| VolunTrack-WebServices  | develop             | bd2447bed4121cc9e82d45adb6e194af736b558e  | Initial Commit                                                                                      | Jun 16, 2025   |
| VolunTrack-WebServices  | develop             | 1f9c14ef707975a50068b142773093ad1ff0507a  | Add VolunteerRegistration entities                                                                  | Jun 16, 2025   |
| VolunTrack-WebServices  | develop             | 874be9270cdcf033fe192ef2da677582faf92189  | Implement base repository and unit of work infrastructure                                           | Jun 16, 2025   |
| VolunTrack-WebServices  | develop             | fd3766c85ea1d7a92587de63a261ad7dc71e22a4  | Add domain repository interfaces                                                                    | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/volunteers  | 640ab8c9ccbf36472ddf6490f81aa85e6c35e3c4  | Implement volunteer domain service                                                                  | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/volunteers  | 4e14794bdda0b74470b66e4f7e19d4ea6a446958  | Define volunteer commands                                                                           | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/volunteers  | bff855f4007c539581acaa089c901dae409c09d4  | Define domain query objects                                                                         | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/volunteers  | 8e7c990906cdc462bf0aa049255f4ab13ac30f5d  | Implement volunteer command service and query services                                              | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/volunteers  | d09f30a3eadd5eb0849475cfd2a39bbc8d0cee52  | Define REST API resource DTOs                                                                       | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/volunteers  | 43c7bbc76ffe849a57a80579795569399503701e  | Implement Organization and Volunteer REST controllers                                               | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/volunteers  | 967b0c0838757aa18dddb66ab7436824613875ac  | Implement complete Volunteer Management Bounded Context                                             | Jun 16, 2025   |
| VolunTrack-WebServices  | feature/participation| ba1d5fa2ab956a147bfa6a7644af97012711239c | Add the first “Activity” section                                                                    | Jun 17, 2025   |
| VolunTrack-WebServices  | feature/participation| 1a024d04636dd1bbe75ebe25935d30759b8b8d0f | Add Commands and Queries for Activities                                                             | Jun 17, 2025   |
| VolunTrack-WebServices  | feature/participation| 639920418c362d4c967838d02a813f48f5b464d5 | Add Repositories and Transform for Activities                                                       | Jun 17, 2025   |
| VolunTrack-WebServices  | feature/participation| 9cb2a6b934cd8d6a8282371281aa0883b19a9d99 | Add the first “Inscription” section                                                                 | Jun 17, 2025   |
| VolunTrack-WebServices  | feature/participation| 412c8621e4400ab73eae615fa8c075bf5e969095 | Add Commands and Queries for “Inscription”                                                          | Jun 17, 2025   |
| VolunTrack-WebServices  | feature/participation| 6c3ee762243e450fc20752fba17a1d2dac5c4be3 | Add Repository and Service for “Inscription”                                                        | Jun 17, 2025   |
| VolunTrack-WebServices  | feature/participation| 0056d62570334eb847243f5bab5b43ac4e842579 | Add Interfaces for “Inscription”                                                                    | Jun 17, 2025   |
| VolunTrack-WebServices  | develop             | b676b5d85becf1af35ce774c8e7f9eaa61f2bc2b  | Update VolunTrackDemoApplication                                                                    | Jun 17, 2025   |
| VolunTrack-WebServices  | feature/participation| 9bcd613393ae958bce61ba55bb46a255a9190361 | Create Initial Participation                                                                        | Jun 18, 2025   |
| VolunTrack-WebServices  | feature/activities  | 366e342af0fbab76c1370cb36a6f6d5989568d9e  | Implement core domain entities and relationships                                                    | Jun 18, 2025   |
| VolunTrack-WebServices  | feature/activities  | 9592f1a97294e6f5650fd79485d2ee99c9accab3  | Implement domain service interfaces                                                                 | Jun 18, 2025   |
| VolunTrack-WebServices  | feature/activities  | 2d379c88eefdde1883d452b8089c1bf23460c635  | Implement domain services                                                                           | Jun 18, 2025   |
| VolunTrack-WebServices  | feature/activities  | aa7369b615c20a596bdd904b7784a76d5d4b7084  | Implement application layer services                                                                | Jun 18, 2025   |
| VolunTrack-WebServices  | feature/activities  | e64b1d3b52ed84cd4d365b9394dd7409800ed6e8  | Implement REST API transformation layer                                                             | Jun 18, 2025   |
| VolunTrack-WebServices  | feature/activities  | 9c52b82fdcc622ae11e5b1b7e22954d1578f71ae  | Implement REST API controllers                                                                      | Jun 18, 2025   |
| VolunTrack-WebServices  | feature/activities  | db42c26b48db643c648d6218cf9398075a360a85  | Update Organization Commands                                                                        | Jun 19, 2025   |
| VolunTrack-WebServices  | feature/activities  | 952a7022a34de64a089578632fc91091091613b7  | Update Organization and Inscription Repositories and Services                                       | Jun 19, 2025   |
| VolunTrack-WebServices  | feature/activities  | 5d6de475554a9fc69cb81eb983d1155149bc7136  | Add org org org                                                                                     | Jun 19, 2025   |
| VolunTrack-WebServices  | develop             | 9f02b84a1287fcb8f9ef3ec5393d20e10c0ee336  | Merge branch ‘feature/activities’ into develop                                                      | Jun 19, 2025   |
| VolunTrack-WebServices  | feature/notifications| 5ccdf753d48e16be604a431be186d8a83850cefa | Add Notifications Commands and Queries                                                              | Jun 19, 2025   |
| VolunTrack-WebServices  | feature/notifications| a7efa7e97ef2094b6c5a10bde5bd8de88e2d0286 | Add Notifications Resources and Services                                                            | Jun 19, 2025   |
| VolunTrack-WebServices  | feature/notifications| a1a3b24f068a4d85a0be651d8ffa9723b49927c3 | Update CommandServices and Controllers                                                              | Jun 19, 2025   |
| VolunTrack-WebServices  | feature/notifications| 7c3f4b466e78d8e5e71195b00b72db6f04d84ea4 | Update in Notifications                                                                             | Jun 21, 2025   |
| VolunTrack-WebServices  | feature/notifications| 49974f19e12425c87e276985cf2d1984d538101a | Fix translations of Notification Type                                                               | Jun 21, 2025   |
| VolunTrack-WebServices  | feature/notifications| 811800fb8c5f33a7174d1fd9c17a801f7d48b2d0 | Updates in Participation repositories                                                               | Jun 21, 2025   |
| VolunTrack-WebServices  | develop             | 495a2fe10f17c0caa9d44825b80601f687e31387  | Merge branch ‘feautre/participation’ into develop                                                   | Jun 21, 2025   |
| VolunTrack-WebServices  | develop             | dcd47ecceb6b5899e76f0b52f0d608223c4f4c00  | Fix Typo                                                                                            | Jun 21, 2025   |
| VolunTrack-WebServices  | feature/deployment  | aabf4ae22e75d1fd7efa99be23290317969d9de9  | Merge branch ‘develop’ of https://github.com/Wasi-Masi/VolunTrack-WebServices into develop         | Jun 21, 2025   |
| VolunTrack-WebServices  | feature/activities  | 3381186f974146280afca5aa868e01da3ddc7ed6  | Add comments to ActivityRegistration and Notifications                                              | Jun 21, 2025   |
| VolunTrack-WebServices  | develop             | b7d5eb11ddd79c316ac93f4cba1008a6728c482e  | Fix Typo                                                                                            | Jun 21, 2025   |
| VolunTrack-WebServices  | feature/deployment  | 610cf747226b00712f8d762ab2e81468133313ae  | Merge pull request #3 Wasi-Masi/origin/feature/deployment                                           | Jun 21, 2025   |

#### 5.2.3.5. Execution Evidence for Sprint Review.

En el Sprint 3, se llevó a cabo el desarrollo integral de la lógica de negocio de la aplicación, estructurándola en cuatro Bounded Contexts bien definidos: ActivityRegistration, Notifications, Participation y VolunteerRegistration. Cada uno de estos contextos fue implementado siguiendo una arquitectura modular y por capas.
Este diseño permitió una clara separación de responsabilidades dentro de cada contexto. A nivel de Dominio, se definieron las entidades y la lógica de negocio central. La capa de Aplicación se encargó de coordinar las operaciones a través de comandos y queries, y de orquestar los servicios específicos de cada contexto. La Infraestructura proporcionó las implementaciones necesarias, como la persistencia de datos (aunque no se especifica la tecnología aquí, en un contexto real se ubicarían las implementaciones de repositorios). Finalmente, las Interfaces REST expusieron la funcionalidad a través de controladores, manejando la entrada y salida de datos (DTOs).
Este enfoque no solo facilitó el desarrollo simultáneo y el mantenimiento del sistema, sino que también aseguró la adherencia a principios de diseño robustos, promoviendo la cohesión y el bajo acoplamiento. Como resultado, se culminó con la exposición de una API RESTful que fue completamente documentada con Swagger para su consumo eficiente, proporcionando una guía clara y usable para los desarrolladores que interactúen con el sistema.

- Estructura del proyecto demostrando el uso de bounded contexts:

<p align="center">
  <img src="https://github.com/user-attachments/assets/1f8403e8-6c24-4d30-9298-27e95324fc5d" alt="VolunTrack backend structure">
</p>

- Base de datos en MYSQL creada a partir del código:

<p align="center">
  <img src="https://github.com/user-attachments/assets/1ed73ff4-752a-46c4-80d4-f9d40a2eb332" alt="MySQL Database">
</p>

- Endpoints implementados visibles en Swagger:

<p align="center">
  <img src="https://github.com/user-attachments/assets/94ec84bf-c586-4e44-8246-27c99addd9ec" alt="Endpoints p1">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/d48bf256-0e1f-46fc-9ca4-a7634e7126e8" alt="Endpoints p2">
</p>

Link del video de Execution Evidence for Sprint Review: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/Edy2FnqV-A5Mr6FxVXD_iekBLGNNL507SKO8-1Akm7n69w?e=MKo7IV

#### 5.2.3.6. Services Documentation Evidence for Sprint Review

Durante el Sprint 3, el equipo de desarrollo documentó exhaustivamente los Web Services utilizando Swagger UI. Esto garantiza el correcto entendimiento, uso y mantenimiento de la API. La documentación está completa para los bounded contexts de ActivityRegistration, Notifications, Participation y VolunteerRegistration. Para cada endpoint, se detallan las acciones, el verbo HTTP, la sintaxis de llamada, la especificación de parámetros, ejemplos de request y response, junto con una explicación detallada. Esta minuciosa documentación es crucial para el uso eficiente de la API por parte del frontend.

| Endpoint              | Acción                                                                                 | Verbo HTTP | Sintaxis de llamada         | Parámetros                                                                                                           | Ejemplo de Request                                                                                                                                         | Ejemplo de Response                                                                                                                                         | Explicación                                                                                                                                                                                                                                                                                                                                                               |
|-----------------------|----------------------------------------------------------------------------------------|------------|------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /api/v1/organizations | Este endpoint crea una nueva organización en el sistema.                              | POST       | POST /api/v1/organizations   | Body JSON: <br> {<br> "name": "string",<br> "description": "string",<br> "email": "string",<br> "plan": "string"<br>} | POST /api/v1/organizations<br>{<br>"name": "ONG Ayuda Comunitaria",<br>"description": "Organización dedicada a la asistencia social en comunidades vulnerables.",<br>"email": "contacto@ongayudacomunitaria.org",<br>"plan": "Premium"<br>} | {<br>"id": 1,<br>"name": "ONG Ayuda Comunitaria",<br>"description": "Organización dedicada a la asistencia social en comunidades vulnerables.",<br>"email": "contacto@ongayudacomunitaria.org",<br>"plan": "Premium"<br>} | Este endpoint permite registrar una nueva organización en el sistema. Se debe enviar un objeto JSON con el nombre (`name`) de la organización, una descripción (`description`), su correo electrónico (`email`) de contacto y el plan (`plan`) al que está suscrita. Una respuesta exitosa (`201 Created`) indicará que la organización ha sido creada correctamente y, por lo general, devolverá el objeto de la organización con el `id` asignado, que en nuestro ejemplo es `1`. |
| /api/v1/organizations/{organizationId} | Este endpoint recupera los detalles de una organización mediante su identificador único. | GET | GET /api/v1/organizations/{organizationId} | organizationId: int | GET /api/v1/organizations/1 | {<br> "id": 1,<br> "name": "ONG Ayuda Comunitaria",<br> "description": "Organización dedicada a la asistencia social en comunidades vulnerables.",<br> "email": "contacto@ongayudacomunitaria.org",<br> "plan": "Premium"<br>} | Este endpoint permite obtener la información detallada de una organización específica utilizando su `organizationId`. El `organizationId` debe ser proporcionado como parte de la URL (parámetro de ruta). Una respuesta exitosa (`200 OK`) devolverá un objeto JSON con todos los datos de la organización correspondiente al ID especificado, como el nombre, descripción, correo electrónico y plan. |
| /api/v1/organizations/{organizationId} | Este endpoint actualiza los detalles de una organización existente | PUT | PUT /api/v1/organizations/{organizationId} | organizationId: int<br>Body JSON:<br>{<br> "name": "string",<br> "description": "string",<br> "email": "string",<br> "plan": "string"<br>} | PUT /api/v1/organizations/1<br>{<br> "name": "ONG Ayuda Global",<br> "description": "Organización internacional dedicada a la asistencia humanitaria.",<br> "email": "info@ongayudaglobal.org",<br> "plan": "Enterprise"<br>} | {<br> "id": 1,<br> "name": "ONG Ayuda Global",<br> "description": "Organización internacional dedicada a la asistencia humanitaria.",<br> "email": "info@ongayudaglobal.org",<br> "plan": "Enterprise"<br>} | Este endpoint permite actualizar la información de una organización existente utilizando su `organizationId` como identificador en la URL. Se debe enviar un objeto JSON en el cuerpo de la solicitud con los campos que se desean modificar (nombre, descripción, correo electrónico, plan). La respuesta exitosa (`200 OK`) devolverá un objeto JSON con los datos actualizados de la organización, incluyendo el `id` (en nuestro ejemplo, 1). |
| /api/v1/organizations/{organizationId} | Este endpoint elimina una organización del sistema mediante su identificador único. | DELETE | DELETE /api/v1/organizations/{organizationId} | organizationId: int | DELETE /api/v1/organizations/1 | {} | Este endpoint permite eliminar una organización existente del sistema. Para ello, se debe proporcionar el `organizationId` de la organización que se desea eliminar como parte de la URL (parámetro de ruta). Una respuesta exitosa (`200 OK`) generalmente indica que la organización ha sido eliminada correctamente. La respuesta puede ser un objeto JSON vacío o un mensaje de confirmación, dependiendo de la implementación de la API. |
| /api/v1/volunteers | Este endpoint crea un nuevo voluntario con los detalles proporcionados. | POST | POST /api/v1/volunteers | Body JSON: {<br> "firstName": "string",<br> "lastName": "string",<br> "dni": "string",<br> "dateOfBirth": "2021-06-22",<br> "email": "string",<br> "phoneNumber": "string",<br> "address": "string",<br> "organizationId": 0,<br> "profession": "string"<br>} | POST /api/v1/volunteers<br>{<br>"firstName": "Ana",<br>"lastName": "García",<br>"dni": "87654321",<br>"dateOfBirth": "1995-03-10",<br>"email": "ana.garcia@example.com",<br>"phoneNumber": "+51999888777",<br>"address": "Calle Falsa 123, Miraflores",<br>"organizationId": 1,<br>"profession": "Diseñadora Gráfica"<br>} | {<br>"id": 1,<br>"firstName": "Ana",<br>"lastName": "García",<br>"dni": "87654321",<br>"dateOfBirth": "1995-03-10T00:00:00Z",<br>"email": "ana.garcia@example.com",<br>"phoneNumber": "+51999888777",<br>"address": "Calle Falsa 123, Miraflores",<br>"organizationId": 1,<br>"profession": "Diseñadora Gráfica"<br>} | Este endpoint permite crear un nuevo registro de voluntario en el sistema. Se requiere enviar un objeto JSON con los datos del voluntario. Una respuesta exitosa (201 Created) devolverá el objeto creado con el id asignado. |
| /api/v1/volunteers | Este endpoint recupera una lista de todos los voluntarios registrados. | GET | GET /api/v1/volunteers | No hay parámetros de ruta ni de consulta. | GET /api/v1/volunteers | [<br>{ "id": 1, "firstName": "Ana", ... },<br>{ "id": 2, "firstName": "Pedro", ... }<br>] | Este endpoint permite obtener una lista completa de todos los voluntarios registrados en el sistema. No requiere parámetros. La respuesta (200 OK) es una lista de objetos con la información de cada voluntario. |
| /api/v1/volunteers/{volunteerId} | Este endpoint actualiza los detalles de un voluntario existente. | PUT | PUT /api/v1/volunteers/{volunteerId} | volunteerId: int<br>Body JSON: {<br>"firstName": "string",<br>"lastName": "string",<br>"dni": "string",<br>"dateOfBirth": "2025-06-22",<br>"email": "string",<br>"phoneNumber": "string",<br>"address": "string",<br>"status": "ACTIVE"<br>} | PUT /api/v1/volunteers/1<br>{<br>"firstName": "Ana Sofía",<br>"lastName": "García López",<br>"dni": "87654321",<br>"dateOfBirth": "1995-03-10",<br>"email": "ana.sofia.garcia@example.com",<br>"phoneNumber": "+51999888770",<br>"address": "Av. La Paz 100, Miraflores",<br>"status": "INACTIVE"<br>} | {<br>"id": 1,<br>"firstName": "Ana Sofía",<br>"lastName": "García López",<br>"dni": "87654321",<br>"dateOfBirth": "1995-03-10T00:00:00Z",<br>"email": "ana.sofia.garcia@example.com",<br>"phoneNumber": "+51999888770",<br>"address": "Av. La Paz 100, Miraflores",<br>"organizationId": 1,<br>"profession": "Diseñadora Gráfica",<br>"status": "INACTIVE"<br>} | Este endpoint permite actualizar la información de un voluntario existente usando su `volunteerId`. El cuerpo debe contener los campos a modificar. `organizationId` y `profession` no se pueden modificar en esta operación según Swagger. La respuesta (200 OK) devuelve el objeto actualizado. |
| /api/v1/volunteers/{volunteerId} | Este endpoint elimina un voluntario del sistema mediante su identificador único. | DELETE | DELETE /api/v1/volunteers/{volunteerId} | volunteerId: int | DELETE /api/v1/volunteers/1 | {} | Este endpoint permite eliminar un voluntario existente del sistema. Se debe proporcionar el volunteerId como parámetro de ruta. Una respuesta exitosa (200 OK) indica que fue eliminado correctamente, devolviendo un cuerpo vacío. |
| /api/v1/activities | Este endpoint crea una nueva actividad en el sistema. | POST | POST /api/v1/activities | Body JSON: {<br>"fecha": "2025-06-22",<br>"horaInicio": "string",<br>"horaFin": "string",<br>"titulo": "string",<br>"descripcion": "string",<br>"instrucciones": "string",<br>"proposito": "string",<br>"cupos": 0,<br>"ubicacion": "string",<br>"estado": "string",<br>"organizacionId": 0<br>} | POST /api/v1/activities<br>{<br>"fecha": "2025-07-01",<br>"horaInicio": "09:00",<br>"horaFin": "12:00",<br>"titulo": "Jornada de Limpieza de Playas",<br>"descripcion": "Limpieza general de la playa de Barranco para fomentar el cuidado ambiental.",<br>"instrucciones": "Llevar guantes, bloqueador solar y gorra.",<br>"proposito": "Reducir la contaminación plástica en la costa.",<br>"cupos": 50,<br>"ubicacion": "Playa de Barranco",<br>"estado": "ACTIVA",<br>"organizacionId": 1<br>} | {<br>"id": 1,<br>"fecha": "2025-07-01",<br>"horaInicio": "09:00",<br>"horaFin": "12:00",<br>"titulo": "Jornada de Limpieza de Playas",<br>"descripcion": "Limpieza general de la playa de Barranco para fomentar el cuidado ambiental.",<br>"instrucciones": "Llevar guantes, bloqueador solar y gorra.",<br>"proposito": "Reducir la contaminación plástica en la costa.",<br>"cupos": 50,<br>"ubicacion": "Playa de Barranco",<br>"estado": "ACTIVA",<br>"organizacionId": 1<br>} | Este endpoint permite crear una nueva actividad en el sistema. Se debe enviar un objeto JSON con los campos requeridos. Una respuesta (201 Created) devolverá el objeto creado con su id asignado. |
| /api/v1/activities | Este endpoint recupera una lista de todas las actividades registradas. | GET | GET /api/v1/activities | No hay parámetros. | GET /api/v1/activities | [<br>{ "actividad_id": 1, "fecha": "2025-07-01", ... },<br>{ "actividad_id": 2, "fecha": "2025-07-15", ... }<br>] | Este endpoint permite obtener una lista completa de actividades registradas. La respuesta (200 OK) es un arreglo de objetos JSON, cada uno con los detalles de una actividad. |
| /api/v1/activities/{activityId} | Este endpoint recupera los detalles de una actividad mediante su identificador único. | GET | GET /api/v1/activities/{activityId} | activityId: int | GET /api/v1/activities/1 | {<br>"actividad_id": 1,<br>"fecha": "2025-07-01",<br>"horaInicio": "09:00",<br>"horaFin": "12:00",<br>"titulo": "Jornada de Limpieza de Playas",<br>"descripcion": "Limpieza general de la playa de Barranco para fomentar el cuidado ambiental.",<br>"instrucciones": "Llevar guantes, bloqueador solar y gorra.",<br>"proposito": "Reducir la contaminación plástica en la costa.",<br>"cupos": 50,<br>"ubicacion": "Playa de Barranco",<br>"estado": "ACTIVA",<br>"organizacionId": 1<br>} | Este endpoint permite obtener la información detallada de una actividad específica utilizando su activityId. La respuesta (200 OK) incluirá todos los campos de la actividad. |
| /api/v1/activities/{activityId} | Este endpoint actualiza los detalles de una actividad existente. | PUT | PUT /api/v1/activities/{activityId} | activityId: int<br>Body JSON:<br>{<br>"fecha": "2025-06-22",<br>"horaInicio": "string",<br>"horaFin": "string",<br>"titulo": "string",<br>"descripcion": "string",<br>"instrucciones": "string",<br>"proposito": "string",<br>"cupos": 0,<br>"ubicacion": "string",<br>"estado": "string",<br>"organizacionId": 0<br>} | PUT /api/v1/activities/1<br>{<br>"fecha": "2025-07-05",<br>"horaInicio": "10:00",<br>"horaFin": "13:00",<br>"titulo": "Jornada de Limpieza de Playas - Edición 2",<br>"descripcion": "Segunda jornada de limpieza en la playa de Barranco, enfocada en microplásticos.",<br>"instrucciones": "Llevar protector solar, gorra y botella de agua reutilizable.",<br>"proposito": "Continuar con la reducción de residuos plásticos y concienciar a la comunidad.",<br>"cupos": 60,<br>"ubicacion": "Playa de Barranco",<br>"estado": "PENDIENTE",<br>"organizacionId": 1<br>} | {<br>"actividad_id": 1,<br>"fecha": "2025-07-05",<br>"horaInicio": "10:00",<br>"horaFin": "13:00",<br>"titulo": "Jornada de Limpieza de Playas - Edición 2",<br>"descripcion": "Segunda jornada de limpieza en la playa de Barranco, enfocada en microplásticos.",<br>"instrucciones": "Llevar protector solar, gorra y botella de agua reutilizable.",<br>"proposito": "Continuar con la reducción de residuos plásticos y concienciar a la comunidad.",<br>"cupos": 60,<br>"ubicacion": "Playa de Barranco",<br>"estado": "PENDIENTE",<br>"organizacionId": 1<br>} | Este endpoint permite modificar los datos de una actividad existente usando su activityId. Se debe enviar un JSON con los campos actualizados. Una respuesta exitosa (200 OK) devolverá los datos actualizados. |
| /api/v1/activities/{activityId} | Este endpoint elimina una actividad del sistema mediante su identificador único. | DELETE | DELETE /api/v1/activities/{activityId} | activityId: int | DELETE /api/v1/activities/1 | {} | Este endpoint permite eliminar una actividad existente usando su activityId. Una respuesta exitosa (200 OK) indica que fue eliminada correctamente y retorna un cuerpo vacío. |
| /api/v1/inscriptions | Este endpoint crea una nueva inscripción en el sistema. | POST | POST /api/v1/inscriptions | Body JSON:<br>{ "voluntarioId": 0, "estado": "PENDING", "fecha": "2025-06-22", "actividadId": 0 } | POST /api/v1/inscriptions<br>{ "voluntarioId": 1, "estado": "PENDING", "fecha": "2025-06-22", "actividadId": 1 } | {<br>"inscription_id": 1,<br>"voluntarioId": 1,<br>"estado": "PENDING",<br>"fecha": "2025-06-22",<br>"actividadId": 1<br>} | Este endpoint permite registrar una inscripción de un voluntario a una actividad. Se debe enviar un JSON con voluntarioId, estado, fecha y actividadId. Una respuesta exitosa (200 OK) devolverá el objeto creado con su inscription_id. |
| /api/v1/inscriptions | Este endpoint recupera una lista de todas las inscripciones registradas. | GET | GET /api/v1/inscriptions | No hay parámetros. | GET /api/v1/inscriptions | [<br>{ "inscription_id": 1, "voluntarioId": 1, "estado": "PENDING", "fecha": "2025-06-22", "actividadId": 1 },<br>{ "inscription_id": 2, "voluntarioId": 2, "estado": "APPROVED", "fecha": "2025-06-23", "actividadId": 1 },<br>{ "inscription_id": 3, "voluntarioId": 1, "estado": "CANCELLED", "fecha": "2025-06-24", "actividadId": 2 }<br>] | Este endpoint permite obtener todas las inscripciones registradas. No requiere parámetros. La respuesta (200 OK) es una lista JSON con inscription_id, voluntarioId, estado, fecha y actividadId. |
| /api/v1/inscriptions/{inscriptionId} | Este endpoint recupera los detalles de una inscripción mediante su identificador único. | GET | GET /api/v1/inscriptions/{inscriptionId} | inscriptionId: int | GET /api/v1/inscriptions/1 | { "inscription_id": 1, "voluntarioId": 1, "estado": "PENDING", "fecha": "2025-06-22", "actividadId": 1 } | Este endpoint permite obtener los detalles de una inscripción específica mediante su inscriptionId. La respuesta (200 OK) incluirá los datos del voluntario, estado, fecha y actividad vinculada. |
| /api/v1/inscriptions/byActivity/{activityId} | Este endpoint recupera una lista de inscripciones asociadas a un ID de actividad específico. | GET | GET /api/v1/inscriptions/byActivity/{activityId} | activityId: int | GET /api/v1/inscriptions/byActivity/1 | [<br>{ "inscription_id": 1, "voluntarioId": 1, "estado": "PENDING", "fecha": "2025-06-22", "actividadId": 1 },<br>{ "inscription_id": 2, "voluntarioId": 2, "estado": "APPROVED", "fecha": "2025-06-23", "actividadId": 1 }<br>] | Este endpoint permite obtener todas las inscripciones asociadas a una actividad específica. Se debe indicar el activityId en la URL. Una respuesta exitosa (200 OK) devolverá una lista de objetos JSON con los detalles de cada inscripción. |
| /api/v1/inscriptions/{inscriptionId} | Este endpoint actualiza los detalles de una inscripción existente. | PUT | PUT /api/v1/inscriptions/{inscriptionId} | inscriptionId: int<br>Body JSON:<br>{ "voluntarioId": 0, "estado": "PENDING", "fecha": "2025-06-22", "actividadId": 0 } | PUT /api/v1/inscriptions/1<br>{ "voluntarioId": 1, "estado": "APPROVED", "fecha": "2025-06-22", "actividadId": 1 } | {<br>"inscription_id": 1,<br>"voluntarioId": 1,<br>"estado": "APPROVED",<br>"fecha": "2025-06-22",<br>"actividadId": 1<br>} | Este endpoint permite actualizar una inscripción existente usando su inscriptionId. El cuerpo debe contener voluntarioId, estado, fecha y actividadId. La respuesta (200 OK) mostrará los datos actualizados de la inscripción. |
| /api/v1/inscriptions/{inscriptionId} | Este endpoint elimina una inscripción del sistema mediante su identificador único. | DELETE | DELETE /api/v1/inscriptions/{inscriptionId} | inscriptionId: int | DELETE /api/v1/inscriptions/1 | {} | Este endpoint elimina una inscripción existente identificada por su inscriptionId. Se debe incluir el ID en la URL. Una respuesta exitosa (200 OK) confirma la eliminación con un cuerpo vacío. |
| /api/v1/participations | Este endpoint crea una nueva participación en el sistema, vinculando un voluntario a una actividad. | POST | POST /api/v1/participations | Body JSON:<br>{ "volunteerId": 0, "activityId": 0, "initialStatus": "REGISTERED" } | POST /api/v1/participations<br>{ "volunteerId": 1, "activityId": 1, "initialStatus": "REGISTERED" } | { "id": 1, "volunteerId": 1, "activityId": 1, "status": "REGISTERED" } | Este endpoint permite registrar la participación de un voluntario en una actividad específica. Se deben enviar los IDs de voluntario y actividad, así como el estado inicial. Una respuesta exitosa (200 OK) devuelve la participación creada con su ID asignado. |
| /api/v1/participations/by-volunteer/{volunteerId} | Este endpoint recupera una lista de participaciones asociadas a un ID de voluntario específico. | GET | GET /api/v1/participations/by-volunteer/{volunteerId} | volunteerId: int | GET /api/v1/participations/by-volunteer/1 | [<br>{ "id": 1, "volunteerId": 1, "activityId": 1, "status": "REGISTERED" },<br>{ "id": 2, "volunteerId": 1, "activityId": 2, "status": "COMPLETED" }<br>] | Este endpoint permite obtener todas las participaciones de un voluntario específico. Requiere indicar el volunteerId en la URL. Devuelve una lista de objetos con el ID, volunteerId, activityId y estado de cada participación. |
| /api/v1/participations/by-activity/{activityId} | Este endpoint recupera una lista de participaciones asociadas a un ID de actividad específico. | GET | GET /api/v1/participations/by-activity/{activityId} | activityId: int | GET /api/v1/participations/by-activity/1 | [<br>{ "id": 1, "volunteerId": 1, "activityId": 1, "status": "REGISTERED" },<br>{ "id": 3, "volunteerId": 2, "activityId": 1, "status": "APPROVED" }<br>] | Este endpoint permite obtener todas las participaciones registradas para una actividad específica. Se debe indicar el activityId en la URL. Devuelve una lista con los detalles de cada participación. |
| /api/v1/certificates | Este endpoint crea un nuevo certificado en el sistema. | POST | POST /api/v1/certificates | Body JSON:<br>{ "participationId": 0, "description": "string" } | POST /api/v1/certificates<br>{ "participationId": 1, "description": "Certificado de participación en Jornada de Limpieza de Playas." } | { "id": 1, "participationId": 1, "description": "Certificado de participación en Jornada de Limpieza de Playas." } | Permite registrar un nuevo certificado asociado a una participación existente. Es necesario enviar el participationId y una descripción. La respuesta devuelve el objeto certificado con su id. |
| /api/v1/certificates/by-volunteer/{volunteerId} | Este endpoint recupera una lista de certificados asociados a un ID de voluntario específico. | GET | GET /api/v1/certificates/by-volunteer/{volunteerId} | volunteerId: int | GET /api/v1/certificates/by-volunteer/1 | [<br>{ "id": 1, "description": "Certificado de participación en Jornada de Limpieza de Playas.", "participationId": 1 },<br>{ "id": 2, "description": "Certificado de reconocimiento por el Taller de Reciclaje Urbano.", "participationId": 2 }<br>] | Permite obtener todos los certificados emitidos para un voluntario determinado. Se debe indicar el volunteerId en la URL. La respuesta devuelve una lista de objetos con el id, descripción y participationId de cada certificado. |
| /api/v1/notifications | Este endpoint crea una nueva notificación en el sistema. | POST | POST /api/v1/notifications | Body JSON:<br>{ "type": "string", "recipientId": 0, "recipientType": "VOLUNTEER" } | POST /api/v1/notifications<br>{ "type": "SIGNUP", "recipientId": 1, "recipientType": "VOLUNTEER" } | { "id": 1, "type": "SIGNUP", "recipientId": 1, "recipientType": "VOLUNTEER", "createdAt": "2025-06-21T08:38:32.000Z", "read": false } | Permite crear una nueva notificación para un destinatario específico. Se debe enviar el tipo de notificación, el ID del destinatario y su tipo. La respuesta incluye los detalles de la notificación, como fecha y estado de lectura. |
| /api/v1/notifications | Este endpoint recupera una lista de todas las notificaciones registradas. | GET | GET /api/v1/notifications | No hay parámetros | GET /api/v1/notifications | [ { "id": 1, "type": "SIGNUP", "recipientId": 1, "recipientType": "VOLUNTEER", "createdAt": "2025-06-21T08:38:32.000Z", "read": false }, { "id": 2, "type": "ACTIVITY_REMINDER", "recipientId": 1, "recipientType": "VOLUNTEER", "createdAt": "2025-06-20T10:00:00.000Z", "read": true }, { "id": 3, "type": "NEW_VOLUNTEER", "recipientId": 1, "recipientType": "ORGANIZATION", "createdAt": "2025-06-19T15:00:00.000Z", "read": false } ] | Permite obtener todas las notificaciones existentes. La respuesta es una lista de objetos JSON, cada uno con los detalles como id, tipo, destinatario, fecha y estado de lectura. |
| /api/v1/notifications/byRecipient/{recipientType}/{recipientId} | Este endpoint recupera una lista de notificaciones para un tipo de recipiente y un ID de recipiente específicos. | GET | GET /api/v1/notifications/byRecipient/{recipientType}/{recipientId} | recipientType: string ("VOLUNTEER" o "ORGANIZATION")<br>recipientId: int | GET /api/v1/notifications/byRecipient/VOLUNTEER/1 | [ { "id": 1, "type": "SIGNUP", "message": "Bienvenido al sistema de voluntariado.", "createdAt": "2025-06-21T08:38:32.000Z", "recipientId": 1, "recipientType": "VOLUNTEER", "read": false }, { "id": 2, "type": "ACTIVITY_REMINDER", "message": "Recordatorio: Tu actividad de limpieza de playas es mañana.", "createdAt": "2025-06-20T10:00:00.000Z", "recipientId": 1, "recipientType": "VOLUNTEER", "read": true } ] | Permite filtrar las notificaciones según el tipo de destinatario y su ID. La respuesta es una lista de objetos con información específica para cada notificación, incluyendo un mensaje. |
| /api/v1/notifications/{notificationId} | Este endpoint elimina una notificación del sistema mediante su identificador único. | DELETE | DELETE /api/v1/notifications/{notificationId} | notificationId: int | DELETE /api/v1/notifications/1 | {} | Permite eliminar una notificación específica. Se debe indicar el notificationId en la URL. Una respuesta exitosa (200 OK) confirma la eliminación, devolviendo un cuerpo vacío. |

- Creación de una organización utilizando el método POST.

<p align="center">
  <img src="https://github.com/user-attachments/assets/22ca5663-964b-48d4-9c64-35c1bdc3cd39" alt="Organizations POST">
</p>

- Consulta de una organización por su ID mediante el método GET.

<p align="center">
  <img src="https://github.com/user-attachments/assets/62b945d0-1679-4b13-b99b-1361094d5998" alt="Organizations GET by id">
</p>

- Creación de Voluntario mediante el método POST. Para ello, previamente debe existir una organización.

<p align="center">
  <img src="https://github.com/user-attachments/assets/6b7b4c2c-49cc-421d-acee-7daca17fbaf8" alt="Volunteers POST">
</p>

- Consulta de voluntarios mediante el método GET.

<p align="center">
  <img src="https://github.com/user-attachments/assets/bca4406f-e820-4b64-b002-751f655344b9" alt="Volunteers GET">
</p>

- Creación de actividad mediante el método POST. Para ello ya debe existir una organización.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7c0ccd5e-ed4e-45da-b4cc-77b5de22f4cb" alt="Activity POST">
</p>

- Consulta de todas las actividades mediante el método GET.

<p align="center">
  <img src="https://github.com/user-attachments/assets/0587c69c-f909-4348-868d-fc34463457b2" alt="Activity GET">
</p>

- Registro de una inscripción mediante el método POST. Para ello ya deben existir al menos un voluntario y una actividad.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d27a263c-7bca-4484-89d3-fdf8e1bba75e" alt="Inscription POST">
</p>

- Consulta de inscripciones realizadas en una actividad mediante el método GET.

<p align="center">
  <img src="https://github.com/user-attachments/assets/be125dbf-dabb-4035-9213-fc5ef5ffa613" alt="Inscription GET">
</p>

- Consulta de notificaciones de una organización en espefíco. Los parámetros de esta consulta consideran que elijas entre una organización o un voluntario en específico. Se aprecian las notificaciones relevantes para la organización, como la creación de una actividad o la inscripción de un voluntario a una actividad.

<p align="center">
  <img src="https://github.com/user-attachments/assets/6212e79b-46e7-421c-a7a4-206bb8513a18" alt="Notifications GET">
</p>

#### 5.2.3.7. Software Deployment Evidence for Sprint Review

<p align="center">
  <img src="./assets/dockerfile.png" alt=dockerfile" width="700">
</p>
<p align="center"><strong>Figura 171.</strong> Implementación del archivo docker para la configuración del deploy mediante Render</p>

<p align="center">
  <img src="./assets/docker-file.jpg" alt=properties" width="700">
</p>
<p align="center"><strong>Figura 172.</strong> Implementación de Application-Properties dedicado para producción en Render con las variables de entorno pre-configuradas </p>

<p align="center">
  <img src="./assets/database-rail.png" alt=database" width="700">
</p>
<p align="center"><strong>Figura 172.</strong> Deployment del database mediante RailWay para que esté preparado y con los permisos necesarios para que Render pueda trabajar sin errores con las tablas</p>

<p align="center">
  <img src="./assets/config-back.jpg" alt=configback" width="700">
</p>
<p align="center"><strong>Figura 172.</strong> Configuración del back mediante git bash para que esté preparado y con los permisos necesarios para que Render pueda trabajar sin errores</p>

<p align="center">
  <img src="./assets/config-branch.jpg" alt=configbranch" width="700">
</p>
<p align="center"><strong>Figura 173.</strong> Configuración de Render y la rama Develop para que coincida con la producción hecha</p>

<p align="center">
  <img src="./assets/deploy-1.jpg" alt=deploy1" width="700">
</p>
<p align="center"><strong>Figura 174.</strong> Building del backend en Render</p>

<p align="center">
  <img src="./assets/deploy-3.jpg" alt=deploy2" width="700">
</p>
<p align="center"><strong>Figura 175.</strong> Backend desplegado correctamente en Render</p>

<p align="center">
  <img src="./assets/back-deploy.jpg" alt=dockerfile" width="700">
</p>
<p align="center"><strong>Figura 176.</strong> Backend funcionando correctamente mediante la URL </p>

[URL del Backend funcional](https://voluntrack-webservices.onrender.com/swagger-ui/index.html)


#### 5.2.3.8. Team Collaboration Insights during Sprint

Durante el Sprint 3, el equipo VolunTrack prosiguió con la implementación de la metodología ágil Scrum y las herramientas de colaboración establecidas, esta vez enfocándose en el desarrollo del backend y la lógica de negocio de la aplicación web. Este sprint se distinguió por un esfuerzo intensivo y coordinado en la construcción de una arquitectura robusta, materializada en cuatro Bounded Contexts principales: VolunteerRegistration, ActivityRegistration, Notifications y Participation. La comunicación se mantuvo fluida y constante a través de nuestro grupo de Whatsapp y Discord, complementada con reuniones realizadas en días libres para una sincronización efectiva, mientras que la gestión y seguimiento de las tareas continuó centralizada en Pivotal Tracker.
<p align="center">
  <img src="https://github.com/user-attachments/assets/f8c36ef2-bb18-4497-ac8b-740c09efad22" alt="pivotal tracker">
</p>

Uso de Herramientas de Colaboración (GitHub): 
<p align="center">
  <img src="https://github.com/user-attachments/assets/3eb8c21d-7e80-4365-abeb-62d6a45bd71e" alt="herramientas de colaboración">
</p>

Evidencia de las ramas
<p align="center">
  <img src="https://github.com/user-attachments/assets/c803bf37-38aa-4cff-91b2-335439e1d2c9" alt="ramas del repositorio">
</p>

Evidencia de commits por integrante del grupo
<p align="center">
  <img src="https://github.com/user-attachments/assets/7e4c3303-af1a-4d31-8244-5726e50e4e58" alt="commits por integrante">
</p>

### 5.2.4. Sprint 4

#### 5.2.4.1. Sprint Planning

| **Sprint #**                    | Sprint 4 |
|--------------------------------|----------|
|                                | **Sprint Planning Background** |
| **Date**                       | 2025-07-09 |
| **Time**                       | 1:30 PM |
| **Location**                   | Virtual |
| **Prepared By**                | Binda Arbañil Marcelo Alejandro |
| **Attendees (to planning meeting)** | Ainhoa Lucía Castillo Garay / Marcelo Alejandro Binda Arbañil / Martel Andradre Cassius Estefano / Nakamurakare Teruya Alex Tomio / Ortiz Alarcón Victor Nicolas / George Galván Cerrón |
| **Sprint 3 Review Summary**    | Durante el Sprint 3, el equipo de VolunTrack se centró en el desarrollo e implementación de las funcionalidades centrales del backend. Esto incluyó la construcción de todos los bounded contexts de la aplicación (ActivityRegistration, Notifications, Participation y VolunteerRegistration) y su respectivo código, lo que generó los endpoints RESTful necesarios para la gestión de datos. El objetivo principal fue establecer una base de datos robusta, implementar la lógica de negocio eficiente y asegurar la creación de endpoints API funcionales para las entidades clave del sistema. La finalización de esta fase del backend fue crucial para preparar la integración con el frontend. |
| **Sprint 3 Retrospective Summary** | En la retrospectiva del Sprint 3, el equipo de VolunTrack valoró positivamente el progreso en la construcción de los bounded contexts del backend y la exposición de los endpoints RESTful. Se destacó la consolidación de la lógica de negocio y la gestión de datos para los dominios de ActivityRegistration, Notifications, Participation y VolunteerRegistration, lo que estableció una base sólida para la aplicación. Sin embargo, se identificó la necesidad de una preparación más profunda para la integración con el frontend, incluyendo la definición clara de los mecanismos de seguridad y autenticación. El equipo acordó priorizar estas integraciones y la documentación detallada de la API en el siguiente sprint para facilitar el trabajo del frontend y asegurar una colaboración fluida. |
|                                | **Sprint Goal & User Stories** |
| **Sprint 4 Goal**              | Our primary focus in Sprint 4 is to establish robust and secure connectivity between the frontend and backend of VolunTrack, with a particular emphasis on implementing and integrating the JWT-based authentication system. We aim to enable seamless user registration, login, and secure access to protected resources, ensuring that the frontend can interact effectively and safely with the backend API. <br><br>We believe this approach will deliver a fully integrated and authenticated user experience, validating the backend's security mechanisms and empowering frontend developers to build interactive features upon a secure foundation. <br><br>This will be confirmed when users can successfully register, log in, manage their sessions, and access their profile information securely through the frontend, interacting directly with the backend API. |
| **Sprint 4 Velocity**          | 25 |
| **Sum of Story Points**        | 44 (26) |

Si bien la suma total de Story Points asignados a las historias del Sprint 4 asciende a 44 puntos, el esfuerzo efectivo estimado fue de aproximadamente 26 puntos. Esto se debe a que varias funcionalidades ya contaban con avances previos, desarrollados durante las etapas iniciales del proyecto, especialmente en los Sprints 1, 2 y 3, donde se trabajaron aspectos de diseño, lógica de backend e interfaces de usuario. Esta estimación más realista nos permitió mantenernos dentro de nuestra Sprint Velocity de 25 puntos, asegurando una distribución equilibrada de tareas y una planificación acorde a la capacidad operativa del equipo.

#### 5.2.4.2. Aspect Leaders and Collaborators

| **Team Member (Last Name, First Name)** | **Traducciones del backend** | **Tokens** | **Conexión con dashboard** | **Conexión Mis voluntarios** | **Conexión con activity details y create/edit activity** | **Conexión con voluntarios inscritos** | **Conexión con calendario** | **Certificados** | **Notifications** |
|----------------------------------------|-------------------------------|------------|-----------------------------|------------------------------|----------------------------------------------------------|----------------------------------------|----------------------------|------------------|--------------------|
| Castillo Garay, Ainhoa Lucía           | C                             | C          | C                           | L                            | C                                                        | C                                      | C                          | C                | C                  |
| Binda Arbañil, Marcelo Alejandro       | C                             | C          | C                           | C                            | L                                                        | C                                      | C                          | C                | C                  |
| Martel Andrade, Cassius Estefano       | C                             | L          | C                           | C                            | C                                                        | C                                      | C                          | C                | L                  |
| Ortiz Alarcón, Victor Nicolás          | C                             | C          | C                           | C                            | C                                                        | C                                      | C                          | L                | C                  |
| Nakamurake Teruya, Alex Tomio          | C                             | C          | L                           | C                            | C                                                        | L                                      | L                          | C                | C                  |
| Galván Cerrón, George                  | L                             | C          | C                           | C                            | C                                                        | C                                      | C                          | C                | C                  |

#### 5.2.4.3 Sprint Backlog 4

| **Sprint** | **User Story ID** | **Task ID** | **Descripción**                                                                                                            | **Estimación (hrs)** | **Asignado a**                | **Estado** |
|------------|-------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------|----------------------|-------------------------------|------------|
| Sprint #4  | US01              | T01         | Integración de register.component con el backend                                                                            | 1                    | Cassius Martel                | Done       |
| Sprint #4  | US03              | T02         | Integración de create-activity.component con el backend                                                                     | 2                    | Tomio Nakamurakare            | Done       |
|            |                   | T03         | Integración de create-activity.service con el backend                                                                       | 1                    | Tomio Nakamurakare            | Done       |
| Sprint #4  | US04              | T04         | Integración de volunteers.component con el backend                                                                          | 2                    | Ainhoa Castillo               | Done       |
|            |                   | T05         | Integración de volunteers.service con el backend                                                                            | 1                    | Ainhoa Castillo               | Done       |
|            |                   | T06         | Integración de volunteers.entity con el backend                                                                             | 1                    | Ainhoa Castillo               | Done       |
| Sprint #4  | US05              | T07         | Integración de registeredvolunteers.component con el backend                                                                | 2                    | Tomio Nakamurakare            | Done       |
|            |                   | T08         | Integración de registeredvolunteers.service con el backend                                                                  | 1                    | Tomio Nakamurakare            | Done       |
|            |                   | T09         | Integración de registeredvolunteers.etntiy con el backend                                                                   | 1                    | Tomio Nakamurakare            | Done       |
| Sprint #4  | US06              | T10         | Integración de notifications.component con el backend                                                                       | 1                    | Ainhoa Castillo               | Done       |
|            |                   | T11         | Integración de notifications.service con el backend                                                                         | 1                    | Ainhoa Castillo               | Done       |
|            |                   | T12         | Integración de notifications.entity con el backend                                                                          | 1                    | Ainhoa Castillo               | Done       |
| Sprint #4  | US09              | T13         | Integración de certificates-dialog.component con el backend                                                                 | 3                    | Victor Ortíz                  | Done       |
|            |                   | T14         | Integración de certificates-dialog.service con el backend                                                                   | 1                    | Victor Ortíz                  | Done       |
| Sprint #4  | US10              | T15         | Integración de activity-details.component con el backend                                                                    | 2                    | Marcelo Binda                 | Done       |
|            |                   | T16         | Integración de activity-details.service con el backend                                                                      | 1                    | Marcelo Binda                 | Done       |
| Sprint #4  | US20              | T17         | Integración de calendar.component con el backend                                                                            | 3                    | Tomio Nakamurakare            | Done       |
|            |                   | T18         | Integración de calendar.service con el backend                                                                              | 1                    | Tomio Nakamurakare            | Done       |
| Sprint #4  | US21              | T19         | Integración de dashboard.component con el backend                                                                           | 3                    | Tomio Nakamurakare            | Done       |
|            |                   | T20         | Integración de dashboard.service con el backend                                                                             | 1                    | Tomio Nakamurakare            | Done       |
|            |                   | T21         | Integración de dashboard.entity con el backend                                                                              | 1                    | Tomio Nakamurakare            | Done       |
| Sprint #4  | TS08              | T22         | Implementar AuthenticationController y DTOs (SignInResource, SignUpResource, AuthenticationResponseResource) para /auth.   | 2                    | Cassius Martel                | Done       |
|            |                   | T23         | Desarrollar TokenService y JwtAuthenticationFilter para generación y validación de JWTs                                    | 2                    | Cassius Martel                | Done       |
| Sprint #4  | TS09              | T24         | Actualizar el backend y frontend para /api/users/{userId} y /api/users/me                                                   | 3                    | Cassius Martel                | Done       |
| Sprint #4  | TS10              | T25         | Crear y modificar archivos iniciales para es y en (mensajes de éxito y errores de validación)                              | 2                    | George Galván                 | Done       |
|            |                   | T26         | Configurar la localización de mensajes de Bean Validation                                                                   | 1                    | George Galván                 | Done       |

Evidencia del Sprint en Jiro:

<p align="center">
  <img src="https://imgur.com/op6ybde.png" alt="sprrr4-0">
</p>

<p align="center">
  <img src="https://imgur.com/M6A6TBk.png" alt="sprrr4-1">
</p>

#### 5.2.4.4. Development Evidence for Sprint Review

| Repository              | Branch               | Commit ID                               | Commit Message                                                                                   | Committed on   |
|:------------------------|:---------------------|:----------------------------------------|:--------------------------------------------------------------------------------------------------|:---------------|
| VolunTrack-WebServices  | develop              | 1b0f28e33f4055419e5e1be243a142568f7760b8| Pulling latest changes into develop                                                               | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 2ac9bdf437639dab423cc59c11422b240aeb1837| Updating visual for user profile                                                                  | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 12b60849a9ef84d33167be52b21840f77d41358c| Merge branch 'feature/volunteers' into develop                                                    | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 3e4373066b3c1afef00d89f80f8102afbf114b16| Add aditional participation endpoint                                                              | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 0dc177570c74ddd62612e27b9c3506af6110b1c8| Add endpoints for volunteer registration in activities                                            | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 0dc177570c74ddd62612e27b9c3506af6110b1c8| Add organization id attribute into User aggregate                                                 | Jul 9, 2025    |
| VolunTrack-WebServices  | feature-i18n         | c0622008581af4bf94626949a5ebf2df3ae1068b| feat: added i18n 2                                                                                | Jul 9, 2025    |
| VolunTrack-WebServices  | feature-i18n         | c6827c61ee60d4ca2bf2b54caeef2b705f215131| feat: added i18n                                                                                  | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 61984b5daf6bf589ea0c2dc2012b958e4fec25bb| Merge branch 'feature/user' into develop                                                          | Jul 9, 2025    |
| VolunTrack-WebServices  | feature/user         | 87db974f7e7c29cd42aefad9fae8306c4b0b0680| Add endpoints for user management                                                                 | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | cb71685d5c4b98062518d626ad049135113b0fe3| Fix activity images fetching                                                                      | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 21ad178918f6f4c8714cdca3f9d262ed8e3a296a| Add activity image value object                                                                   | Jul 9, 2025    |
| VolunTrack-WebServices  | develop              | 536e78acabebbee19a0dd585931fb1f552ecfc31| Add form validation for activity                                                                  | Jul 9, 2025    |
| VolunTrack-WebServices  | add-activit          | 7c441319b1b5583a0964464fab4114dd20994010| Implement backend integration for volunteer registration for activities                          | Jul 9, 2025    |
| VolunTrack-WebServices  | volunteer-creation   | ae24d35be5106c1c43d3fda28c4f10b14351935a| Implement volunteer panel integration with backend                                                | Jul 9, 2025    |
| VolunTrack-WebServices  | activity-integration | f5292e3ba1c6ccd8e5c5f6f4adfe192f3df0f492| Update activity variable names                                                                    | Jul 9, 2025    |
| VolunTrack-WebServices  | activity-integration | 506b0fc1ee2ee98bcc78c561fd0be69fb435d8e0| Merge branch 'develop' of https://github.com/Wasi-Masi/VoluntTrack-FrontendWebApplications       | Jul 9, 2025    |
| VolunTrack-WebServices  | volunteers           | 993e13f9ed669c279635d56e7adda7b85ef1ba51| Implement deactiva volunteer button logic                                                         | Jul 9, 2025    |
| VolunTrack-WebServices  | volunteers           | 975ae54d7e426e492099711d07bdf3d5cf2e02e0| feat: Improvement in volunteers' search filters                                                    | Jul 9, 2025    |
| VolunTrack-WebServices  | volunteers           | 4a069260a860c11f1531990dfbb453c37a2785e9| Fix display                                                                                        | Jul 9, 2025    |
| VolunTrack-WebServices  | volunteers           | 1f42f0f05dab4bf902f6b8980d4db1ab17783287| Fix dashboard card image                                                                          | Jul 8, 2025    |
| VolunTrack-WebServices  | volunteers           | fdc3df9a5cf6a62c9a0a294ac3e25e69ae12787d| Integrate activities api calls with frontend                                                       | Jul 8, 2025    |
| VolunTrack-WebServices  | volunteers           | 3d5af1db2fd4c442bbe6cfbd5480dba137fd97d9| Volunteers connection to database                                                                 | Jul 8, 2025    |
| VolunTrack-WebServices  | develop              | 2b485e226ad9ba6d44c26a4314b9502ecb3e850f| Merge branch 'develop' of https://github.com/Wasi-Masi/VolunTrack-WebServices into develop        | Jul 8, 2025    |
| VolunTrack-WebServices  | profile-integration  | 695dfadac1e18e2400541bd962f43cd8e98293b0| Implement profile integration with backend                                                        | Jul 8, 2025    |
| VolunTrack-WebServices  | dashboard            | 2eaf6ed650ffaa1f5cdca6891663d6fbd1c78d0c| Improving visuals and design                                                                      | Jul 8, 2025    |
| VolunTrack-WebServices  | dashboard            | 169da12bea9f4e907b92182f777a66657f178fd9| Pull latest changes into branch                                                                   | Jul 8, 2025    |
| VolunTrack-WebServices  | register-integration | 24e59906d1ddcdb00fe75d32b0f8efb9bc85447c| Integrate register component with backend                                                         | Jul 8, 2025    |
| VolunTrack-WebServices  | login-integration    | a64f2bf27c9220c5bc29f5af8f383053578d876f| Integrate login component with backend                                                            | Jul 8, 2025    |
| VolunTrack-WebServices  | login-integration    | aa24caced09145b5344d1598a1018a4a0af68dab| Fix backend connection                                                                            | Jul 8, 2025    |
| VolunTrack-WebServices  | login-integration    | f29e24913007464d1e603bfc5fd56f449b9cba91| Comment unnecessary code                                                                          | Jul 8, 2025    |
| VolunTrack-WebServices  | login-integration    | 6415dff2d7783c21561fc523a899b1318b101d77| Add initial backend connection configuration                                                      | Jul 8, 2025    |
| VolunTrack-WebServices  | feature/iam          | 2c4238d004796aef44e10de6231fd7c8a9a2cc48| Add IAM and JWT configuration                                                                     | Jul 8, 2025    |
| VolunTrack-WebServices  | feature/iam          | ea724370b0129f687e727b5cadad6870022b9ac6| Add initial frontend configuration                                                                | Jul 8, 2025    |

#### 5.2.4.5. Execution Evidence for Sprint Review

Durante el Sprint 4, el equipo de backend de Voluntrack se enfocó en la implementación crítica del bounded context de IAM (Identity and Access Management). Este módulo es fundamental para garantizar una gestión robusta de la autenticación y autorización de usuarios dentro de la plataforma.

Se procedió con el desarrollo de la capa REST, creando controladores específicos como AuthenticationController y UserController para manejar las operaciones de registro, inicio de sesión y actualización de perfiles de usuario. Se definieron los DTOs correspondientes, como SignInResource, SignUpResource, UpdateUserResource, UserResource y AuthenticationResponseResource, para facilitar la comunicación entre el frontend y el backend.

En la capa de dominio, se consolidó el modelo User dentro de los agregados, representando la entidad central de usuario. La infraestructura de seguridad fue una prioridad, implementando un UserDetailsServiceImp para la carga de detalles del usuario y estableciendo una estructura para la gestión de tokens JWT. Se desarrolló el JwtAuthenticationFilter y el TokenService para asegurar la generación, validación y gestión segura de los tokens de acceso, protegiendo las rutas de la API. Además, se definió el UserRepository para la persistencia de los datos de usuario.

Este sprint representó un avance significativo en la modularidad y seguridad de la aplicación, sentando las bases para la gestión de usuarios y el control de acceso.


<p align="center">
  <img src="https://imgur.com/M8uFvAU.png" alt="sprinttt4">
</p>


<p align="center">
  <img src="https://imgur.com/wzCCuSw" alt="sprintttf4">
</p>

Las imágenes proporcionan una evidencia clara del funcionamiento del sistema de autenticación basado en JSON Web Tokens (JWT) dentro de la interfaz de documentación Swagger de Voluntrack.
El proceso de autenticación se inicia mediante el endpoint POST /api/auth/sign-in, que permite a los usuarios registrados iniciar sesión con sus credenciales. Tras una solicitud exitosa, verificada por un código de respuesta 200 OK, la API retorna un token JWT completo en el cuerpo de la respuesta. Este token es crucial para la seguridad de la aplicación.

Posteriormente, este token JWT es utilizado para autorizar futuras solicitudes. En la sección "Available authorizations" de Swagger UI, se introduce el token obtenido (en formato Bearer). Este mecanismo demuestra cómo el token JWT es generado y luego empleado para autenticar y autorizar llamadas a otros endpoints protegidos de la API directamente desde la documentación interactiva, validando así la correcta implementación de la seguridad y la gestión de autenticación en el backend de Voluntrack.

#### 5.2.4.6. Services Documentation Evidence for Sprint Review

Durante el Sprint 4, el equipo de desarrollo de Voluntrack se centró en consolidar la integración y la seguridad, documentando exhaustivamente los Web Services utilizando Swagger UI. Esto garantiza el correcto entendimiento, uso y mantenimiento de la API, especialmente para el recién implementado bounded context de IAM (Identity and Access Management).

La documentación está completa para los endpoints de autenticación y gestión de usuarios. Para cada endpoint, se detallan las acciones (como "Register a user" y "Sign in with an existing user"), el verbo HTTP (POST), la sintaxis de llamada, la especificación de parámetros, y ejemplos de request y response. Un aspecto crucial documentado es el proceso de generación y consumo de tokens JWT, mostrando cómo, tras un inicio de sesión exitoso, se retorna un token que luego se utiliza para autorizar llamadas a otros endpoints protegidos de la API directamente desde Swagger.

| Endpoint                   | Acción                                                                                      | Verbo HTTP | Sintaxis de llamada            | Parámetros                                                                                                                                               | Ejemplo de Request                                                                                                                                                                                                                                                                                                          | Ejemplo de Response                                                                                                                                                                                                                                   | Explicación                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|----------------------------|---------------------------------------------------------------------------------------------|------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /api/auth/sign-up          | Registrar un nuevo usuario en el sistema.                                                  | POST       | POST /api/auth/sign-up         | Body JSON:<br>{<br>"username": "string",<br>"password": "string",<br>"email": "string",<br>"phoneNumber": "string",<br>"plan": "string",<br>"description": "string",<br>"profilePictureUrl": "string",<br>"bannerPictureUrl": "string"<br>}                                   | POST /api/auth/sign-up<br>{<br>"username": "ONG Ayuda Comunitaria",<br>"password": "contra123",<br>"email": "contacto@ongayudacomunitaria.org",<br>"phoneNumber": "987987655",<br>"plan": "Premiun",<br>"description": "Organización dedicada a la asistencia social en comunidades vulnerables,",<br>"profilePictureUrl": "https://m.supergeek.cl/.../GOLDEN_WIND.jpg",<br>"bannerPictureUrl": "https://m.supergeek.cl/.../GOLDEN_WIND.jpg"<br>} | {<br>"token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJPTkcgQXl1ZGEgQ29tdW5pdGFyaWEiLCJpYXQiOjE3NTIwNzc4MjQsImV4cCI6MTc1MjE2NDIyNH0.94W8HrGdGCbQkijeAKoveVt8Khu49Uid-mnI3FF96ts"<br>} | Este endpoint permite a nuevos usuarios o entidades registrarse en la plataforma Voluntrack. Al proporcionar los datos requeridos (nombre de usuario, contraseña, email, etc.), el sistema crea una nueva cuenta y, en caso de éxito, retorna un token JWT que el usuario puede usar para futuras interacciones autenticadas con la API. Este token es esencial para la gestión segura de sesiones y para acceder a recursos protegidos. |
| /api/auth/sign-in          | Iniciar sesión con un usuario existente.                                                   | POST       | POST /api/auth/sign-in         | Body JSON:<br>{<br>"username": "string",<br>"password": "string"<br>}                                                                                     | POST /api/auth/sign-in<br>{<br>"username": "ONG Ayuda Comunitaria",<br>"password": "contra123"<br>}                                                                                                                                                                                                                         | {<br>"token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJPTkcgQXl1ZGEgQ29tdW5pdGFyaWEiLCJpYXQiOjE3NTIwNzc4MjQsImV4cCI6MTc1MjE2NDIyNH0.94W8HrGdGCbQkijeAKoveVt8Khu49Uid-mnI3FF96ts"<br>} | Este endpoint se utiliza para que los usuarios ya registrados puedan autenticarse en la plataforma Voluntrack. Al enviar sus credenciales (nombre de usuario y contraseña), el sistema valida la información y, si es correcta, emite un token JWT. Este token actúa como una credencial de sesión para el usuario, permitiéndole realizar solicitudes autorizadas a otros servicios de la API sin necesidad de reenviar sus credenciales en cada petición. |
| /api/users/{userId}        | Actualizar la información de un usuario específico.                                        | PUT        | PUT /api/users/{userId}        | Path Param:<br>userId: int<br><br>Body JSON:<br>{<br>"username": "string",<br>"email": "string",<br>"phoneNumber": "string",<br>"plan": "string",<br>"description": "string",<br>"profilePictureUrl": "string",<br>"bannerPictureUrl": "string"<br>}                              | PUT /api/users/1<br>{<br>"id": 1,<br>"username": "ONG Ayuda Comunitaria",<br>"email": "CONTACTOREAL@ongayudacomunitaria.org",<br>"phoneNumber": "987987655",<br>"plan": "Premiun",<br>"description": "Organización dedicada a la asistencia social en comunidades vulnerables,",<br>"profilePictureUrl": "...",<br>"bannerPictureUrl": "..."<br>}                     | {<br>"id": 1,<br>"username": "ONG Ayuda Comunitaria",<br>"email": "CONTACTOREAL@ongayudacomunitaria.org",<br>"phoneNumber": "987987655",<br>"plan": "Premiun",<br>"description": "Organización dedicada a la asistencia social en comunidades vulnerables,",<br>"profilePictureUrl": "...",<br>"bannerPictureUrl": "..."<br>}      | Este endpoint permite a un usuario o administrador autorizado modificar los detalles de un perfil de usuario existente. El `userId` en la URL identifica al usuario a actualizar. Se envía un cuerpo JSON con los campos del perfil que se desean modificar. Tras una actualización exitosa, normalmente retorna el perfil de usuario actualizado. |
| /api/users/me              | Obtener la información del perfil del usuario autenticado actualmente.                    | GET        | GET /api/users/me              | Header: Authorization: Bearer token                                                                                                                      | GET /api/users/me                                                                                                                                                                                                                                                                                                             | {<br>"id": 1,<br>"username": "ONG Ayuda Comunitaria",<br>"email": "contacto@ongayudacomunitaria.org",<br>"phoneNumber": "987987655",<br>"plan": "Premiun",<br>"description": "...",<br>"profilePictureUrl": "...",<br>"bannerPictureUrl": "..."<br>}                                                                        | Este endpoint proporciona una forma conveniente para que el usuario que está actualmente autenticado recupere sus propios detalles de perfil sin necesidad de conocer su `userId`. El sistema identifica al usuario mediante el token JWT. Retorna toda la información pública y editable del perfil del usuario autenticado. |
| /api/v1/email/send         | Enviar un correo al email especificado.                                                  | POST       | POST /api/v1/email/send        | Body JSON:<br>{<br>"to": "string",<br>"subject": "string",<br>"body": "string"<br>}                                                                      | POST /api/v1/email/send<br>{<br>"to": "cassius@gmail.com",<br>"subject": "PRUEBA",<br>"body": "Prueba para confirmar el envío."<br>}                                                                                                                                                                                        | Email sent successfully.                                                                                                                                                                                                                           | Este endpoint tiene como objetivo enviar correos electrónicos personalizados a una dirección especificada por el usuario. Es útil para implementar confirmaciones de inscripción, recordatorios, notificaciones de cambios importantes o mensajes administrativos. |

**Ejemplos de funcionamiento de Endpoints:**

Nos registramos mediante el sign-up de Authentication

<p align="center">
  <img src="https://imgur.com/V2GzerL.png" alt="tfff1">
</p>

Iniciamos sesión con nuestras credenciales


<p align="center">
  <img src="https://imgur.com/A3pbeQW.png" alt="tfff2">
</p>

Obtenemos el usuario que acabamos de registrar

<p align="center">
  <img src="https://imgur.com/Lp2c5Zc.png" alt="tfff3">
</p>

Actualizamos los datos del usuario registrado

<p align="center">
  <img src="https://imgur.com/DXXR0Nb.png" alt="tfff4">
</p>

Obtenemos los datos de la organización creada con el usuario

<p align="center">
  <img src="https://imgur.com/VADJhnF.png" alt="tfff5">
</p>

Envío de correo al email especificado:

<p align="center">
  <img src="https://imgur.com/vQ4WkDx.png" alt="tfff6">
</p>

#### 5.2.4.7. Software Deployment Evidence for Sprint Review.

Durante el Sprint 4, el equipo de Voluntrack se dedicó a la documentación exhaustiva de los Web Services mediante Swagger UI, especialmente para el bounded context de IAM. Se detallaron los endpoints de autenticación y gestión de usuarios, incluyendo el proceso de generación y uso de tokens JWT para la autorización de API.

Esta documentación fue vital para la fluida integración entre el backend y el frontend, permitiendo al frontend implementar los flujos de inicio de sesión y gestión de sesiones de forma segura. En cuanto al despliegue, el frontend se mantuvo en Firebase Hosting y el backend se puso en producción utilizando Render, asegurando la estabilidad y continuidad de las nuevas funcionalidades.

*Web Applications desplegado en Firebase*

<p align="center">
  <img src="https://imgur.com/4bOcnBf.png" alt="tfff8">
</p>

*Web Services desplegado en Render*

<p align="center">
  <img src="https://imgur.com/0Ti6X5e.png" alt="tfff9">
</p>

Adicionalmente, se implementó una configuración CORS (Cross-Origin Resource Sharing) en el archivo Program.cs del backend de VolunTrack, lo que permitió establecer una comunicación fluida y segura entre el frontend y el backend. Gracias a esta configuración, las solicitudes realizadas desde el entorno del frontend fueron correctamente redirigidas y atendidas por el backend desplegado en Azure, asegurando así una integración real y funcional del sistema completo en un entorno de producción.

*Program.cs*

<p align="center">
  <img src="https://imgur.com/dh7R4sk.png" alt="tfff9">
</p>

*Redirección del API*

<p align="center">
  <img src="https://imgur.com/iyMyATc.png" alt="tfff9">
</p>

#### 5.2.4.8. Team Collaboration Insights during Sprint.

Durante el Sprint 4, el equipo de Voluntrack priorizó la fuerte integración entre el frontend y el backend, manteniendo una estricta adhesión a la metodología ágil Scrum. Este periodo se caracterizó por una sincronización excepcional para vincular la interfaz de usuario con la API RESTful, especialmente en lo relativo al sistema de autenticación JWT y la funcionalidad de internacionalización. La colaboración fluida, impulsada por canales como WhatsApp y Discord y reuniones estratégicas, junto con un seguimiento riguroso en Pivotal Tracker, fue esencial para consolidar una aplicación web cohesiva, funcional y segura.

Uso de Herramientas de Colaboración (VoluntTrack-FrontendWebApplications):

<p align="center">
  <img src="https://imgur.com/Y1awpE1.png" alt="HCTF">
</p>

Uso de Herramientas de Colaboración (VolunTrack-WebServices):

<p align="center">
  <img src="https://imgur.com/U6M4H8X.png" alt="HCTF1">
</p>

Evidencia de las ramas (VoluntTrack-FrontendWebApplications):

<p align="center">
  <img src="https://imgur.com/a5dhfyZ.png" alt="HCTF2">
</p>

Evidencia de las ramas (VolunTrack-WebServices):

<p align="center">
  <img src="https://imgur.com/y1mM72s.png" alt="HCTF3">
</p>

Evidencia de commits por integrante del grupo (VoluntTrack-FrontendWebApplications):

<p align="center">
  <img src="https://imgur.com/mWFyKhe.png" alt="HCTF4">
</p>

Evidencia de commits por integrante del grupo (VolunTrack-WebServices):

<p align="center">
  <img src="https://imgur.com/Ns2mgrY.png" alt="HCTF5">
</p>

## 5.3. Validation Interviews

### 5.3.1. Diseño de Entrevistas

## 🧑‍💼 Segmento 1: Líderes y coordinadores de ONGs

#### 👤 Perfil del Entrevistado
- ¿Cuál es tu nombre y tu rol dentro de la organización?
- ¿Qué herramientas utilizas actualmente para gestionar el voluntariado?
- ¿Con cuántos voluntarios sueles trabajar regularmente?

#### 🖥️ Tras mostrar la Landing Page
- ¿Qué entendiste que ofrece VolunTrack?
- ¿Crees que esta solución está pensada para alguien con tu rol?
- ¿Qué mejorarías o cambiarías de la página?

#### 💻 Tras la demostración de la Aplicación Web
- ¿Cuál fue tu impresión general sobre la plataforma?
- ¿Te parece útil para organizar y coordinar actividades de voluntariado?
- ¿Qué tan fácil te resultó entender cómo funciona?
- ¿Qué funcionalidades te parecen más valiosas?
- ¿Qué agregarías o cambiarías?

#### ✅ Cierre
- ¿Qué fue lo que más te gustó de VolunTrack?
- ¿Considerarías usar esta herramienta en tu organización?

---

## 🧘 Segmento 2: Voluntarios existentes y potenciales

#### 👤 Perfil del Entrevistado
- ¿Cuál es tu nombre y ocupación actual?
- ¿Has participado previamente en actividades de voluntariado? ¿Cómo fue tu experiencia?
- ¿Qué tan fácil o difícil fue enterarte y registrarte en dichas actividades?

#### 💻 Tras la demostración de la Aplicación Web
- ¿Qué entendiste que ofrece VolunTrack?
- ¿Sientes que esta solución está pensada para ti como voluntario/a?
- ¿Qué te llamó más la atención de la página?
- ¿Te sentirías más motivado a participar en actividades con una herramienta así?
- ¿Qué cosas mejorarías o agregarías?
  
#### ✅ Cierre
- ¿Qué fue lo que más te gustó de VolunTrack?
- ¿Te gustaría usar esta herramienta para tus actividades de voluntariado?

### 5.3.2. Registro de Entrevistas

## Segmento #1: Líderes y coordinadores de ONGs

### Entrevistado N.º 1: Claudio Astocondor

* **Edad:** 24
* **Distrito:** Pueblo Libre
* **Link:**: [entrevistas](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EZ7MI0p2IulKpwaKCloYIU8BjS7shK3gboRZVDlMciMDAQ?e=Y4RcjH)
* **Instante en el que inicia:** 0:01
* **Duración:** 14:50

<p align="center">
  <img src="https://imgur.com/kF2lybv.png" alt="ent1">
</p>

**Acerca de la entrevista:**
Claudio, un coordinador de voluntarios que actualmente gestiona a sus participantes mediante herramientas como Google Forms, Excel y WhatsApp, tuvo una **impresión sumamente positiva** al conocer la landing page de VolunTrack. Percibió que la plataforma está **intuitivamente diseñada para facilitar la organización** del voluntariado, valorando su diseño amigable y la facilidad para familiarizarse con ella, además de mostrar interés en los planes disponibles.

Su percepción general de la aplicación web fue **excelente**, destacando su **simplicidad y el nivel de detalle, sin resultar abrumadora**. Considera que todas las funcionalidades implementadas son **perfectas para su rol**, encontrándola **extremadamente útil para organizar y gestionar actividades**, además de ser sencilla de usar e intuitiva. Entre las características más valiosas, mencionó la **marcación de asistencia**, el **registro de voluntarios**, el **panel de notificaciones** y la capacidad de **enviar mensajes directamente desde la app**. Por el momento, Claudio cree que VolunTrack posee todas las funcionalidades necesarias, aunque sugirió hacer el botón de idioma más visual, quizás con íconos de banderas.

En síntesis, lo que más cautivó a Claudio de VolunTrack fue su **diseño sobrio pero integral**, y las **funcionalidades que optimizan significativamente la gestión y comunicación** con los voluntarios. Dada su experiencia favorable, consideraría seriamente integrar esta herramienta en su organización.

---

### Entrevistado N.º 2: Renato Tafur

* **Edad:** 20
* **Distrito:** Pueblo Libre
* **Link:** [entrevistas](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EZ7MI0p2IulKpwaKCloYIU8BjS7shK3gboRZVDlMciMDAQ?e=Y4RcjH)
* **Instante en el que inicia:** 14:51
* **Duración:** 14:54

<p align="center">
  <img src="https://imgur.com/IkD7enk.png" alt="ent2">
</p>

**Acerca de la entrevista:**
Renato, líder de un pequeño voluntariado enfocado en ayudar a perros callejeros, compartió sus **desafíos en la gestión de actividades**, recurriendo a herramientas como Excel al carecer de una plataforma que simplifique estos procesos.

En su primera impresión, la landing page de VolunTrack le pareció **muy bien explicada**, proporcionando información **pertinente y clara** sobre laida y las ofertas de la plataforma. Respecto a la aplicación web, la encontró **bastante completa**, con una variedad de funcionalidades que le permitirían **gestionar múltiples procesos** de sus actividades. Aunque su organización no cuenta con un gran número de voluntarios, Renato destacó que las características de VolunTrack para su manejo serían de **gran ayuda**. Su funcionalidad favorita fue el **Calendario**, ya que le permitiría optimizar la organización de su tiempo y el de las actividades propuestas.

En resumen, Renato expresó su **agrado por VolunTrack y sus ofrecimientos**, manifestando su **disposición a probarla** para su propio voluntariado.

---

### Entrevistado N.º 3: Angie Yalán

* **Edad:** 19
* **Distrito:** Surco
* **Link:** [entrevistas](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EZ7MI0p2IulKpwaKCloYIU8BjS7shK3gboRZVDlMciMDAQ?e=Y4RcjH)
* **Instante en el que inicia:** 29:46
* **Duración:** 13:14

<p align="center">
  <img src="https://imgur.com/yVoQOrJ.png" alt="ent3">
</p>

**Acerca de la entrevista:**
Angie, estudiante, modelo y líder de un voluntariado, describió sus **dificultades para ser eficiente** en la gestión de diversas actividades para los participantes. Actualmente, se organiza utilizando herramientas como Excel o WhatsApp, lo que le **consume tiempo y le genera inconvenientes**.

En relación con la landing page, Angie la consideró **muy bien desarrollada**, ya que le permitía acceder a todo tipo de información sobre VolunTrack de manera **sencilla y organizada**. Sugirió la **incorporación de una sección de Testimonios**, donde los usuarios de VolunTrack pudieran compartir sus comentarios positivos sobre la plataforma. Por otro lado, la aplicación web le pareció diseñada con **gran orden y armonía visual**. Resaltó en repetidas ocasiones la **excelente elección de colores y tipografía**, factores que le facilitaban una **rápida comprensión** de VolunTrack. Una de sus funcionalidades más apreciadas fue la de **Marcar Asistencia**, considerándola un servicio **bastante completo** para la gestión de actividades y voluntarios.

En síntesis, Angie manifestó su **disposición a utilizar VolunTrack**, ya que la cautivó desde el inicio con su diseño y le garantizó **eficiencia y orden** gracias a las funcionalidades propuestas.

---

## Segmento #2: Voluntarios existentes y potenciales

### Entrevistado N.º 4: Tatiana Nakamurakare

* **Edad:** 20
* **Distrito:** San Isidro
* **Link:** [entrevistas](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EZ7MI0p2IulKpwaKCloYIU8BjS7shK3gboRZVDlMciMDAQ?e=Y4RcjH)
* **Instante en el que inicia:** 43:01
* **Duración:** 9:09

<p align="center">
  <img src="https://imgur.com/pUguQMG.png" alt="ent4">
</p>

**Acerca de la entrevista:**
Tatiana, una voluntaria experimentada, compartió su **experiencia positiva** en voluntariados anteriores, enfatizando cómo se enteró por el "boca a boca" y que, sin ello, habría perdido una valiosa oportunidad de aprendizaje. Tras visualizar la landing page de VolunTrack, quedó **impresionada por su diseño y la estructura informativa**, percibiendo que la plataforma ofrecería a los voluntarios una **mayor visibilidad digital**, un aspecto que valoró enormemente.

La aplicación web de VolunTrack fue **muy bien recibida** por Tatiana, quien la calificó de **completa y fácil de usar**, con **información detallada que simplifica enormemente la gestión** de voluntariados. Destacó positivamente el **calendario de eventos disponibles** y el **historial de actividades de los voluntarios**, funcionalidades que, según ella, la motivarían a participar con mayor asiduidad. Como sugerencia, propuso la adición de una sección para que los voluntarios pudieran **subir fotografías de los eventos**, lo cual serviría de inspiración para otros.

En general, lo que más agradó a Tatiana de VolunTrack fue su **capacidad para organizar y centralizar la información** de voluntariado, junto con las herramientas que **mejoran la visibilidad y el seguimiento**. Manifestó un **claro interés en utilizar la herramienta** para sus futuras actividades de voluntariado.

---

### Entrevistado N.º 5: Mateo Castillo

* **Edad:** 16
* **Distrito:** Lince
* **Link:** [entrevistas](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EZ7MI0p2IulKpwaKCloYIU8BjS7shK3gboRZVDlMciMDAQ?e=Y4RcjH)
* **Instante en el que inicia:** 43:02
* **Duración:** 16:11

<p align="center">
  <img src="https://imgur.com/z9sAOQZ.png" alt="ent5">
</p>

**Acerca de la entrevista:**
Mateo, un estudiante de secundaria con experiencia en diversas actividades de voluntariado, relató sus vivencias al registrarse y asistir a estas. Considera que, debido a la ausencia de una plataforma específica que gestione estos procesos, **enterarse de las actividades e inscribirse se torna complicado**.

En cuanto a la landing page, Mateo la encontró **bien explicada y segmentada**, lo que le facilitó la comprensión de lo que VolunTrack ofrecía. Piensa que esta es una **característica valiosa** por su capacidad para facilitar la adquisición de información relevante.

Por otro lado, la aplicación web le pareció una **manera innovadora de apoyar a los voluntariados** a generar un impacto positivo. Como voluntario, aprecia las funcionalidades del **Calendario**, que le permite organizar mejor sus días, y la **especificación de Detalles por cada actividad**, ya que le proporciona la información más importante para decidir si inscribirse o no en una actividad.

En resumen, a Mateo le agradó VolunTrack por su **organización y eficiencia al presentar datos e información**, por lo cual, **estaría dispuesto a utilizarla** como herramienta en su entorno de voluntariado.

---

### Entrevistado N.º 6: Piero Ramirez

* **Edad:** 20
* **Distrito:** Magdalena del Mar
* **Link:** [entrevistas](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EZ7MI0p2IulKpwaKCloYIU8BjS7shK3gboRZVDlMciMDAQ?e=Y4RcjH)
* **Instante en el que inicia:** 59:14
* **Duración:** 15:17

<p align="center">
  <img src="https://imgur.com/IX2PcyR.png" alt="ent6">
</p>

**Acerca de la entrevista:**
Piero, estudiante de la Universidad Peruana de Ciencias Aplicadas y voluntario en la organización "Hazlo por tu playa", compartió que su organización se gestiona mediante Excel y WhatsApp. Aunque estas herramientas son útiles, considera que el **proceso de inscripción, por ejemplo, puede ser complicado** debido a la dificultad para encontrar el número de WhatsApp o la página web de la organización.

Tras ver la landing page, Piero destacó que la **interfaz, el fácil acceso y el logo** fueron lo que más captó su atención, resaltando la **facilidad de navegación** para el ojo humano. Al revisar la aplicación web, mencionó que la capacidad de **gestionar actividades y voluntarios**, como dar de baja o enviar un correo electrónico, le pareció **muy útil**. Volvió a enfatizar la **facilidad de navegación** y la **interfaz amigable** para el usuario. Además, sugirió la inclusión de una opción para **agregar actividades por tiempo limitado** y que el voluntariado en Perú recibiera mayor publicidad.

### 5.3.3. Evaluaciones según Heurísticas

# **UX Heuristics & Principles Evaluation**  
**Usability – Inclusive Design – Information Architecture**

- **Carrera:** Ingeniería de Software  
- **Curso:** Desarrollo de Aplicaciones Open Source  
- **Sección:** 4388  
- **Profesores:** Alex Humberto Sánchez Ponce  
- **Auditor:** VolunTrack  

## **Cliente(s):**
- Claudio Astocondor
- Renato Tafur
- Angie Yalán
- Tatiana Nakamurakare
- Mateo Castillo
- Piero Ramirez

### SITE O APP A EVALUAR: VolunTrack

### TAREAS A EVALUAR:
El alcance de esta evaluación se centra en la revisión de la usabilidad de las siguientes tareas clave:

* **Gestión de Actividades**: Evaluar la facilidad con la que los usuarios pueden crear, editar y organizar eventos o tareas de voluntariado.
* **Gestión de Voluntarios**: Analizar la eficiencia del proceso para añadir, editar, visualizar y gestionar la información de los voluntarios.
* **Opciones de personalización del perfil de usuario**: Revisar la accesibilidad y claridad de las opciones disponibles para que los usuarios configuren sus propios perfiles.
* **Notificaciones**: Evaluar la funcionalidad y claridad de las alertas y mensajes que recibe el usuario.
* **Sección de calendario**: Determinar la usabilidad del calendario para programar y visualizar actividades.
* **Inscripción de voluntarios**: Observar la fluidez y simplicidad del proceso que siguen los voluntarios para registrarse en actividades.

**No están incluidas** en esta versión de la evaluación las siguientes tareas, posponiéndose para futuras iteraciones:

* Gestión de roles y permisos avanzados para voluntarios.
* Implementación de integración con redes sociales para el registro de voluntarios.
* Funcionalidad de gamificación (recompensas, niveles o puntos por participación).

### ESCALA DE SEVERIDAD:
Los errores identificados durante la evaluación serán puntuados utilizando la siguiente escala de severidad:

| Nivel | Descripción                                                                                                                                                             |
| :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Problema superficial**: Puede ser fácilmente superado por el usuario o ocurre con muy poca frecuencia. No necesita ser arreglado a no ser que exista disponibilidad de tiempo. |
| **2** | **Problema menor**: Puede ocurrir un poco más frecuentemente o es un poco más difícil de superar para el usuario. Se le debería asignar una prioridad baja resolverlo de cara al siguiente *release*. |
| **3** | **Problema mayor**: Ocurre frecuentemente o los usuarios no son capaces de resolverlos. Es importante que sean corregidos y se les debe asignar una prioridad alta.         |
| **4** | **Problema muy grave**: Un error de gran impacto que impide al usuario continuar con el uso de la herramienta. Es imperativo que sea corregido antes del lanzamiento.   |

---

## Tabla Resumen de Problemas de Usabilidad

| # | Problema | Escala de Severidad | Heurística/Principio violada(o) |
|---|---|---|---|
| 1 | Dificultad para encontrar funcionalidades clave (ej. botón de idioma, añadir actividades temporales). | **2** | **Visibilidad del estado del sistema** |
| 2 | La opción para dar de baja a un voluntario no es intuitiva (color del botón similar al fondo). | **1** | **Visibilidad del estado del sistema** |
| 3 | Inconsistencia en la estructura de la información entre la *landing page* y la aplicación web. | **2** | **Consistencia y estándares** |
| 4 | Ciertas secciones de la aplicación web podrían mejorar su organización visual. | **1** | **Diseño visual y minimalismo** |
| 5 | Falta de secciones como Testimonios, lo que dificulta la confianza de los usuarios en la plataforma. | **3** | **Proveer retroalimentación de manera adecuada** |
| 6 | El botón de idioma no es lo suficientemente visible para todos los usuarios. | **2** | **Accesibilidad** |

### PROBLEMA #1
* **Severidad:** 2 (Problema menor)
* **Heurística violada:** **Visibilidad del estado del sistema**
* **Descripción:** Algunos usuarios expresaron dificultades para localizar ciertas funcionalidades cruciales, como el botón para **cambiar el idioma** de la interfaz y la opción para **añadir actividades temporales**. Esto sugiere que estas características no son tan evidentes como deberían.
* **Entrevistas relevantes:** Claudio y Piero.
* **Recomendación:** Es fundamental **garantizar que todas las funcionalidades clave sean fácilmente accesibles y visualmente prominentes** en la interfaz. Se podría considerar el uso de iconos más destacados, etiquetas de texto más claras o una ubicación más intuitiva para estos elementos.
* **Figura:**

  <p align="center">
  <img src="https://imgur.com/JyR3WnW.png" alt="HEU1">
</p>

---

### PROBLEMA #2
* **Severidad:** 1 (Problema superficial)
* **Heurística violada:** **Visibilidad del estado del sistema**
* **Descripción:** A pesar de la apreciación general por la gestión de actividades y voluntarios, algunos entrevistados, como Piero, señalaron que la opción para **dar de baja a un voluntario** carece de la intuición necesaria. Específicamente, el color del botón para esta acción es **demasiado similar al fondo**, lo que puede inducir a confusión al usuario.
* **Entrevistas relevantes:** Piero Ramírez.
* **Recomendación:** Se sugiere **mejorar la visibilidad de la opción para dar de baja a los voluntarios**. Esto podría lograrse cambiando el color del botón para que contraste más con el fondo, o añadiendo un contorno o sombreado que lo haga destacar claramente en la vista de detalles de cada voluntario.
* **Figura:**

  <p align="center">
  <img src="https://imgur.com/Rptnx9M.png" alt="HEU2">
</p>

---

### PROBLEMA #3
* **Severidad:** 2 (Problema menor)
* **Heurística violada:** **Consistencia y estándares**
* **Descripción:** Si bien el diseño general de la *landing page* y la aplicación web recibió una acogida favorable, algunos usuarios observaron que la **estructura de la información carece de consistencia** en ciertos puntos específicos, generando una experiencia de usuario ligeramente fragmentada.
* **Entrevistas relevantes:** Tatiana, Renato.
* **Recomendación:** Es crucial **reforzar la consistencia del diseño** entre la *landing page* y la aplicación web. Esto implica asegurar que todas las secciones del producto sigan un **patrón visual uniforme y unificado**, creando una experiencia de usuario más cohesionada y predecible.
* **Figura:**

    <p align="center">
  <img src="https://imgur.com/jwyHp1H.png" alt="HEU3">
</p>

---

### PROBLEMA #4
* **Severidad:** 1 (Problema superficial)
* **Heurística violada:** **Diseño visual y minimalismo**
* **Descripción:** Aunque la aplicación web fue elogiada por su **simplicidad y limpieza**, algunos usuarios, como Angie, indicaron que ciertas secciones podrían beneficiarse de una **mayor organización visual** para evitar la sobrecarga de información.
* **Entrevistas relevantes:** Angie.
* **Recomendación:** Para mejorar la percepción visual, se recomienda **optimizar la distribución de la información** en la aplicación web. Esto podría lograrse implementando más **espacio en blanco (whitespace)** o utilizando **separadores visuales** más definidos entre los elementos, lo que ayudaría a prevenir que las páginas se perciban desordenadas o abrumadoras.
* **Figura:**

    <p align="center">
  <img src="https://imgur.com/WioJ1H8.png" alt="HEU4">
</p>

---

### PROBLEMA #5
* **Severidad:** 3 (Problema mayor)
* **Heurística violada:** **Proveer retroalimentación de manera adecuada**
* **Descripción:** Varios usuarios manifestaron que la **ausencia de secciones como "Testimonios"** o información clara sobre las experiencias de otros voluntarios les generaba cierta **dificultad para depositar plena confianza** en la plataforma. La falta de prueba social impacta la credibilidad.
* **Entrevistas relevantes:** Angie, Renato.
* **Recomendación:** Es altamente recomendable **añadir una sección dedicada a testimonios o experiencias de usuarios previos**. Esta "retroalimentación social" es vital para **generar confianza y credibilidad** en la plataforma, mostrando a los nuevos usuarios el valor que otros han encontrado.
* **Figura:**

    <p align="center">
  <img src="https://imgur.com/yfelrCF.png" alt="HEU5">
</p>

---

### PROBLEMA #6
* **Severidad:** 2 (Problema menor)
* **Heurística violada:** **Accesibilidad**
* **Descripción:** Algunos usuarios expresaron que el **botón para seleccionar el idioma no era suficientemente visible**, lo cual resultaba especialmente problemático para aquellos con menor familiaridad con interfaces digitales o que esperaban un ícono universalmente reconocido.
* **Entrevistas relevantes:** Claudio, Renato.
* **Recomendación:** Se sugiere **mejorar la visibilidad del botón de idioma** mediante un **diseño más intuitivo y estándar**. Considerar la utilización de **iconos reconocibles internacionalmente**, como banderas o un globo terráqueo, podría facilitar su identificación y uso por parte de una audiencia más amplia.
* **Figura:**

    <p align="center">
  <img src="https://imgur.com/8MK1SDm.png" alt="HEU6">
</p>

## 5.4. Video About-the-Product

En esta sección se encuentra el video 'About-the-Product' de VolunTrack, que detalla el modelo de negocio y las funcionalidades principales del software. Este recurso está diseñado para ayudar tanto a los visitantes de la Landing Page a comprender la solución que ofrecemos, como a los usuarios de nuestras aplicaciones a familiarizarse con las tareas y procesos que la plataforma soporta.

<p align="center">
  <img src="https://github.com/user-attachments/assets/9ef66ab7-e3d9-4635-b918-3720e483bb73" alt="About-the-Product Screenshot">
</p>

Link (Microsoft Stream): https://upcedupe-my.sharepoint.com/:v:/g/personal/u202312287_upc_edu_pe/ER7knyPZhxxNutfOYOZln24BT1-Z8-MXBlkFiYdrpf_cZg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=SuFYws

Link (Youtube): https://www.youtube.com/watch?v=AgB866MPlBY

## Conclusiones

El trabajo parcial realizado en el proyecto **VolunTrack** representó un avance sustancial en la materialización de la plataforma destinada a facilitar la gestión de ONGs y la conexión con voluntarios. Durante esta etapa, el equipo logró desarrollar una aplicación web funcional que cumple con los requerimientos básicos planteados inicialmente, permitiendo la gestión eficiente de información y procesos relacionados con las organizaciones no gubernamentales. Esta creación de una aplicación operativa marca un hito importante, ya que traduce en un producto tangible las ideas y diseños elaborados en fases previas del proyecto.

La implementación del flujo de trabajo basado en la metodología **gitflow** fue fundamental para el éxito del desarrollo colaborativo. Este enfoque permitió que los integrantes del equipo trabajaran de manera organizada y sincronizada, gestionando de forma efectiva las ramas de desarrollo, características y corrección de errores. La disciplina en el manejo de gitflow facilitó la integración continua, la revisión de código y la resolución ágil de conflictos, promoviendo un ambiente colaborativo en el que se respetaron las buenas prácticas de programación y se fortaleció la comunicación entre todos los miembros.

Por otro lado, el despliegue de la aplicación web en **Firebase** constituyó un paso crucial para validar la funcionalidad y accesibilidad del sistema en un entorno real de producción. Esta experiencia no solo permitió que la plataforma estuviera disponible para pruebas y uso inicial, sino que también brindó al equipo conocimientos prácticos en la administración de servicios en la nube, configuración de hosting y manejo de bases de datos en tiempo real. El uso de Firebase aportó escalabilidad y seguridad, aspectos indispensables para el crecimiento futuro de la aplicación.

El desarrollo de la aplicación web, guiado por una **arquitectura modular y orientada a servicios**, aseguró que la plataforma fuera escalable, mantenible y flexible ante futuros cambios o ampliaciones. El diseño estructurado facilitó la división de tareas y permitió implementar funcionalidades específicas de manera independiente, optimizando el proceso de desarrollo y facilitando la detección y solución de posibles errores.

Finalmente, este trabajo parcial fortaleció significativamente las competencias técnicas del equipo, abarcando aspectos clave como el desarrollo frontend, backend, control de versiones y despliegue en la nube. Asimismo, se potenció el desarrollo de habilidades blandas, tales como el trabajo en equipo, la comunicación efectiva, la planificación conjunta y la capacidad para enfrentar y resolver problemas de manera colaborativa. El logro alcanzado en esta etapa refleja el compromiso, la coordinación y el esfuerzo conjunto del equipo, estableciendo una base sólida para la continuación y culminación exitosa del proyecto **VolunTrack**.

Esta entrega (TB2) marcó un avance fundamental para VolunTrack con la culminación del backend, desarrollado íntegramente en Java bajo un enfoque de Design-Driven Development. La exitosa implementación y despliegue de este componente, junto con la exposición y documentación interactiva de sus APIs mediante Swagger, establece una base lógica robusta y validada que servirá como pilar para la inminente integración con el frontend.

La culminación de Voluntrack representa la materialización de un sistema integral de gestión de voluntariado, desde sus fases de análisis y diseño hasta una solución funcional y robusta. Esta etapa final ha sido pivotal, logrando la integración completa del backend con el frontend, lo que ha permitido que la plataforma opere de manera efectiva en escenarios de uso reales. Un hito central de este sprint ha sido la exitosa implementación de un robusto sistema de autenticación basado en JSON Web Tokens (JWT), el cual no solo garantiza la seguridad de las interacciones, sino que también establece una base sólida para un control de acceso granular a los recursos de la API.

La incorporación de la internacionalización en el backend dota a Voluntrack de una flexibilidad fundamental, capacitándolo para comunicarse eficientemente en múltiples idiomas y enriquecer la experiencia del usuario a nivel global, reafirmando nuestro compromiso con la accesibilidad. Este proyecto es un testimonio de la eficaz coordinación del equipo, evidenciada por una clara distribución de tareas, el cumplimiento riguroso de objetivos y una cultura de mejora continua. El producto final no solo satisface la visión original del usuario, sino que también encapsula las mejores prácticas de ingeniería de software, posicionando a Voluntrack como una solución sólida, segura y lista para su validación final y futuras expansiones.


## Recomendaciones

Se recomienda continuar priorizando la implementación y mejora tanto de la **aplicación web como de una futura versión móvil** de VolunTrack, manteniendo el enfoque en la arquitectura y diseño sólidos ya definidos y aplicados en esta fase del proyecto. Es fundamental centrar los esfuerzos en desarrollar y optimizar las funcionalidades clave que permitan a las ONGs gestionar eficientemente sus actividades de voluntariado, así como facilitar a los voluntarios la búsqueda, registro y participación en dichas actividades de manera sencilla y segura.

Asimismo, se sugiere realizar **pruebas de usabilidad rigurosas y continuas** con usuarios reales, tanto representantes de ONGs como voluntarios, a lo largo del proceso de desarrollo. Estas pruebas permitirán validar las decisiones de diseño adoptadas, identificar posibles dificultades en la navegación o interacción, y asegurar que la interfaz sea intuitiva, accesible y fácil de usar, mejorando así la experiencia de usuario y la adopción de la plataforma.

Es importante implementar un **sistema de gestión de base de datos robusto, eficiente y escalable**, que garantice la integridad, privacidad y seguridad de la información almacenada. Este sistema debe cumplir con las mejores prácticas en protección de datos, especialmente considerando la naturaleza sensible de la información personal de los usuarios y las ONGs involucradas.

Se recomienda establecer y mantener un **proceso de desarrollo iterativo e incremental** basado en metodologías ágiles como Scrum o Kanban. Esto permitirá que el equipo se adapte rápidamente a cambios o nuevas necesidades, mejore la comunicación interna y entregue valor de forma continua mediante ciclos cortos de desarrollo, facilitando la retroalimentación constante y la mejora progresiva de la aplicación.

Finalmente, se sugiere seguir **invirtiendo en la capacitación y actualización constante del equipo** en tecnologías emergentes, herramientas de desarrollo, control de versiones y buenas prácticas de ingeniería de software. Esto no solo asegurará la calidad técnica y funcional del proyecto, sino que también fomentará la innovación, el uso eficiente de recursos y la sostenibilidad a largo plazo de la plataforma **VolunTrack**.

Se recomienda enfáticamente capitalizar la sólida base del backend en Java desarrollado con Design-Driven Development y desplegado con Swagger en esta etapa. Este fundamento técnico debe ser el pilar para la continuación del desarrollo de la aplicación web y una futura versión móvil, priorizando una gestión de base de datos robusta, eficiente y escalable para asegurar la integridad y seguridad de la información. Asimismo, es crucial iniciar pruebas de usabilidad rigurosas y continuas en las fases de integración con el frontend, manteniendo un proceso de desarrollo iterativo para la entrega de valor constante y la inversión en capacitación del equipo, garantizando así la evolución innovadora y la sostenibilidad a largo plazo de VolunTrack.

Tras la entrega final, sugerimos implementar un plan estratégico para la escalabilidad del backend, especialmente dado el uso de Render para el despliegue. Esto implica monitorear activamente el rendimiento de la API (latencia, tasa de errores, consumo de recursos) y la base de datos, así como definir puntos de ajuste para futuras optimizaciones o la adopción de arquitecturas más distribuidas (ej. microservicios) si el volumen de usuarios crece exponencialmente. Este enfoque proactivo asegurará que Voluntrack mantenga su robustez y disponibilidad a medida que la comunidad de voluntarios y organizaciones se expandan.

Una vez lanzado Voluntrack, se recomienda encarecidamente implementar un proceso formal para la recolección, análisis y priorización del feedback de los usuarios reales. Esto no solo abarca la funcionalidad, sino también la experiencia de usuario (UX) y la interfaz de usuario (UI), prestando especial atención a la claridad de los mensajes internacionalizados. Este ciclo de retroalimentación permitirá identificar puntos de fricción, nuevas necesidades y oportunidades de mejora, asegurando que el producto evolucione constantemente para satisfacer las expectativas de sus usuarios y adaptarse a los cambios del ecosistema del voluntariado.


# Bibliografia

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

Entrevistas validación Voluntrack. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EZ7MI0p2IulKpwaKCloYIU8BjS7shK3gboRZVDlMciMDAQ?e=Y4RcjH

Anexo B. Videos del proyecto

Web applications prototyping. https://youtu.be/SiFnEpgN64c

Execution Evidence for Sprint 1 Review. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/ER9RtTS-0HVDv4bMDrQhPz4B_w3sbIZzUJxeNgIRZPjieA?e=3WasT5

Execution Evidence for Sprint 2 Review. https://drive.google.com/file/d/1pp985R2apsaa4qa8KcvP_UM9SSYTLKDV/view?usp=sharing

Execution Evidence for Sprint 3 Review. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/Edy2FnqV-A5Mr6FxVXD_iekBLGNNL507SKO8-1Akm7n69w?e=MKo7IV

Exposición TB1. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EYo4bWjuiZJIto67pij-UGIBvCjIbIDt9vEwSGJBnFQTQQ?e=ZL7e0W

Anexo C. UI

Prototipo Voluntrack. https://www.figma.com/proto/krPEYNc7KDEvZbax5LxfrA/VolunTrack?page-id=15%3A170&node-id=35-189&p=f&viewport=110%2C50%2C0.16&t=onC3hpMX1io72KLX-1&scaling=contain&content-scaling=fixed 

Anexo D. Pivotal Tracker

VolunTrack. https://app.litetracker.com/n/projects/da8585

Anexo E. Lean UX Canvas

VolunTrack Lean UX Canvas. https://drive.google.com/file/d/1uj3f76zZgQNJNxdLU8cLH2YIALPgiF-v/view

Anexo F. Link del video del trabajo parcial. https://upcedupe-my.sharepoint.com/:v:/g/personal/u202312899_upc_edu_pe/EWyLn5yGgVpKlOwTOisrjtoBvD2i2tt2XV2s3nlWKXieLQ?e=yBzOfA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D

Anexo G. Link del video del Sprint 2 Review. https://drive.google.com/file/d/1pp985R2apsaa4qa8KcvP_UM9SSYTLKDV/view?usp=sharing

Anexo H. Link del Web Application. https://voluntrackbywasimasi.netlify.app/ 

Anexo I. About-The-Product. https://upcedupe-my.sharepoint.com/:v:/g/personal/u202312287_upc_edu_pe/ER7knyPZhxxNutfOYOZln24BT1-Z8-MXBlkFiYdrpf_cZg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=SuFYws
