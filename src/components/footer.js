import style from './footer.module.css';

function Footer() {
  return (
    <div className={style.footer_wrapper}>
      <div className={style.footer_title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam semper leo in ipsum congue efficitur.
        Nam vitae dolor non lorem porttitor imperdiet et sit amet nisl.
        Nulla semper eu lorem ac interdum. Mauris euismod quam eget iaculis porttitor.
        Integer cursus odio turpis, sed hendrerit est pulvinar et.
        Ut auctor sit amet enim non volutpat.
        Nunc velit nisl, efficitur et blandit nec, rutrum eu quam.
        Etiam sit amet libero sit amet elit bibendum facilisis ultrices eu neque.
        Proin tempus nunc eu arcu imperdiet, vel interdum magna pharetra.
        Aliquam sagittis risus eu ligula viverra, et egestas nisi rutrum.
        <br/><br/>
        Copyright © 2024
      </div>
      <div className={style.footer_content}>
        <div>
          Footer
          <br/><br/>
          Сообщить об ошибке<br/>
          Настройки<br/>
          social-network.samuraijs.com
        </div>
        <div>
          COMPANY<br/><br/>
          About Us<br/>
          Contact<br/>
          Privacy Policy<br/>
          Terms of Service<br/>
          Help<br/>
        </div>
        <div>
          GET IN TOUCH<br/><br/>
          Twitter<br/>
          Facebook<br/>
          Dribbble<br/>
          vk.ru<br/>
          ok.ru<br/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
