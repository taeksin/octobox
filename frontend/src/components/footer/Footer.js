// import { HandPointRight } from '@stackoverflow/stacks-icons';
import { Icon } from '../../util/convertor';

const Footer = () => {
  return (
    <div className="flex-col">
      <div className="flex px-4 pt-8 align-top h-[120px] text-soGray-light bg-soGray-footerbg">
        {/* <div className="flex mx-5">{Icon(IconLogoGlyphMd)}</div> */}
        <div className="mt-2 mb-10 grow">
          <div className="font-bold">OCTOBOX</div>
          <div className="mt-4 text-xxs">
            Site design / logo © 문어의 꿈; user contributions
            licensed under CC BY-SA. rev 2022.10.28.42999
            <br/>
            김택신(1971194) / 창윤빈(1971214) / 전소진(2191193) / 박소은(2191189)
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;