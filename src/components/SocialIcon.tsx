import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SocialIconModel } from '../model/SocialIconModel';

interface SocialIconsProps {
    socialIconsData: SocialIconModel[]
}
const SocialIcons = ({ socialIconsData }: SocialIconsProps) => {
    return (
        <div className="flex items-center gap-4">
            {socialIconsData.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all duration-300 hover:scale-110 inline-block p-3 rounded-full bg-gray-900"
                >
                    <FontAwesomeIcon
                        icon={item.icon}
                        className="text-2xl md:text-3xl transition-transform text-[#D3E97A] hover:text-white hover:scale-110"
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;