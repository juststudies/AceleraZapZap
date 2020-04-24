async function Header(){
    const header = await document.querySelector('._3auIg');
    
    // if(header){
        //     clearInterval(interval);
    // const button = document.createElement('button');
    // button.innerHTML = '2x';
    // button.classList.add('twoTimesButton');
    // button.addEventListener('click', ()=>{
    //     const audios = document.querySelectorAll('audio');
    //     audios.forEach(audio=>{
    //         audio.playbackRate = 2;
    //     });
    // });
    const list = document.createElement('select');
    list.classList.add('speedChange');

    const speeds = [1, 1.5, 2, 3];
    var opt_str = '';

    speeds.forEach((speed)=>{
        opt_str += `<option value="${speed}"> ${speed}x </option>`
    })
    list.innerHTML = opt_str;

    list.addEventListener('change', (ev)=>{
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio=>{
            audio.playbackRate = ev.target.value;
        });
    })

    header.appendChild(list);
    
    // }
}

Header();
