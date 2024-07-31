import stylePreloader from './preloader.module.css';
import preloaderImg from './../../image/37.gif';

function Preloader (props) {
	return(
		<div className={stylePreloader.preloaderWrapper}>
			<img src={preloaderImg} />
		</div>
		);
}

export default Preloader;