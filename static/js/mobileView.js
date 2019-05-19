function setPages(){
    const height = screen.height;
    const width = screen.width;

    if(width < 768){
        let normalPages = document.getElementsByClassName("web");
        [...normalPages].forEach(normalPage => {
            normalPage.remove();
            // normalPage.setAttribute("style","display: none;");
            // normalPage.removeAttribute("data-anchor");
        });

        // let mobilePages = document.getElementsByClassName("mobile");
        // [...mobilePages].forEach(mobilePage => {
        //     let dataAnchorValue = mobilePage.getAttribute("_data-anchor");
        //     mobilePage.setAttribute("data-anchor", dataAnchorValue);
        //     mobilePage.removeAttribute("_data-anchor");
            
        // });

       
        // let coffefeMobile = document.getElementById("coffefeMobile");
        // let dataAnchor = coffefeMobile.getAttribute("_data-anchor");
        // coffefeMobile.setAttribute("data-anchor", dataAnchor);
        // coffefeMobile.removeAttribute("_data-anchor");
       
        // let coffefe = document.getElementById("coffefe");
        // coffefe.style.display = "none";
        // coffefe.removeAttribute("data-anchor");


    }else{
        let mobilePages = document.getElementsByClassName("mobile");
        [...mobilePages].forEach(mobilePage => {
            mobilePage.remove();
            // normalPage.setAttribute("style","display: none;");
            // normalPage.removeAttribute("data-anchor");
        });
    }

}



