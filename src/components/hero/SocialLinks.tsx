import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

import IconButton from '../common/IconButton';

const SocialLinks = () => {
	return (
		<div>
			<h2 className="text-xl uppercase">socail links</h2>
			<div className="flex gap-3 my-3">
				<IconButton
					href="https://github.com/Sandeep-morya/"
					element={<FaGithub title="Github" />}
				/>
				<IconButton
					href="https://www.linkedin.com/in/sandeep-morya-7896ba111/"
					element={<FaLinkedin title="LinkedIn" />}
				/>
				<IconButton
					href="https://www.upwork.com/workwith/sandeepm13"
					element={<SiUpwork title="Upwork" />}
				/>
				<IconButton
					href="https://www.instagram.com/13_sandeep_maurya/"
					element={<FaInstagram title="Instagram" />}
				/>
				<IconButton
					href="https://api.whatsapp.com/send?phone=919988885304"
					element={<FaWhatsapp title="WhatsApp" />}
				/>
			</div>
		</div>
	);
};

export default SocialLinks;
