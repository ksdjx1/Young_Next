import { useRouter } from 'next/router';
import ViewerBox from '../components/viewerbox'
import Markdown from 'react-markdown';

const Viewer = () => {
    const router = useRouter();
    const title = router.query.title;
    if (title == '아쿠타가와 류노스케 : <지옥변>') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>아쿠타가와 류노스케의 '지옥변'을 처음 읽었을 때, 어딘가 동화 같다는 느낌을 받았다. 해학적 분위기며 해석에 열려있는 상징적 내용들이 동화의 그것과 닮아있었다. 고금저문집에서 소재를 취했다는 것도 한몫을 했을지 모르지만, 아쿠타가와의 문체 또한 이런 분위기를 조성하는데 큰 역할을 하였다. 즉, 동화와 같은 글이라 함은, 쉽게 읽어낼 수 있는 글에서 우리는 그가 각 소재와 행동들에 어떠한 상징을 부여했는지 아는 것이 중요할 것이라고 생각한다. 음악을 하는 필자를 포함하여 대개 예술가들이 그렇듯, 상징적 이야기를 담고 싶어 하는 아쿠타가와의 예술성을 보여주는 부분이다. '지옥변'의 해석에 대해서는 갈리는 부분들이 없잖아 있지만, 우선 필자가 느낀 점 위주로 파악해보고자 한다.</p>
                    <p>소재 같은 세세한 부분을 분석하기 전에, 과연 아쿠타가와는 이 소설을 통해 무엇을 이야기하고 싶어 했는지에 대해 큰 줄기를 먼저 이야기할 필요가 있다. 필자는 아쿠타가와가 분명 요시히데에게 자기 자신을 투영했을 것이라 생각한다. 어리석을 만치 예술을 사랑하고 딸이 불에 타 죽는 자신의 역사까지 예술로 남기는, 인생 그 자체를 예술로 만들고 싶다는 작가 본인의 의지 또는 희망이 담겨있다고 보인다. 요시히데의 인생을 돌아보면, 죽은 시체를 보거나 하는 별난 행동들은 어디까지나 예술을 위한 행동으로 이해받을 수 있는 범위 내였다. 그저 미치광이라고 불리는 정도의 일은 크게 개의치 않을 것이다. 그러나 딸과의 헤어짐에서 오는 욕구불만과 쉽사리 그려지지 않는 지옥변의 마지막 장면은 자신에 인생으로 하여금 불완전성을 느끼게 하였다. 필자는 이 ‘불완전성’이 핵심이라고 생각한다. 작품의 클라이맥스인 딸이 불타는 장면은 그야말로 이러한 불완전성의 해소를 영상적으로 보여주는 부분이라고 생각한다. 정확히 말하자면 지옥변의 완성이 요시히데의 불완전성을 해소하고 죽음으로 이어졌겠지만, 아쿠타가와는 이것을 조금 더 이미지화 시켜 보여주고자 한 것이 아닌가 싶다. 아쿠타가와 그 자신이 이러한 불완전성을 느끼고 있었고, 또 이것을 해소하는 과정에서 예술적 죽음을 맞이하고 싶다는 그 의지를 보여주는 부분이다.</p>
                    <em>“그 불기둥을 앞에 하고 굳어버린 듯 서 있던 요시히데는, 이 무슨 기괴한 일일까요, 조금 전까지 지옥의 형벌에 시달리는듯하던 요시히데가 이제는 무어라 말할 수 없는 광채를, 황홀한 법열과도 같은 광채를 주름이 쪼글쪼글한 얼굴에 가득 담은 채 나리님 앞이라는 것도 잊었는지 단단히 팔짱을 끼고 우뚝 서 있는게 아닙니까.”</em>
                    <p>딸의 죽음에 관해 조금 더 이야기하자면, 필자는 요시히데가 딸이 우차에 타고 있을 것을 예상하지 못했을 것이라 본다. 자신의 의도가 아니었음에서 해석이 갈릴 것이라 생각한다. 요시히데의 ‘예술’을 위해 딸이 희생되었다고 보기보다는, 상황이 그렇게 만든 것으로 보인다. 오히려 딸의 죽음을 당면한 요시히데가 느꼈을 감정 자체에 집중해 볼 필요가 있다. 압도적 힘과 권력 앞에서 아무것도 하지 못하는 자기 자신과 사랑하는 사람의 죽음, 또 자기가 자초한 일이라는 죄책감에 더불어 자기 내면에서 끌어 오르는 예술의 혼. 이런 복잡한 감정의 소용돌이 속에서 요시히데는 해탈하였을 것이다. 자기 자신이 우주의 먼지인 것을 깨달은 것 마냥. 때때로 인간은 자신이 감당할 수 없을 정보량이나 감정이 차오를 경우 생각하기를 멈추거나 무언가의 진리를 깨닫게 되기 마련이다. 이러한 상황 속에서, 요시히데는 자신의 삶을 예술로 승화하였다기보다도 승화되었다고 보는 것이 타당하다. 도리어 자신의 의지가 아니었던 점에서 어떠한 카타르시스를 느꼈을 것이다. 아쿠타가와는 이런 고통 속에서 오는 카타르시스를 느끼고 싶다는 것을 간접적으로 말하고 있는 것이 아닐까 생각한다. </p>
                    <p>'지옥변'은 그야말로 아쿠타가와의 천재성을 여실히 보여주는 작품이라고 생각한다. 특히, 작품 내내 서술자를 통해 느껴지는 위화감을 정말 자연스럽게 표현한 점이 가히 천재적이었다. 양의 설명, 음의 설명의 구조와 제3자의 시선으로 진행되는 전개로 이렇게 효과적으로 이야기를 전달한다는 점도 놀랍다. 자신이 예술을 하고자 하는 사람이라면, 아쿠타가와의 작품을 꼭 읽어봐야 할 것이라고 생각한다.</p>
                </ViewerBox>
            </div>
        );       
    }

    if (title == '나츠메 소세키 : <마음>') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <Markdown
                        source={`
‘일본의 대문호’ 나츠메 소세키. <마음>은 그가 왜 대문호, 천재 작가 따위로 불리어왔는지 여실히 보여주는 작품이다. 이 작품을 보기 전까지 필자는 다자이 오사무, 아쿠타가와 류노스케 이전의 일본 문학은 읽어 본 적이 없었다. 그래서 과연 발간된 지 100년이 넘게 지난 나츠메 소세키의 작품이 한 시대가 지난 현대의 한국 청년에게 어떠한 울림을 줄 수 있을지 의문이었지만, <마음>은 그러한 의문들을 모조리 파쇄해버릴 수 있는 작품이었다. 이렇게 오랜 시간이 지난 후에도 칭송받을 수 있는 것은, 그가 ‘인간’이라는 동물 그 근원에 있는 감정 혹은 본능과 같은 것들을 깊게 탐구하고 또 그것을 아름다우면서도 간결하게 표현해내었기 때문이 아닐까 싶다.

<마음>이라는 작품의 핵심은 ‘선생님의 죽음’이라고 생각한다. 초반부에 선생님은 줄곧 사람을 믿지 못하고 받아들이지 않으려는 차가운 태도를 취하였다. 그러나 중간중간 ‘나’를 믿고 싶어 한다는 마음을 스리슬쩍 꺼내는데, 이런 부분에서 나츠메 소세키의 천재성이 드러난다고 생각한다. 몇 번을 배신당하여도 믿고 싶어지는 것이 인간이다. 이러한 인간 이해를 바탕으로, 왜 선생은 이렇게까지 인간을 믿지 못하는가에 대해, 자기혐오, 즉 자기 자신을 스스로가 배신했다는 것을 암시하는 복선까지 설치해 두었다고 볼 수 있다.
                       
*“나는 과거의 업보로 사람을 믿지 못하게 되었네. 그래서 실은 자네도 믿지 못하고 있어. 하지만 왠지 자네만큼은 믿고 싶어. ~중략~. 자네는 정말 진실한 사람인가?”*
                       
작품의 클라이맥스는 단연 K가 자살하기 직전의 부분인데, K와 시즈, 선생님과 시즈, 그리고 K와 선생님 사이에서 보여주는 선생님의 일련의 행동들은 정말 ‘인간다운’ 면모를 그 밑바닥까지 보여주었다고 생각한다. 인간에게 가장 잔혹한 행위가 무엇인지를 날카롭게 파악하고 있으며, 또 그것이 어떻게 무의식적으로 실천하고 마는 선생님은 아마 K의 자살을 통해 남들과 다르지 않은 자신, 그저 ‘인간’이 무엇인지 깨닫고 말았을 것이다. 그 뒤에 일어날 일은 뻔했다. 지독한 자기혐오에 걸리고 자존감은 바닥을 치고 항상 죽음만을 생각하며 살아갈 수밖에 없다. 인간에 희망을 품었던 인간일수록 더욱 그렇다. 인간이란 원래 그런 존재라는 것을 나츠메 소세키는 생의 말기에 보여주고 싶었다고 생각한다.
                       
*“K가 이상과 현실 사이에서 방황하며 휘청거리고 있다는 것을 알게 되자 한 방에 그를 쓰러뜨릴 수 있다는 생각이 들었네. 그리고 곧바로 그의 허점을 파고들었지. ~중략~. 하지만 결코 복수하려고 그런 것은 아니네. 나는 복수보다 더 잔혹한 뜻으로 그렇게 말했다는 것을 자네에게 고백하고 싶네. 나는 그 한마디로 K의 앞에 펼쳐질 사랑의 행로를 차단하려고 했네.”*
                       
선생님의 죽음과 메이지 정신에 관해서는 거의 관련이 없다고 생각한다. 나츠메 소세키가 진정으로 말하고 싶었던 것은 메이지 정신이나 천황제 이데올로기적 무엇보다는 그저 사람이 무엇인지, 그 근저에 어떠한 마음을 가지고 있는지가 핵심이라고 본다. 작중의 선생님과 비슷한 우울증을 동반한 자기혐오와 죄의식, 죽음을 생각하는 나날을 겪어본 필자로서는 노기 대장의 순사가 자신의 죽음에 대한 방아쇠가 되었을 뿐이라고 생각한다. 마치 베르테르의 죽음처럼, 노기 대장의 죽음에 감정이 이입되고 자신도 죽을 수 있을 것이라는 용기가 생기며, 죽음에 대한 모종의 사명감마저 들었을 것이다. 정말 타이밍이 맞아떨어졌기에 일어난 일이라고 생각한다.
                       
필자는 나츠메 소세키의 <마음>을 읽으면서 3번을 크게 놀랐다. 이 소설이 100년 전에 쓰였다는 점과 완벽한 소설적 마무리가 아닌 편지 형식으로 마무리 지음에도 불구하고 전혀 불완전하다거나 찝찝한 감정이 들지 않도록 하는 3장의 구성, 그리고 인간 그 본연에 대한 파악. 그의 인간 군상에 대한 연구는 100년이 지난 지금까지도 감동을 주고 있다. 마치 인간의 원천이라는 꽃봉오리를 아름다운 문장으로 꽃피워 독자들에게 인간이란 무엇인가를 보여주는듯한 작품이었다.
                       
이런 소설을 두고도 이 정도밖에 표현하지 못하는 자기 자신이 한탄스러워진다.
                                              
                        `}
                    />
                </ViewerBox>
            </div>
        );       
    }

    if (title == '오에 겐자부로 : <사육>') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <Markdown
                        source={`
#### 오에의 눈에 비친 일본과 ‘나’
아무리 냉철하게 생각하더라도, 자신이 살아온 조국의 맹점을 객관적으로 알아차리는 것은 쉽지 않다. 더욱이 그것을 글로 써 비판하는 것은 참으로 어려운 일일 것이다. 그것을 훌륭하게 해낸 것이 오에 겐자부로였으며, 그가 왜 노벨문학상 수상자가 될 수 있었는지 보여주는 작품이 <사육>이라고 생각한다.

  이 작품을 읽다 보면 여러 가지 비판점들이 떠오른다. 만약 당신이 이 작품에서 전쟁의 참혹성이라든지, 열등의식 혹은 우월의식, 인종차별주의와 관료주의 같은 비판점들을 끄집어내었다면, 우리는 이 비판점들의 공통점을 확인할 수 있다. 바로 그 당시 일본과 밀접한 관계가 있던 문제점들이라는 것이다. 나는 이 점을 토대로 오에 겐자부로가 평소 가지고 있던 일본에 대한 문제의식을 <사육>이라는 작품에 여과 없이 투영했다고 생각했다. 비단 문제점뿐만이 아니다. 스토리의 진행에 있어서, ‘나’의 역사는 ‘일본’의 역사와 닮아있다. 나는 ‘나’를 일본 그 자체로 보았다. 혹은 일본의 소시민적 시민이라고 볼 수도 있겠다. 먼저 ‘나’가 흑인을 만난 것은 마치 일본의 개항을 보는 듯했다. 개항 초기, 두려움을 이겨낸 호기심은 그들의 교류를 어린이의 소시민적 교류로부터 어른으로 대두되는 정치, 경제적 교류까지 확장시킨다. 이윽고 흑인병이 ‘가족’과도 같은 위치까지 오게 되면서, 그들은 일종의 평등함을 느낀다. ‘탈아입구론’이 생각나는 장면이다. 그러나 서기가 들고 오는 현청의 전갈은, 그들에게 있어 일종의 기습이었을 것이다. 마치 진주만 공습처럼 말이다. 그들의 전쟁은 마을 사람들의 일방적인 무력에 의해 종료된다. 하지만 그 누구도 승자는 되지 못했다. 마을은 이미 전쟁으로 뒤덮였기 때문이다.

  완벽히 대응되지는 않지만 어느 정도 일본의 역사를 상징적으로 그리는 스토리에 더불어, 그 속의 인간 군상을 볼 때 더더욱 오에가 비판하고자 한 일본의 모습을 확인할 수 있다. 앞선 내용 분석에서 다루지 않았던 내용 중에서 골라보자면, 마지막 장면에 해당하는 ‘울타리를 치는 어른들’을 꼽을 수 있겠다. 아무짝에도 쓸모없는 일에 투입된 어른들, 그 산골 마을의 귀하디 귀한 노동력은 모두 서기의 명령대로 비효율적인 생산을 할 수밖에 없었다. 윗선의 명령 없이는 움직이지 못하는, 혹은 윗선의 명령만이 절대적인 관료주의적 일본의 행태를 여실히 보여주는 장면이다. 이와 같이 오에 겐자부로는 작품 속 군데군데에 ‘가장 일본적인 행동’을 집어넣음으로써 자신이 생각하는 비판점을 보여주고 있다.

  그래서 나는 이 작품을 ‘일본 그 자체’라고 생각하였다. 일본의 역사의식과 더불어 일본인의 국민성까지 통렬히 비판하고 있는 작품이라고 말하고 싶다. 아쉽게도 이런 식으로 해석한 논문이나 평론을 찾지 못하여서 당당히 작품 분석에는 적지 못하였지만, 적어도 나는 <사육>이라는 작품에 대해 이렇게 생각한다.
 
#### 우리는 ‘사육’의 관계에 있다
  ‘사육’이라는 단어와 ‘나’와 흑인병의 관계에 집중하여 생각해 보았을 때, 문득 사육 당한 것이 흑인병 뿐이었을까라는 생각이 들었다. ‘나’도 어쩌면 흑인병에게 사육당하고 있었던 것이 아니었을까? 서로가 서로를 사육하고 사육당하는 관계였다고 한다면, 이 둘의 관계와 오늘을 살아가는 우리와 타인의 관계는 과연 어떠한 연관성이 있을까.
  
  ‘사육’이라고 하면 보통 강자와 약자를 중심으로, 혹은 감금이라고 하는 것을 중점적으로 생각하기 마련이다. 하지만 나는 여기서 ‘사육’이라고 하는 것의 다른 한 면을 찾아낼 수 있었다. ‘사육’은 위의 조건들을 기반으로 하여 서로의 말이나 생각이 통하지 않을 때 성립한다. ‘나’와 흑인병이 그러했듯, 오로지 행동으로만 그 의중을 추측할 수밖에 없었다. 그렇다면 우리와 타인에 관계에 있어서, 그 대화가 성립한다고 한들, 우리가 상대방을 안다고 할 수 있을까?
  
  사람은 항상 자신이 타인을 잘 알고 있다는 착각에 빠진다. 상대방이 보여주는 말속에서, 행동 속에서 그 단서들을 포착해가며 자신이 그 대상을 이해하고 있다고 믿는다. 하지만, 우리는 절대로 상대방을 이해할 수 없다. 오로지 자기 자신의 마음속에서 정의 내린 무언가에 의해 상대방을 평가하고 규정짓는 것이다. 이렇게 생각한다면, ‘사육’과 ‘인간관계’라고 하는 극과 극으로 보이는 두 상태가 얼마나 같은 성질을 가지고 있는지 알 수 있다. 내 마음속에서 상대방을 멋대로 규정짓고, 기대하며 온전히 내 마음속에서 상대방을 사육해간다. 상대방이 내 기대대로 행동한다는 것은 단연 내 마음속의 사육이 잘 이루어졌다는 것밖에 되지 않는다. 우리는 이 점을 알아야 한다. 내 기대에 미치지 못하는 행동을 한다거나, 갑자기 변한다거나, 서로를 온전히 이해하고 있다는 어리석은 생각은 버려야 한다. ‘나’가 상흔을 입게 된 것도 이러한 ‘사육’의 관계를 망각하였기 때문이라고 생각한다. 우리네 삶에 있어 인간관계란, 서로가 서로를 사육할 뿐인 것이다.
  
  그렇다고 회의주의에 빠지진 말자. 어디까지나 서로 이해하지 못할 뿐, 우리가 공생할 수 없는 것은 아니다. 오히려 내가 이해하지 못하는 행동을 하는 것 또한 인생의 큰 재미로 다가올 것이다. 세상 사람들이 전부 나와 같은 생각을 하고 있다면 그만큼 이상한 일이 어디 있겠는가? 세상은 그만큼 다양한 생각이 존재하기 때문에 가치 있는 것이라고 생각한다.         
                        `}
                    />
                </ViewerBox>
            </div>
        );       
    }

    if (title == '호소다 마모루 : <시간을 달리는 소녀>') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <Markdown
                        source={`
아무리 좋은 시간이라고 하더라도, 때는 끝나기 마련이다. 하염없이 흘러가는 시간을 인간은 막을 수 없다. 살다 보면 어릴 때와 같지 않다고 느낄 때가 있다. 비단 육체적, 정신적인 것뿐만 아니라, 사람 간의 관계에 있어서도 그렇다. 지금이 영원했으면 하던 시기도 있었을 것이다. 허나 시간은 흘러가고, 여지없이 관계의 변화는 찾아온다. 우리는 때때로 이러한 변화에 절망하여 이를 거부하려 갖가지 노력을 한다던가, 쉽게 포기한다던가, 허무주의에 빠지기도 한다. 그렇다면 우리 인간들은 피할 수 없는 시간의 흐름, 즉 ‘단절’에 대해 어떻게 대처하여야 하는 것일까. <애니메이션에 빠진 인문학>의 저자는 호소다 마모루의 애니메이션 <시간을 달리는 소녀>를 예로 들어 이 점에 대해 짚고 넘어가고 있다. 저자는 인간의 망각의 능력을 언급하며 니체의 말대로 ‘춤추는 명랑함’이 필요하다고 말한다. 이런 자세가 이루어질 때, 인간은 단절 속의 기쁨과 아름다움을 깨닫고 시간을 받아들이며 살아갈 수 있다고 한다.

그러나 나는 조금 다른 의견을 가지고 있다. 물론 인문학 저서로써 애니메이션에서 조금의 소재거리만 가져다 글을 쓴 것이라고 하면 달리할 말은 없으나, 나는 호소다 마모루가 <시간을 달리는 소녀>를 통해 하고 싶었던 말은 앞서 저자가 말한 의견과는 전혀 다르다고 생각한다. 우선 타임슬립이라는 소재부터 짚고 넘어가고자 한다. 타임슬립은 기본적으로 시간을 ‘선’으로 보게 하는 소재이다. 과거-현재-미래의 명확한 인과관계가 나오기 때문에, 시청자들을 시간을 선으로 인식하게 되는 경향이 있다. 이는 ‘지금’이라는 순간보다는 한 인물의 역사와 앞으로 그려나갈 미래에 집중하여 후술할 메시지를 강조하려는 감독의 의도가 담겨있다고 보인다.

“미래에서 기다릴게.”

이 대사가 <시간의 달리는 소녀>의 핵심이자, 메시지 그 자체라고 생각한다. 마코토와 치아키는 일생일대의 소중한 시간들을 함께 보냈다. 특수한 상황을 통해 서로의 위치를 재정립하고 관계의 소중함을 깨닫는다. 이렇게 소중했던 둘은, 이제 각자의 위치에서 서로를 기다릴 것이다. 아니, 기다리지 않고 달려나갈 것이다. 설령 만나지 못한다고 하더라도. 호소다 마모루는 마치 이렇게 이야기하는 것 같다. 우리네 인생에서도 누군가가 미래에서 기다리고 있지 않겠냐고. 언제 어디에 있을지 모르는 소중한 관계를 위해 우리는 달려나가야 한다고. 작중에서 마코토가 타임슬립을 위해 뛰어들었던 과정은 우리도 삶으로 뛰어들어야 한다는 것을 보여주고 있다. 단지 기다리기만 해서는 이루어지지 않는 것들, 특히나 인생에서 두 번 다신 없을 특별한 만남을 위해서 말이다. 이것을 누군가가 ‘기다린다’고 표현한 것이 너무나도 멋진 표현이라고 생각한다. 기다리고 있으니, 달려갈 수밖에 없지 않은가.

목표와 행동, 그리고 동기부여까지. 호소다 마모루는 애니메이션 한 편을 통해 우리네 인생을 향한 강력한 메시지를 보내고 있다. 내가 처음으로 만난 호소다 마모루는 마음을 움직이는 사람이었다. 우리는 화면을 통해 악수하고 온기를 나눴다고 생각한다.

저자의 생각을 틀렸다고는 할 수 없다. 오히려 적확하게 현대인에게 필요한 자세를 제시하고 있다고 생각한다. 허나 개인적으로 한 작품을 언급할 때 작품에서 보여준 것 그 이상의 무언가와 엮으려고 하는 것을 좋아하지는 않기에, 이렇게 조금은 반대 의견을 내어 보았다. 

아직 나 자신의 인생을 어떻게 그려나가야 할지 모르겠다. 모두들 그럴 것이라고 생각한다. 그러나 미래에서 기다릴 누군가를 위해, 우리는 달려나가야 한다. 관계의 소중함을 알고 있기 때문에.
                        
                        `}
                    />
                </ViewerBox>
            </div>
        );       
    }

    if (title == '천황제 이데올로기와 무사도') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <Markdown
                        source={`
이따금 일본을 ‘가깝고도 먼 나라’라고 표현한다. 실제로 한국과 일본 사이의 최단거리는 46km밖에 되지 않으며, 2018년 방일 한국인 수가 750만 명에 달할 정도로 많은 사람들이 찾고 있다. 꽤나 복잡한 역사적 관계로 얽혀 있지만, 그래도 한국인들에게 친숙한 나라 중 하나일 것이다. 그러나 최근 아베 내각이 한국을 화이트리스트에서 제외하며 큰 파장을 일으켰고, 이에 한국 국민들은 보복성 경제제재를 규탄하며 ‘노 재팬’ 운동을 전개하였다. 일본 여행을 자제하고 일본 물품을 사지 않는 등 제각기 일본에 대한 분노를 표출하였고, 이윽고 일본에 대한 ‘불신감’이 조성되었다. 일본 정부는 한국 정부와 기업 그리고 국민에게서 신뢰를 얻지 못하고 있는 상태이며, 과연 앞으로 양국 사이에 어떠한 거래가 이루어질 수 있을지는 의문이다. 그렇다면, 이렇게 악화된 한일 관계 속에서, 우리는 조국을 지키기 위해 혹은 양국의 관계를 향상시키기 위해 어떻게 행동하여야 할까.

지피지기 백전백승이라는 말이 있듯, 우리는 으레 일본에 대해 자세히 알아야 한다. 필자 같은 대학생들이 시험 범위도 모른 채 시험을 치러 가면 안 되듯이 말이다. 우리는 많은 일제의 잔재를 물려받고도 아직 일본에 대해 잘 모른다. 대개 역사나 일본 자체를 잘 모르는 사람들은 그저 친절하다 정도로만 생각하기도 하고, ‘쪽XX’라며 무분별하게 일본 자체를 증오하기도 한다. 이것은 필히 무지에서 오는 반응이라고 볼 수 있다. 악화된 상황일수록 냉철하게 대응하여야 한다. 나를 위해, 조국을 위해, 더 나아가 양국 관계의 발전을 위해 우리는 상대방을 알고 올바른 대처를 할 수 있어야 한다. 일본에 대한 ‘앎’은 우리의 무기가 될 것이며, 방어구가 될 것이고 또한 전략적 행동을 위한 초석이 될 것이다.

일본에 대해 조사하다 보면, 한국인으로서 도무지 이해가 가지 않는 부분들이 많다. 일본은 현대적이면서 동시에 근대적이다. 동아시아 3국 중 가장 발전했을 뿐만 아니라 세계적인 경제 대국으로 인정받지만, 동시에 민족주의적 면모를 보인다. 또한 ‘메이와쿠’ 문화를 자랑스럽게 여기면서도 ‘이지메’가 심각한 사회적 문제로 대두되고 있다. 개인의 원자화로 인해 공동체가 붕괴되었다고 말하면서도 권위주의적이라는 비판을 받는다. 일본 내각부에서 발표한 통계에 따르면, 나라에 도움이 되는 일을 하고 싶어 하는 청년의 비율은 다른 나라에 비해 비교적 높은데, 이는 일본의 20대의 선거 투표율이 바닥을 치는 것과는 크게 상반된 결과이다. 한 마디로 ‘정치에 딱히 관심이 없기도 하며 자신이 사회현상을 바꿀 수 있을 것이라고 생각하지 않고 또 투쟁하지도 않지만, 그래도 나라를 위해 일하고 싶다’라고 요약할 수 있겠다. 어떻게 보면 기형적이라고도 할 수 있는 이 모습이 현 일본인의 애국심의 실태이다. 필자는 이 부분에 대해 의문점을 느끼고, 이를 해석하는 것이 일본을 ‘앎’에 있어서 많은 도움이 될 것이라고 생각한다. 동시에, 일본이 나아갈 혹은 나아가야 할 방향성에 대해서도 생각해 볼 수 있을 것이다. 필자는 이것을 일본인의 정신적, 사상적 근간이라고 할 수 있는 천황제 이데올로기와 무사도를 중심으로 파악해보고자 한다.
                       

우선 천황제가 일본인에게 어떻게 다가오는지 알아볼 필요가 있다. 일본국 헌법 제1조에 명시되어 있듯, 현대 일본의 천황은 일본의 상징이자 일본 국민 통합의 상징이다. 사실상 권력은 거의 갖고 있지 않은 상태임에도 불구하고, 일본 내에서 천황은 많은 지지를 받고 있다. 천황의 정통성은 차치하고도 현대 민주주의 사회에서 천황이라는 존재가 통용될 수 있었던 것은 그만큼 일본인들의 천황제에 대한 신뢰도가 높다고 볼 수 있다. 이는 곧 천황이 존재함으로써 일본인들 사이의 정신을 하나로 이어 언제든 국가가 성장할 수 있다는 희망을 내포하고 있고, 일본인의 애국심과 자긍심으로도 이어진다. 천황과 관련된 통계를 찾아보면 특이한 점을 발견할 수 있는데, 경제 상황과 천황에 대한 지지도가 비례한다는 것이다. 일본 경기 회복의 조짐이 보였던 2013년부터 천황에 대한 존경도가 급등하는 것을 확인할 수 있는데, 살기 좋은 나라라는 자부심 혹은 애국심 같은 감정들이 천황에 대한 존경도로 나타난 것으로 해석할 수 있다. 결국 천황의 존재는 일본인들이 자신들의 조국이 일본임을 다시 한번 자각하게 하고, 국민의 정신적 통일을 위한 장치이자 애국심을 보여주는 지표 그 자체로 볼 수 있다.

그렇다면 무엇이 일본인들에게 천황을 일본 그 자체로 대입할 수 있게 했을까. 그 답을 우리는 무사도에서 찾을 수 있다. 무사도 역시 일본인들의 정신적 통일을 위한 장치로 사용되었는데, 군국주의 시절에 널리 보급되었다고 한다. 사실상 강조되었던 것은 ‘충의’와 ‘극기’로, 특히나 천황제를 보조하는 역할을 하였다. 충의란 봉건 제도에서 윗사람에 대한 복종의 의미로써, 각자의 위치에서 가지는 의무를 다하는 것을 뜻한다. 이는 천황에 대한 절대적 복종과 국가를 위한 헌신을 강제하는 수단이었다. 또 극기란 어떠한 일에도 불평하지 않는 인내의 정신을 말하며, 외면으로 드러나는 감정을 제한하는 측면이 있다. 이는 오늘날의 ‘근성론’으로도 이어지며, 패전의 그림자가 드리웠을 때 정부에서 강조하였다고 한다. 결국 일본인은 무사도 정신을 이은 후계자로서 주군에 해당하는 천황에게 충성하여야 하며, 어떠한 어려움이 닥쳐도 극기의 자세로 버텨내야 한다는 것이다. 이를 통해 천황을 섬기는 당위성과 군국주의의 정당성을 보충하였으며 ‘야마토 다마시’를 내세워 국민 정서를 통합할 수 있었다. 이러한 정신은 군국주의 이후로도 나라에 곤란한 있을 때마다 강조되었는데, 심지어 21세기에 들어서도 그 정신이 강조되었던 적이 있다고 하니 과연 일본이라는 나라가 현대적 국가인지 의심이 든다. 1899년 군국주의 일본 시기에 쓰인 니토베 이치조의 <무사도>를 읽어보면, 한국인으로서 가히 충격적이지 않을 수 없다. 그중 몇 부분을 발췌하겠다.
                       
_“의(義)는 무사도에서 가장 엄격한 교훈이다. 그러므로 무사는 비열한 행동과 부정한 행위를 멀리해야 하는 것이다.”_
                       
_“약자, 열등한 자, 그리고 패자에 대한 인애는, 무사의 미덕으로 추앙받았다.”_
                       
_“이 말은 기독교적인 적십자운동의 정신이 이미 일본에 그 뿌리가 있었음을 말해 주고 있는 듯하다. 일본 국민들은 제네바의 만국 적십자조약보다 몇 십 년 앞서, 일본 최고의 소설가 타키자와 바킨(滝沢馬琴)의 작품을 통하여 적군의 부상병을 치료해 주는 이야기에 친숙해져 있다.”_
                       
_“봉건제도하의 정치는 무력으로 제압하는 무단정치로 빠지기 쉽다. 그런 최악의 전제정치로부터 백성들을 구할 수 있는 것이 바로 인의 덕이었다.”_
                       
인仁과 의義에 대한 무사도의 설명이다. 우리는 이가 지켜지지 않았음을 역사로써 알고 있다.
                       
_“만일 국가 권력이 강대해져 국민들에게 양심의 명령까지 거부할 것을 요구하는 날이 온다면 그것이야말로 슬픈 일이 아닐 수 없다. 무사도는 일본인의 양심을 향해 주군의 노예가 될 것을 요구하지는 않았다.”_
                       
_“선천적인 권리인 평화의 권리를 팔아넘기고 산업주의의 전선에서 후퇴해 침략주의의 전선에 참가하는 국민은 정말 어리석은 거래를 하고 있는 것이다.”_
                       
식민지에 대한 탄압이나 잔혹행위 그리고 태평양 전쟁 도발 및 자살특공대였던 가미카제 등 군국주의 일본이 행했던 악행들을 생각해 보았을 때 말도 안 되는 문장들이다. 또한 그 시절 일본의 행위에 대해서 그 국민들도 책임을 물어야 한다는 반증이 될 것이다.
                       
_“더 이상의 예는 생략하기로 하자. 한 올 한 올 토해내듯 짜내어 엮은 일본 문학을 외국어로 옮길 경우, 자칫 일본 문학의 뛰어난 가치가 손상될지도 모르기 때문이다.”_
                       
필자는 <무사도>를 읽으며 일본의 서양에 대한 모종의 열등감을 느꼈다. ‘탈아입구’라는 말에서도 드러나듯, 자신들의 사회를 서양에 이해시키려 하는 모습이 보였다. 서양 문물을 접하며 자신들의 문화가 이상하다는 점을 어렴풋이 느끼지만, 이를 바꾸기보다는 스스로 정당화하려는 시도를 했다. 서양과의 비교를 통해 자신들의 정체성을 무사도로써 정의한 것이다.

결국 천황제와 무사도는 강제적으로 애국심을 심어주는 동시에 각 개인의 정체성을 오로지 ‘일본인’으로만 설정하게 한 정치적 장치로, 앞서 설명한 기형적 충성심의 원인이라고 볼 수 있다. 이는 현대 민주주의와 전혀 맞지 않는다. 치명적인 근대적 산물이자 일본의 성장을 방해하는 원인일 것이다. 천황제와 무사도의 정신에서 벗어나 진정한 의미의 민주주의로 진입했을 때 일본인들이 편협한 시각을 없애고 더욱 바람직한 방향으로 발전할 수 있을 것이다.
                       
_“역사가 우리에게 뭔가 가르쳐준 것이 있다면, 무력의 토대 위에 건설된 국가는 스파르타 같은 도시국가든, 로마 같은 대제국이든 결코 영원할 수 없다는 것이다.”_
                       
일본은 ‘무武’를 토대로 세워진 국가임을 알아야 한다. 건국 신화부터 ‘스사노오’를 통해 폭력성을 보이고 있으며, 가마쿠라 막부, 무로마치 막부, 전국시대, 그리고 군국주의까지 일본의 대부분의 시기를 ‘무’가 점령하였다. 한국사를 들여다보면 이 점은 더욱 명확하다. 광개토대왕 시절부터 무력으로 우리의 역사에 개입하였으며 임진왜란과 식민 지배는 말할 것도 없다. 현대에도 마찬가지이다. 가장 최근에도 초계기 근접 비행으로 한국을 위협하였던 적이 있다. 그리고 헌법 개정을 통해 보통 국가로써 군대를 가지려고 하고 있다. 우리는 언제나 일본이 ‘무’로써 한국에 개입할 수 있다는 것을 인지하고 있어야 한다. 일본의 경제력이 한국의 그것을 웃도는 것은 사실이며, 우리보다 강한 국가임을 염두에 두어야 한다. 우리는 이에 따른 대응을 더욱 명확히 할 필요가 있으며, 동등한 수준의 힘을 갖는 것이 필수적이라는 것을 알 수 있다. 아름답게 흩날리는 벚꽃 잎에 현혹되어 그 속에 칼날이 있을 수 있음을 망각하지 않도록 해야 한다.


필자가 워킹홀리데이로 일본에 건너갔을 때, 한 번은 바에 간 적이 있었다. 거기서 혼자 술을 홀짝이고 계시는 일본인 아저씨와 대화를 나누게 됐는데, 어쩌다 보니 정치적 이야기도 꽤나 했었다. 마침 한국에서 전 대통령이 탄핵되고 새 정부가 들어선 시기라 할 얘기가 많았었는지도 모르겠다. 그렇게 얘기를 나누다가, 시민의 정치 참여와 관련해서 아저씨에게 왜 일본 시민은 시위를 하지 않는지 물었다. 그러자 아저씨는 “나라 이름에 먹칠하는 행위이다”라는 식으로 대답했었다. 지금에 와서 이것이 무사도 정신이었음을 깨닫게 되었다. 그저 충성하는 것이 그들에게는 선이었을 것이다.

한국인이라면 <무사도>를 한 번쯤 읽어 보는 것을 추천한다. 특히 소위 말하는 ‘일뽕’을 가진 사람들이라면 더더욱 읽어보고 그 진실을 두 눈으로 확인하여야 할 것이다. 일본을 무조건적으로 욕하는 사람들도 마찬가지이다. 일본인의 정신이 얼마나 정치적으로 이용당하고 있는지, 천황제와 무사도가 그들에게 어떤 의미를 갖는지에 대해 확인하는 것이 정당한 비판에 도움이 될 것이다. 이렇게 일본에 대해 알아가다 보면 분명 양국 사이의 개선점에 도달할 수 있을 것이라고 확신한다.                       
                        `}
                    />
                </ViewerBox>
            </div>
        );       
    }

    if (title == 'Sound Like Dot') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>Mini DAW made by processing.<br/>Just draw a dot and hear the sound.<br/>You're drawing is going to be a Music.<br/>The 'Sound Like Dot' has several functions.<br/>Feel free to enjoy.</p>
                    <video src="../static/Sound Like Dot.mp4" width="35%" id="video" controls />
                </ViewerBox>
                <style jsx>{`
                    #video {
                        position: absolute;
                        top: 30%;
                        right: 15%;
                    }
                `}</style>
            </div>
        );       
    }

    if (title == 'Air Note') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>Instrument made by arduino. <br/>Using infrared ray distance sensor.<br/>Can connect with any DAW (ex. Logic Pro X)<br/>Wherever you are, play the sound!</p>
                    <video src="../static/Air Note.mov" width="35%" id="video" controls />
                </ViewerBox>
                <style jsx>{`
                    #video {
                        position: absolute;
                        top: 30%;
                        right: 15%;
                    }
                `}</style>
            </div>
        );       
    }

    if (title == "Don't Steal Zzz..") {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>VR Game made by Unity.<br/>In a small forest village, sloths lived.<br/>He was sleepy and slow in action,<br/> and one day when he was sleeping,<br/>someone stole things from the house!<br/>You're going to be a sloth, <br/>find the missing item, and catch the thief.</p>
                    <img src="../static/Don't Steal Zzz.PDF" width="35%" id="img" />
                </ViewerBox>
                <style jsx>{`
                    #img {
                        position: absolute;
                        top: 30%;
                        right: 15%;
                    }
                `}</style>
            </div>
        );       
    }

    if (title == "Artech CC Simulation") {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>The date-simulation game made by processing.<br/>Enjoy your campus life with the background of<br/> Sogang University and Art&Technology!<br/>If you raise your opponent's favor, could see special script.</p>
                    <img src="../static/Opening.png" width="35%" id="img" />
                </ViewerBox>
                <style jsx>{`
                    #img {
                        position: absolute;
                        top: 30%;
                        right: 15%;
                    }
                `}</style>
            </div>
        );       
    }

    if (title == 'Alive!') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>A barrage shooting game made by processing.<br/>Through machine learning, <br/>people can us a cell phones as a tool.<br/>If you scream, can got speeds up!<br/>Let's have fun without other's eyes.</p>
                    <img src="../static/Alive!.pdf" width="35%" height="50%" id="img"/>
                </ViewerBox>
                <style jsx>{`
                    #img {
                        position: absolute;
                        top: 30%;
                        right: 15%;
                    }
                `}</style>
            </div>
        );       
    }

    if (title == 'Rainman') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>Casual mobile games made by Unity.<br/>Let's tilt the raindrop and put out the fire!<br/>Warm music to heal Rainman's wounds.<br/>You can enjoy lightly.</p>
                    <img src="../static/Rainman.jpeg" width="20%" height="50%" id="img"/>
                </ViewerBox>
                <style jsx>{`
                    #img {
                        position: absolute;
                        top: 25%;
                        right: 25%;
                    }
                `}</style>
            </div>
        );       
    }

    if (title == '말이 많아!') {
        return (
            <div id="Vlayout">
                <ViewerBox id='box'>
                    <h1>{router.query.title}</h1>
                    <p>Web game made by REACT.<br/>Based on random chat.<br/>A game that gets each other to say the forbidden words!<br/>Let's have fun talking to strangers and enjoy the game.<br/>Maybe you'll get a new relationship?</p>
                    <img src="../static/LOGO.png" width="30%" id="img"/>
                </ViewerBox>
                <style jsx>{`
                    #img {
                        position: absolute;
                        top: 30%;
                        right: 15%;
                    }
                `}</style>
            </div>
        );       
    }

    return (
        <ViewerBox id='box'>
            <p>You Can't see anything by this way.</p>
        </ViewerBox>
    )
};

export default Viewer;