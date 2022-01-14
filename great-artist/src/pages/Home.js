import { useContext } from 'react'

import { UrlContext } from 'context'

import { TopBtn } from 'components'

export function Home() {
  const { audioUrl } = useContext(UrlContext)

  const info = `
«Искусство любит многообразие, как с исторической, так и национальной точки зрения, – отмечал художник Мартирос Сарьян. – Динамика истории человечества заключена в ее многогранности. Этим определяется и содержание мира и лицо всемирного искусства. Один художник работает в России, другой – в Италии, третий – во Франции, четвертый – в Бельгии. В работах каждого живет национальный стиль, национальный характер, они дышат своим временем, они передают думы, мысли и чаяния народа.

Художник живет атмосферой своей страны, живет в окружении своих соотечественников, в своей родной природе. Каждый народ представляется мне могучим деревом. Корни этого дерева уходят в родную почву, а усыпанные цветами и плодами ветви принадлежат миру».

Го Си, Рублёв, Веронезе, Гойя, ван Гог, Дюрер, Кандинский, Матисс, Рембрандт – это художники разных времен и разного стиля… Но их всех, как истинных мастеров, объединяет вечное горение, вечное вдохновение, вечно одержимая любовь к искусству.

Художник не может творить, если его душа мертва, а сердце холодно. Он не будет живописцем, если его чувства не воспринимают красок жизни, гармонии природы, если его не трогают судьбы людей. Искусство не самоцель. Оно создается для того, чтобы закрепить в материале произведения жизненно ценное, выразить то, что волнует современников, что сам пережил в моменты наивысшего подъема своего духа, разума.

Леонардо да Винчи назвал живопись «немой поэзией». Картина безмолвна. Звуки и слова лишь предполагаются зрителем. Картина неподвижна. Люди, события, предметы предстают в определенном, раз и навсегда данном состоянии и виде. Не в силах художника показать, что было до запечатленного момента и что случится после него.

«Живопись – не болтливое искусство, – писал французский художник девятнадцатого столетия Делакруа, – и в этом, по-моему, ее немалое достоинство… Живопись вызывает совершенно особые эмоции, которые не может вызвать никакое другое искусство. Эти впечатления создаются определенным расположением цвета, игрой света и тени – словом, тем, что можно было бы назвать музыкой картины».

Настоящий художник никогда не копирует действительность, а по-своему воспроизводит ее и толкует. Для этого он прибегает к различным приемам, условным по своей сути. Язык живописи – цвет! Замысел художника, тема, которую он избрал, и идея, которую он хотел донести до зрителя, получают жизнь благодаря живописной форме. Цвет в живописи – средство эмоциональной выразительности, всю гамму чувств и настроений можно выявить им. Цветом дается характеристика образов. Цвет действует на зрителя, именно цвет в первую очередь вызывает у него определенное отношение к изображенному.

Но в основе настоящего произведения искусства лежит идея, мысль. Идея диктует выбор композиции и колорита, рисунка и пропорции. Рождение настоящего произведения искусства невозможно без таланта.

«Счастлив ты, – писал Гете, – родившийся со зрением, зорко улавливающим пропорции, которые ты обостряешь, воспроизводя всевозможные образы. И когда вокруг тебя мало-помалу пробудится радость жизни и ты познаешь ликующее человеческое счастье после трудов, надежд и страха, когда поймешь счастливый возглас виноградаря, которому щедрая осень наполнила вином его сосуды, поймешь оживленную песню жнеца, высоко на стене повесившего свой праздный серп, когда позднее уже с более мужественной силой забьется в твоей песне могучий нерв страстей и страданий, когда ты довольно стремился и страдал, довольно наслаждался земной красотой и теперь стал достоин отдыха в объятиях богини, достоин изведать на ее груди то, что возродило богоравного Геракла, – тогда прими его, небесная красота, ты, посредница между богами и людьми, но и он – не лучше ль Прометея? – сведет с небес блаженство бессмертных».`

  return (
    <>
      <h2 className='title'>Введение</h2>
      <audio src={`${audioUrl}/000.mp3`} controls className='audio'></audio>
      <p className='info'>{info}</p>
      <TopBtn />
    </>
  )
}