<script lang="ts">
    import { base } from '$app/paths';
  </script>

<!-- Intro -->
<section class="intro">
    <div class="container">

        <div class="intro___inner">
            <div class="intro__content">
                <h2 class="intro__subtitle">Something</h2>
                <h1 class="intro__title">Daniil Vasilev</h1>
                <div class="intro__text">Frontend Developer</div>

                <div class="social">
                    <a class="social__link" href="https://telegram.me/NPggL" id="tg-link">
                        <img src="images/telegram.svg" alt="TG">
                    </a>
                    <a class="social__link" href="https://github.com/iucdcs1" id="gh-link">
                        <img src="images/github.svg" alt="GH">
                    </a>
                    <a class="social__link" href="mailto:d.vasilev@innopolis.university" id="email">
                        <img src="images/mail.svg" alt="Mail">
                    </a>
                </div>

                <a class="btn" href="{base}/comic">SEE COMIC</a>
                <button class="btn" type="button">SEE MY RESUME</button>
            </div>
            
            <img class="intro__photo" src="images/photo.png" alt="Man pointing on my name">
        </div>

    </div>
</section>

<!--About-->
<section class="about">
    <div class="container" id="about">
        <div class="about__inner">
            <div class="about__photo">
                <img class="img" src="images/aboutphoto.png" alt="Fingerman">
            </div>
            <div class="about__content">
                <h3 class="about__title">ABOUT ME</h3>
                <h2 class="about__bigtitle">WHO AM I</h2>
                <div class="about__text">
                    <p>I am a young student of Innopolis University. I was born and raised in Saint Petersburg, Russia, where have graduated from the Saint Petersburg Academic Gymnasium №56. I has always been interested in technology, particularly in front-end web development and information security so I`m passionate about creating user-friendly and visually appealing websites that are also secure and reliable.</p>
                    <p>My dedication to learning and improving my skills is evident in my achievements. I have completed several courses in Python/Java programming languages, which have given me a solid foundation in this popular languages. I also have experience working with Django and Spring frameworks, and have knowledge in database management. These skills have allowed me to work on complex projects that require a deep understanding of web development and programming.</p>
                    <p>Currently, I am working on two exciting projects. The first is a tourism mobile app named KazanTravel, which has some similarities with TripAdvisor. This app will allow users to discover new places to visit, read reviews from other travelers, and plan their trips with ease. The second project is a portfolio website for my frontend web development course at the university. This website will showcase my skills and projects to potential employers and clients.</p>
                </div>
                <a class="btn" href="{base}/#">CONTACT ME</a>
                <button class="btn" type="button">SEE MY RESUME</button>
            </div>
        </div>
    </div>
</section>
