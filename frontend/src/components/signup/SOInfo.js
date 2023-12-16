import {
  IconArrowUpDown,
  IconAchievements,
  IconTags,
  IconSpeechBubbleQuestion,
} from '@stackoverflow/stacks-icons';
import { Icon } from '../../util/convertor';

const SOInfo = () => {
  return (
    <div className="mb-[100px] mr-[80px]">
      <div className="my-10 text-xxl">Octobox 커뮤니티에 가입하세요.</div>

      <div className="flex my-5">
        <div className="items-center mx-2 my-1">
          {Icon(IconSpeechBubbleQuestion)}
        </div>
        <div>문제 풀이에서 막히셨나요?</div>
      </div>
      <div className="flex my-5">
        <div className="items-center mx-2 my-1">{Icon(IconTags)}</div>
        <div>문제풀이를 공유하고 의견을 나눠보세요.</div>
      </div>
      <div className="flex my-5">
        <div className="items-center mx-2 my-1">{Icon(IconArrowUpDown)}</div>
        <div>풀이를 투표하고 풀이에 대한 의견을 나눠보세요.</div>
      </div>
      
      <div className="flex my-5">
        <div className="items-center mx-2 my-1 ">{Icon(IconAchievements)}</div>
        <div>문제 풀이를 공유하고 명성을 얻어보세요.</div>
      </div>

      <div className="text-sm">
        Octobox에 가입해 풀이를 공유하고 의견을 나눠보세요.
        <br></br>
        여러분의 실력을 증명할 수 있습니다.
      </div>
    </div>
  );
};

export default SOInfo;
