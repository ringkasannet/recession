(function platform(){

    document.addEventListener("DOMContentLoaded", initPlatform)

    console.log("this is from inside platform")

    function initPlatform(){
        console.log('from initplatform')
        var paragraphs = document.getElementsByClassName("para")
        var paraContainer = document.getElementById("para_container")
        var options={
            root:paraContainer,
            rootMargin:"-10% 0px -90% 0px",
            treshold:0
        }
        var observer = new IntersectionObserver(observerCallback, options);
        for (var i = 0; i < paragraphs.length; i++) {
            observer.observe(paragraphs[i])

        }
    }

    function observerCallback(changes,observer){
        changes.forEach(change=>{
            if (change.isIntersecting == true){
                console.log(change.target.id)
                window.exportRoot.gotoAndPlay('label'+change.target.id)

            }
        })
    }

    function setWatcher(paragraphs, index, root) {



        // let ref = paraElement[index];
        // let options = {
        //   root: root,
        //   rootMargin: "-10% 0px -90% 0px",
        //   threshold: 0
        // };
        // let callback = (changes, observer) => {
        //   changes.forEach(change => {
        //     if (change.isIntersecting == false) {
        //       this.$set(this.chartShown, index, false);
        //       console.log(index, change.isIntersecting);
        //     } else if (change.isIntersecting == true) {
        //       this.$set(this.chartShown, index, true);
        //       this.$set(this.chartLoaded, index, true);
        //       console.log(index, change.isIntersecting);
        //     }
        //   });
        // };
        // let observer = new IntersectionObserver(callback, options);
        // let o = observer.observe(ref);
        // console.log(observer);
      }
  
})()