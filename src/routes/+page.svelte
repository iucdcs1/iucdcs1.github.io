<script lang="ts">
    import { base } from '$app/paths';

    import { onMount } from 'svelte';
	let showResumeOptions = false;
	let dropdownRef: HTMLDivElement;
	let buttonRef: HTMLButtonElement;
	let dropdownTop = '100%';

	function toggleResumeOptions() {
		if (showResumeOptions) {
			showResumeOptions = false;
			return;
		}
		const buttonRect = buttonRef?.getBoundingClientRect();
		dropdownTop = `${buttonRect?.height + 10}px`;
		showResumeOptions = true;
	}

	function closeOptions() {
		showResumeOptions = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			closeOptions();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<!-- Intro -->
<section class="intro">
    <div class="container">

        <div class="intro___inner">
            <div class="intro__content">
                <h2 class="intro__subtitle">Hey, I`m</h2>
                <h1 class="intro__title">Daniil Vasilev</h1>
                <div class="intro__text">Golang Backend Developer</div>

                <div class="social">
                    <a class="social__link" href="https://telegram.me/NPggL" id="tg-link">
                        <img src="images/telegram.svg" alt="TG">
                    </a>
                    <a class="social__link" href="https://github.com/iucdcs1" id="gh-link">
                        <img src="images/github.svg" alt="GH">
                    </a>
                    <a class="social__link" href="mailto:w.daniil.vasilev@gmail.com" id="email">
                        <img src="images/mail.svg" alt="Mail">
                    </a>
                </div>

                <div style="position: relative;" bind:this={dropdownRef}>
                    <button class="btn" type="button" on:click={toggleResumeOptions} bind:this={buttonRef}>
                        SEE MY RESUME
                    </button>

                    {#if showResumeOptions}
                        <a class="resume__link" href="/DaniilVasilev-Golang.pdf" download>
                            Go
                        </a>
                        <a class="resume__link" href="/DaniilVasilev-Python.pdf" download>
                            Python
                        </a>
                    {/if}
                </div>
            </div>
        </div>

    </div>
</section>

<!--About-->
<section class="about">
    <div class="container" id="about">
        <div class="about__inner">
            <div class="about__content">
                <h3 class="about__title">#ABOUT ME</h3>
                <h2 class="about__bigtitle">WHO AM I</h2>
                <div class="about__text">
                    <p>My name is Daniil Vasilev. I am currently a third-year student at Innopolis University, specializing in backend development, distributed systems, and cybersecurity. My technical background includes experience in server-side development with Go and Python, as well as working with databases such as PostgreSQL and MongoDB using ORM tools like GORM and SQLAlchemy.</p>

                    <p>I have contributed to several projects where I was responsible for building REST APIs, implementing user authentication with JWT, and integrating asynchronous services using RabbitMQ and WebSockets. I also have experience with inter-service communication via gRPC. My development workflow includes containerization with Docker and Docker Compose, and I have explored orchestration tools such as Kubernetes. In a recent project, I developed a system that manages business operations, supports real-time notifications, and integrates with third-party services like Google Forms and Google Calendar.</p>

                    <p>I am particularly interested in high-load, distributed systems and the application of modern DevOps practices and security principles. My goal is to design and implement scalable, efficient, and secure backend solutions using contemporary technologies.</p>
                </div>
            </div>
        </div>
    </div>
</section>
