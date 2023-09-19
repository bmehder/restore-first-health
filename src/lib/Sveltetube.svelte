<script>
  export let id = 'XSK1Bt9O0Pw'
  export let title = 'Youtube Video'
  export let color = 'white'
  export let poster = ''
  export let radius = '0px'
  export let shadow = 'none'

  const bodyReset = '<style>body { margin: 0 }</style>'

  const src = poster ? poster : `https://img.youtube.com/vi/${id}/hqdefault.jpg`
</script>

<div class="video" style="border-radius: {radius}; box-shadow: {shadow}">
  <div>
    <iframe
      loading="lazy"
      {title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      scrolling="no"
      srcdoc="
      {bodyReset}
        <a href='https://www.youtube.com/embed/{id}?autoplay=1'>
          <img
            style='
              display: block;
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;'
            src='{src}'
            alt='{title}'>
          <svg
            style='
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
              filter: drop-shadow(1px 1px 5px hsl(206.5, 0%, 32%));
              transition: all 250ms ease-in-out;'
            xmlns='http://www.w3.org/2000/svg'
            width='32%'
            height='32%'
            viewBox='0 0 24 24'
            fill='none'
            stroke='{color}'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <polygon points='10 8 16 12 10 16 10 8'></polygon>
          </svg>
        </a>
      "
    />
  </div>
</div>