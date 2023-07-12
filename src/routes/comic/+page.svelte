<script lang="ts">
    import { onMount } from 'svelte';
    import { setXKCDData } from '$lib/setXKCD';
    import { base } from '$app/paths';

    onMount(() => {
        if (typeof document !== 'undefined') { 
            setXKCDData();
        }
    });
  </script>
  
    <section class="intro">
        <div class="container">

            <div class="intro___inner">
                <div class="intro__content">
                    <h2 class="intro__subtitle">Here you can watch</h2>
                    <h1 class="intro__title">XKCD comics :D</h1>
                    <div class="intro__text">or just return back...</div>

                    <a class="btn" href="{base}/#">RETURN BACK</a>
                    <button on:click={setXKCDData} class="btn" type="button">SEE NEW COMIC</button>
                </div>
                
                <figure class="intro__content">
                    <img class="intro__photo2" id="photo" src="" alt="Loading...">
                    <figcaption id="date">Дата</figcaption>
                </figure>
            </div>

        </div><script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </section>