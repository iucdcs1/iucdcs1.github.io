<script lang="ts">
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
</script>
  
  <svelte:head>
    <Header />
  </svelte:head>
  <!--Projects-->
<section class="works">
    <div class="container" id="projects">
        <h1 class="works__center">My Projects</h1>
        <ul>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">00</div>
                    <div class="project__content">
                        <div class="title">Atonement<br>(Indie-Game, 2019)</div>
                        <div class="description">
                            <p>The Atonement is a game created using game engine Unity with internal C# programming language. The most difficult parts of development are pathfinding system (AI) and game/level-design.</p>
                            <p>The plot of the game revolves around the main character - a relatively ordinary, average person who suffers from constantly haunting nightmares in which he sees himself as the protagonist of various fairy tales that always end badly for the character.</p>
                            <p>The dreams in which he participates characterize the sins or actions he has committed throughout his life, and their list is not so small - greed, pride, envy, anger, despair.</p>
                            <p>This list can be continued for a long time, but whether the hero will be able to get rid of the nightmares that torment him and cleanse himself of his deeds or not - you will have to find out during the game.</p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">01</div>
                    <div class="project__content">
                        <div class="title">Electronic Diary<br>(School, 2020)</div>
                        <div class="description">
                            <p>The app is an school journal for schools that aims to solve the problem of quickly transferring information from physical to electronic media.</p>
                            <p>The app uses machine learning methods (e.g. OCR to transfer data) and has two main user roles: teacher and student.</p>
                            <p>Teachers can set grades, view the class list, add comments to students` tasks, use special chat, make lesson plans, view schedules, and have quick access to grades.</p>
                            <p>Students can view their grades, use chat to talk with teachers, receive statistics and view schedules.</p>
                            <p>The app is developed for PC using Python and its` different libraries.</p>    
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">02</div>
                    <div class="project__content">
                        <div class="title">KazanTourism<br>(WiP, 2023)</div>
                        <div class="description">
                            <p>The objective of this application is to serve as a user-friendly and invaluable tool for tourists and individuals eager to explore new destinations. The primary goal is to seamlessly match users with places of interest, utilizing applied filters and search queries.</p>
                            <p>Additionally, the application aims to equip users with essential information that enables informed decision-making and efficient trip planning. A significant aspect of the application centers around empowering users to contribute by adding new locations and moderating already presented, thus expanding the breadth and diversity of available options and clarifying the description of places.</p>
                            <p>This feature ensures that the application remains a comprehensive resource, allowing users to continually discover fresh and exciting places to visit. After all, the app will remain flexible and reliable, since the users will update the data on the run.</p>
                        </div>
                    </div>
                </article>
            </li>
            <li class="project__item">
                <article class="project">
                    <div class="project__number">03</div>
                    <div class="project__content">
                        <div class="title">Site-Portfolio<br>(WiP, 2023)</div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quia nostrum rem ipsum fuga non cupiditate sunt quos explicabo! Ratione ea incidunt exercitationem perferendis. Deserunt iusto perferendis ad maiores labore.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ipsam suscipit aspernatur praesentium beatae consequuntur natus sequi explicabo nisi voluptatum assumenda, incidunt ea doloribus! Veniam corrupti earum magnam ipsa. Id.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nemo sunt dolore qui fugiat est consequatur modi temporibus, quas tempora ratione recusandae aperiam labore laboriosam velit explicabo ex ipsa corrupti.</p> 
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </div>
</section>
  <Footer />