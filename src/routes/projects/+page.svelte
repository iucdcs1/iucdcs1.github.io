<script lang="ts">
    import { base } from "$app/paths";
</script>
  
  <!--Projects-->
<section class="works">
    <div class="container" id="projects">
        <h1 class="works__center">My Projects</h1>
        <ul>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">00</div>
                    <div class="project__content">
                        <div class="title">Digital Diary<br>(School, 2020)</div>
                        <div class="description">
                            <p>Digital journal is the app for the schools which simplifies the process of storing and processing information.</p>
                            <p>The app uses ML model (OCR for data transfering) and has two main user roles: teacher and student.</p>
                            <p>Teachers list of functionalities includes: setting grades, viewing the lists of students, managing schedules and students` home assignments, etc.</p>
                            <p>The app was developed for PC on Python with usage of different libraries.</p>
                            <p>
                                <a href="https://github.com/creepydanunity/Diary" target="_blank" class="project__link">
                                    Link (Repo) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">01</div>
                    <div class="project__content">
                        <div class="title">KazanTravel<br>(University, 2022)</div>
                        <div class="description">
                            <p>This application is designed to be a user-friendly tool for travelers and explorers, seamlessly matching them with places of possible interest.</p>
                            <p>Filtering is based on tags and search queries. Beyond discovery, it empowers users to contribute by adding new locations and refining existing ones, ensuring up-to-date and diverse recommendations.</p>
                            <p>By allowing real-time updates, the app remains a dynamic and reliable resource for trip planning and exploration.</p>
                            <p>
                                <a href="https://gitlab.pg.innopolis.university/software-project-crowdsourcing-app-for-tourism/tourismcrowdsourcing" target="_blank" class="project__link">
                                    Link (Repo) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">02</div>
                    <div class="project__content">
                        <div class="title">Telegram-based CRM<br>(Offer, 2023)</div>
                        <div class="description">
                            <p>This project is a Telegram-integrated CRM system designed for the "Umatur" travel agency in Innopolis.</p>
                            <p>It streamlines customer management, booking coordination, and automation by integrating with Google Forms and Google Calendar.</p>
                            <p>The system leverages PostgreSQL as its primary database and SQLAlchemy as an ORM, ensuring efficient data handling and scalability.</p>
                            <p class="project__link">
                                Link is not present (Private Project)
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">03</div>
                    <div class="project__content">
                        <div class="title">DPR Backend<br>(Hackathon, 2024)</div>
                        <div class="description">
                            <p>The project represents (in general) backend service built with Golang, leveraging gRPC and PostgreSQL to serve dynamically generated UI components in response to API requests. </p>
                            <p>It acts as a microservice that provides structured page data in Protobuf format, enabling frontend applications to render customizable UIs dynamically.</p>
                            <p>The system uses Envoy Proxy to bridge gRPC communication between the backend and a Vue.js-based frontend, ensuring efficient and scalable interactions.</p>
                            <p>By integrating HTTP/2 and gRPC-Web, it optimizes network performance, reducing latency and improving real-time responsiveness.</p>
                            <p>
                                <a href="https://github.com/creepydanunity/GolangPROSTO" target="_blank" class="project__link">
                                    Link (Repo) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">04</div>
                    <div class="project__content">
                        <div class="title">PostgreSQL AER Backups<br>(University, 2024)</div>
                        <div class="description">
                            <p>The Dockerized Backup API is a secure and automated system designed to back up remote PostgreSQL databases with encryption.</p>
                            <p>The system allows users to schedule, trigger, and download encrypted backups via an API, eliminating manual efforts and ensuring data security, integrity, and accessibility.</p>
                            <p>It is implemented using Golang, Docker, PostgreSQL, and secure file transfer protocols (FTPS, SCP, SSH).</p>
                            <p>
                                <a href="https://gitlab.pg.innopolis.university/d.nikulin/s24-sna-project" target="_blank" class="project__link">
                                    Link (Repo) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">05</div>
                    <div class="project__content">
                        <div class="title">AlumniPortal<br>(University, 2024)</div>
                        <div class="description">
                            <p>This project aims to create a comprehensive alumni portal for Innopolis University, fostering connections between alumni, students, and the university.</p>
                            <p>The platform is an attempt to facilitate mentorship, funding, and job opportunities, addressing the lack of structured interaction between graduates and the university community.</p>
                            <p>
                                <a href="https://github.com/IU-Capstone-Project-2024/AlumniPortal-Innopolis/tree/main" target="_blank" class="project__link">
                                    Link (Repo) →
                                </a>
                            </p>
                            <p>
                                <a href="https://capstone.innopolis.university/docs/2024/alumniportal-innopolis/week6" target="_blank" class="project__link">
                                    Link (Report) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">06</div>
                    <div class="project__content">
                        <div class="title">InnoFT Mobile<br>(University, 2024)</div>
                        <div class="description">
                            <p>InnoFT Mobile is a Flutter and Go-based mobile application designed to help users find trip mates for their journeys.</p>
                            <p>Whether commuting or planning long-distance travel, users can easily connect with others heading in the same direction.</p>
                            <p>The app integrates real-time maps, user authentication, and trip management.</p>
                            <p>
                                <a href="https://github.com/InnoFT/InnoFT_Mobile/tree/backend" target="_blank" class="project__link">
                                    Link (Repo, Backend) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">07</div>
                    <div class="project__content">
                        <div class="title">Software Architecture: ADD<br>(University, 2024)</div>
                        <div class="description">
                            <p>This project involves designing an Internet-based collaboration system for globally distributed teams. The system integrates speech, video conferencing, email, file sharing, and a shared whiteboard to facilitate real-time collaboration, such as brainstorming and drawing diagrams.</p>
                            <p>This system is designed to address the growing demand for reliable, real-time collaboration in professional environments, providing the necessary tools for seamless, secure, and efficient teamwork across global teams.</p>
                            <p>
                                <a href="https://docs.google.com/document/d/1l45170TWnPc5e8gHhrOTvRA6xOH_WIHbNivkJFH7vvs/view?tab=t.0" target="_blank" class="project__link">
                                    Link (Document) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">08</div>
                    <div class="project__content">
                        <div class="title">Anonymous Chat<br>(University, 2024)</div>
                        <div class="description">
                            <p>This project is a client-server application designed to facilitate anonymous messaging between users.</p>
                            <p>Additionally, the system provides an endpoint to query the total number of messages sent. The project adheres to the assigned task and focuses on measuring three quality attributes: Time Behavior, Recoverability, and Maintainability.</p>
                            <p>
                                <a href="https://github.com/iucdcs1/SoftArchServer" target="_blank" class="project__link">
                                    Link (Repo) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">09</div>
                    <div class="project__content">
                        <div class="title">MAD:SOC<br>(University, 2024)</div>
                        <div class="description">
                            <p>MAD:SOC is a MVP version of open-source Security Operations Center (SOC) built to monitor, analyze, and defend against cybersecurity threats using widely available tools and automation.</p>
                            <p>This system is designed to provide the necessary tools for secure, and efficient teamwork across teams.</p>
                            <p>The system is designed to centralize log data collection, integrate threat intelligence, detect malicious activity, and (not actually implemented) trigger real-time automated responses to incidents.</p>
                            <p>
                                <a href="https://drive.google.com/file/d/1TWgF0gSPQYQcTcmkw8V42-jkmO5BmM5z/view?usp=sharing" target="_blank" class="project__link">
                                    Link (Document) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">10</div>
                    <div class="project__content">
                        <div class="title">Multi-session Quest bot<br>(Offer, end 2024 - start 2025)</div>
                        <div class="description">
                            <p>To be added.</p>
                            <p class="project__link">
                                Link is not present (Private Project)
                            </p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">11</div>
                    <div class="project__content">
                        <div class="title">Digital Online Store<br>(Offer, April 2025)</div>
                        <div class="description">
                            <p>This project is a web-based marketplace for selling digital goods, focusing on a solutions.</p>
                            <p>Built with Go and Gin, the platform ensures efficient real-time communication, seamless transactions, and reliable data processing.</p>
                            <p>It integrates WebSockets for an in-app chat, RabbitMQ for notification handling, and PostgreSQL with GORM for structured database management.</p>
                            <p>
                                <a href="https://github.com/creepydanunity/Buy2Play" target="_blank" class="project__link">
                                    Link (Repo) →
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </div>
</section>