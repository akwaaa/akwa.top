<script>

    let symbols = [
      "☆",
      "☏",
      "☭",
      "Ⓐ",
      "♫",
      "⚝",
      "⚢",
      "⚸",
      "⛐",
      "⛧",
      "⛾",
      "🌣",
      "🎔",
      "🏲",
      "🕪",
      "🕱",
      "🖈",
      "🖏",
      "🖦",
      "🖳",
      "🖻",
      "🗮",
      "🗲",
      "🗷",
      "🗹",
      "✆",
      "✮",
      "✰",
      "✧",
      "❆",
      "❖",
      "❥",
      "❦",
      "➔",
      "🤻"
    ];

    let index = 0

    function click() {
        index++
        console.log(index)
    }

</script>

{#if index >= 3}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<h1 on:click={click}>{symbols[index % symbols.length]} ākwa.top/</h1>
{:else}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<h1 on:click={click}>{symbols[0]} ākwa.top/</h1>

{/if}

<style>
    h1 {
        color: white;
        text-align: center;
        font-size: 96px;
        font-family: Inter;
        font-weight: 400;
        word-wrap: break-word;
        line-height: 0.2;
        
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

    h1:hover {
        cursor: not-allowed;
    }

</style>