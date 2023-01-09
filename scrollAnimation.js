import React, { useEffect } from 'react';

function ScrollAnimation() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2;

    let frames = document.querySelectorAll('.scrollAnim');
    frames.forEach(frame => {
      let frameTop = frame.offsetTop;
      let frameHeight = frame.offsetHeight;

      if (pageTop >= frameTop - pageHeight &&
          pageTop < frameTop + frameHeight / 2) {
        frame.classList.add('anim');
      } else {
        frame.classList.remove('anim');
      }
    });
  };

  return (
    <div>
      <div class="scrollAnim anim">
        <div class="content">
          <h1 class="anim-left">SCROLL TO ANIMATE</h1>
        </div>
      </div>
      <div class="scrollAnim">
        <div class="content">
          <h2 class="anim-left" id="ScrollHead">LOREM IPSUM</h2>
          <p class="anim-left" id="scrollP">
            [ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum mi massa. Curabitur massa eros, scelerisque eget erat ac, scelerisque sodales nunc. Nullam interdum, felis ac pulvinar laoreet, ex lacus sagittis enim, in fringilla nunc leo vitae nibh. Duis vitae aliquet mauris. Suspendisse rutrum quis est vitae mattis. Nam molestie ut tellus sed eleifend. Cras lacinia nibh a accumsan ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris interdum tortor nec metus vestibulum, vitae tempor libero auctor. ]
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScrollAnimation;
