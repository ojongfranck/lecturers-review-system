import { Form, Formik } from 'formik'
import { Icon, Input, SEO } from '../components'
import { Email, Required } from '../constants/validations'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'


export default function About() {
    return (
        <div className="box">
                        <a href='#contact' className="btn">contact</a>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores quasi sed modi quas veritatis minus iste, molestiae ut sequi vitae ipsum. Earum, voluptatem nam quas eaque obcaecati accusamus recusandae!
            Explicabo porro quam dolor culpa perferendis harum provident ad esse, veniam voluptatem magni voluptate, cum, iusto sit inventore aut maxime modi minus atque vero cumque soluta? Et debitis velit in.
            Nulla cumque quis fuga, doloremque doloribus quisquam accusamus ea sit, nihil error perspiciatis unde suscipit dolor? Tempora dolore architecto ab, quod similique iure mollitia commodi esse aliquid illo nisi repudiandae?
            Nisi voluptates officia perspiciatis placeat? Asperiores dolores, pariatur suscipit natus consectetur commodi alias cumque veritatis quam voluptatum, quasi exercitationem placeat temporibus nam sunt voluptatem. Odit facere est perferendis totam modi!
            Inventore impedit eius quo amet culpa molestiae labore atque vero similique voluptatibus natus quasi temporibus, nobis, maiores ipsam. Neque maxime quos cupiditate maiores eveniet natus quod, mollitia debitis magni delectus?
            Praesentium ipsum illum itaque consectetur, sapiente repellendus, expedita, vel adipisci atque perferendis quos. Deleniti veniam vel necessitatibus, amet officia totam quia voluptas soluta, nulla quis, tempore corrupti quasi voluptatum fugit!
            Cupiditate qui eligendi voluptatem deserunt aliquam excepturi suscipit sequi eaque, sapiente tenetur quaerat odit modi omnis esse debitis cum dolorum. Voluptatibus expedita velit odit aliquid perspiciatis. Cum minima voluptates corrupti?
            Consequatur illo perspiciatis officiis iste maiores blanditiis impedit autem accusantium, dolores earum. Odit qui fugit obcaecati consequuntur. Accusantium iure aspernatur libero impedit. Nesciunt dolorum voluptates fuga voluptatem quidem. Dolor, consequuntur!
            Saepe eos culpa sapiente doloribus sunt nemo. Minus modi ab eius eveniet veniam eum eligendi fugit expedita omnis odio perferendis asperiores, reprehenderit consequatur repudiandae amet suscipit quae accusamus deleniti? Architecto!
            Cumque, maxime quis? Quos et provident enim molestias culpa accusantium voluptates sunt amet qui magnam maxime officiis numquam error doloremque asperiores aliquam ducimus fugiat cupiditate, nihil labore pariatur exercitationem dolores.
            Unde doloremque necessitatibus dolores ipsam fugit! Temporibus, ratione debitis quae aliquam sed dicta id dolore praesentium officiis, repudiandae iste ad hic veniam magni fugit. Beatae sit quasi minima officia at!
            Nemo nam, maxime laboriosam expedita aperiam esse in iste tempore debitis, molestias quis consequuntur sint accusamus iure quod vel! Illo nobis harum laborum cupiditate aliquid ducimus sed? Quidem, facilis dolorem.
            Quod qui eaque voluptate veniam earum sed ut. Provident iste dolorem eaque asperiores autem cum commodi. Odio in assumenda, dicta nam pariatur obcaecati ut explicabo voluptatem quasi numquam iste cupiditate?
            Natus temporibus iure sit ut praesentium cupiditate ipsa quaerat asperiores in, maiores explicabo eos tenetur soluta quibusdam error vitae eveniet earum dolores illum unde expedita necessitatibus veniam voluptatum. Facilis, quis?
            Quis, magni perferendis earum in qui officia aut consectetur natus tempora maiores, cumque repellendus hic quae! Impedit odio culpa voluptas, blanditiis aliquam, voluptate illum asperiores odit voluptatibus ab vitae repudiandae!
            Blanditiis accusantium assumenda sed recusandae facilis hic dolores nostrum provident officiis veniam. Nisi officia itaque sunt a facilis, minus assumenda voluptatum praesentium excepturi iure magni nemo voluptatibus distinctio, saepe repellat.
            Velit odit esse consequuntur quo atque praesentium sequi, recusandae laboriosam earum ratione suscipit unde quibusdam nam eaque totam quae quia magnam? Modi, itaque ratione. Ducimus vero unde nesciunt odit! Repellendus.
            Magni eum, quos quisquam totam in amet dolorem dolor, dignissimos fugiat tenetur quia iste. Voluptates, voluptas quasi. Blanditiis ad assumenda tempore corrupti quia exercitationem numquam explicabo eveniet perspiciatis, ut corporis.
            Quae eaque rerum dicta aliquam cupiditate, esse accusamus pariatur, incidunt placeat totam assumenda amet, accusantium delectus ipsa perferendis omnis. Corporis maiores voluptate culpa corrupti eos doloremque hic exercitationem nesciunt architecto.
            Quibusdam dolor perspiciatis nostrum quam cumque ipsam deserunt. Id quis laudantium quod, ut dolor facere in? Impedit temporibus accusantium quisquam ratione totam et repellendus, dolorum optio quasi reiciendis vel sint?
            Eveniet maxime quo illo voluptatibus exercitationem asperiores nostrum sit in natus officiis, fuga, accusantium officia quia ut adipisci reiciendis nisi totam. Doloribus harum vitae consectetur illum distinctio quisquam et quia?
            Quisquam necessitatibus temporibus, vitae doloribus assumenda nesciunt repellat at quam commodi adipisci natus veniam facilis ut repudiandae ullam asperiores voluptatibus quod molestias soluta tempora facere ratione ipsum quibusdam suscipit? Harum.
            Culpa expedita impedit consectetur eum nesciunt ab. Dolorem, libero! Neque ut nemo et facilis iusto adipisci officia doloremque? Nostrum tenetur perspiciatis tempora illum ea vitae molestias ad neque harum possimus?
            Fugit mollitia nemo quasi at. Cum quae explicabo officiis placeat hic. Possimus culpa incidunt enim fugiat non voluptatem, tempore odio architecto nam natus, qui debitis deleniti doloremque, mollitia quae quasi?
            In, ratione aliquid perferendis dicta adipisci unde quo exercitationem harum natus architecto maxime excepturi aliquam, consequatur nulla sequi facere incidunt laborum dolore. Necessitatibus eos nesciunt amet dignissimos corrupti hic vitae.
            Assumenda voluptates quod tenetur dolorem obcaecati, eveniet quasi libero, voluptas cum sapiente ut eos dolore, illo vitae. Autem, dolores iure. Dignissimos provident velit ipsum quisquam magnam possimus voluptates aliquam soluta.
            Natus, quod a, repudiandae ad pariatur inventore facilis, nesciunt sint ab accusantium suscipit repellendus necessitatibus explicabo facere omnis voluptatem aut veritatis cupiditate? Ipsa nam consectetur dolorem quam sunt nihil aliquid!
            Incidunt beatae deleniti, cupiditate iste exercitationem, placeat atque totam soluta illo distinctio voluptates repellat voluptatum? Dolorum, necessitatibus impedit. Officia, natus aliquid rerum quae rem voluptatem sapiente velit facilis nostrum omnis.
            Nostrum, eius error rerum totam aliquid exercitationem aut laboriosam rem nulla possimus aspernatur ad provident, alias impedit deleniti illo id corrupti tempore nemo, placeat vero a. Dolores veritatis iure pariatur?
            Fugit provident corrupti aliquam similique quos commodi id architecto cumque, est ratione, libero molestiae iste quia obcaecati iure quam consequatur totam dolor nulla rem sit unde. Voluptas est recusandae amet?
            Deleniti debitis quod impedit similique facilis vel consequatur, nihil adipisci et odio velit hic animi ullam voluptates vero pariatur repellat blanditiis ex odit. Temporibus tempore dolores quis, reiciendis et sint!
            Commodi tenetur dolorum odit, deleniti maxime iusto rem impedit mollitia veritatis vitae officiis pariatur sit vero molestias! Sint quasi harum reprehenderit consectetur! Tempora eos veniam neque dolores nulla sequi! Incidunt!
            Earum nihil corrupti minima ducimus rem distinctio voluptas quam alias perspiciatis iure accusantium similique, sapiente odit reprehenderit tempora? Facilis, explicabo voluptatibus. Et tempora eaque autem, magnam vel sint laboriosam unde?
            Voluptatem nemo illum reiciendis. Exercitationem repellat omnis nesciunt, ducimus delectus quod animi. Sequi, facilis quaerat commodi culpa temporibus harum sunt eos voluptatem, eius nisi pariatur quod, a ratione recusandae at!
            Ipsa deserunt ab dicta natus, placeat assumenda nemo ipsam asperiores veniam reprehenderit. Deleniti earum fugiat nobis ut optio modi, unde labore quidem iusto numquam aperiam dicta molestias sapiente est dolorum?
            Adipisci facere quaerat aut porro iste quae recusandae temporibus minima, quas veniam sunt minus, optio doloribus excepturi eos aspernatur consectetur nesciunt at est praesentium qui exercitationem voluptatem perferendis! Repellat, distinctio?
            Repellat ducimus fugiat, non culpa qui incidunt nisi maxime praesentium. Natus voluptate repellat reprehenderit exercitationem hic, incidunt perferendis dignissimos laborum reiciendis deserunt! Optio harum quia consectetur blanditiis porro, animi vitae.
            Laudantium, tempora adipisci necessitatibus explicabo deleniti enim iusto consequuntur nam expedita impedit cumque molestiae non ex, et nemo soluta. Magni eius obcaecati et dolor magnam impedit repellat nesciunt corrupti alias.
            Reiciendis illo quaerat iure sed repudiandae quibusdam placeat tempora aliquid iste consequuntur? Porro quasi dolorum error fugit culpa fuga, ex accusamus dolores magnam, consequatur vero minima veniam, corporis reprehenderit pariatur!
            Placeat, quos explicabo? Ipsa perspiciatis, earum voluptas rem unde, explicabo doloremque quibusdam quidem minus autem libero consectetur odio itaque nihil sit facilis blanditiis amet odit delectus? Autem eaque rem ducimus.
            Id deserunt sequi ab fuga harum veritatis sit quis, dolorem similique porro quae exercitationem repellendus vitae possimus voluptates minus tempore, iure debitis! Eaque assumenda rem consequuntur quasi quos, possimus eligendi.
            Quo, doloremque ipsa incidunt veniam quae mollitia voluptatibus eum sequi! Cumque cupiditate fugit illo beatae est corporis molestias doloremque. Odio voluptate rerum dolores ad laudantium modi accusamus iure maiores sequi.
            Odio magnam voluptatem veniam dolorum? Reprehenderit nulla distinctio odit blanditiis aspernatur amet facere nisi culpa, illum ullam doloribus, velit earum magni vero architecto quam ipsa possimus! Natus consectetur doloremque minus.
            Corrupti facere voluptatibus placeat perspiciatis unde doloribus velit et, quidem, sit corporis enim eum aliquid nostrum ullam ipsa fuga asperiores a laudantium iure. Magnam, labore ut tenetur quibusdam veniam distinctio.
            Animi placeat non quis accusamus inventore officiis earum, enim at sint magnam maiores. Totam, obcaecati sequi dolores sunt aspernatur vero? Maiores dolores repudiandae exercitationem suscipit id possimus illo nihil omnis?
            Suscipit odio quo voluptatibus doloribus exercitationem fuga. Porro quisquam, magni vel praesentium, consequatur neque quia ad quibusdam provident labore dignissimos illum odit iste aperiam cupiditate exercitationem soluta. Delectus, nulla ipsa.
            Cupiditate, libero praesentium placeat recusandae in culpa, rem doloribus repellat consequatur minus sequi alias earum quidem esse mollitia deleniti voluptatem consectetur provident consequuntur reprehenderit architecto dolores necessitatibus molestias. Cumque, laborum.
            Consectetur saepe natus molestias in omnis expedita quibusdam culpa, et praesentium dolore repudiandae id vitae, ipsum magni nulla possimus nisi hic laboriosam aliquam fugiat architecto recusandae! Odit rem aspernatur aliquam.
            Alias consequuntur perspiciatis voluptates earum veniam, quis possimus in sint voluptas unde eius, magnam similique excepturi natus expedita sapiente nemo non ea totam mollitia. Veniam fugiat et inventore ab quod.
            Et enim earum ea quas iure, sequi dolorem vitae aliquam aspernatur voluptatem eius quia sit ipsam, architecto nesciunt natus veritatis dolorum ex vero laboriosam, illo porro recusandae totam! Laboriosam, dolores.
            Nulla veniam numquam quidem earum fugit? Quod fugiat odio repellendus enim illo veniam consequuntur, adipisci iure necessitatibus earum doloribus repudiandae quo quisquam quas ex! Doloribus eum illum sint. Magnam, quos?
            Asperiores sequi aliquam deleniti exercitationem commodi. Eum optio voluptatibus debitis est. Numquam voluptatibus dolore accusantium veniam enim sit saepe modi. Non minima iste nulla inventore quod, odio ullam id consectetur!
            Ea, ad laborum rerum fuga facilis atque quod nihil maiores illum illo accusantium aperiam? Ab quia corporis soluta nam maxime beatae natus expedita dolorem, vero quod voluptates provident ea excepturi!
            Nulla tempore voluptates cumque laudantium ducimus repudiandae ipsum, quas autem accusantium vel aspernatur quasi beatae in. Voluptatibus mollitia ipsa et iusto, aut, in laudantium quo hic pariatur sunt placeat quibusdam!
            Consequuntur provident accusamus a repudiandae vel numquam sapiente cumque iste molestiae sed nostrum, expedita rerum nobis dolores doloremque iure eaque! Commodi in aliquam quae aspernatur eos doloremque fugiat consequuntur adipisci.
            Saepe beatae odio dolorum natus delectus debitis voluptates, eum fugiat alias, consequatur facilis. Molestias beatae doloremque numquam itaque esse porro corporis nobis. Illum impedit vitae explicabo dolorem, quos provident odio.
            Doloribus rem beatae maiores consequatur iure eum voluptates perspiciatis? Consequatur laborum error corporis temporibus iusto illo doloremque suscipit vitae accusantium ipsum dignissimos debitis cum exercitationem illum at labore, quasi aliquam?
            Maiores ad, sint neque temporibus perferendis sapiente consequuntur architecto vitae ut unde rerum suscipit nam, provident quia eius sit inventore hic nesciunt magni voluptatibus? Reiciendis qui ipsum quia quod blanditiis?
            Cum porro aliquid quia facere aut, praesentium expedita eum temporibus magnam ipsum harum sit minus aperiam ratione sequi repudiandae impedit aliquam fugit a doloribus itaque atque voluptatem. Beatae, at libero.
            A aliquid, sed maiores deleniti laudantium sunt cupiditate asperiores ab nobis veritatis omnis ipsam qui assumenda numquam ipsum molestias deserunt saepe doloribus, magni quo eligendi voluptatem iure iste eius! Perspiciatis!
            Est quidem atque illum corrupti non quo distinctio obcaecati molestias tempore asperiores eaque modi nisi ea omnis sit, nam vel nemo ullam minima ipsa numquam similique alias dignissimos? Vitae, dolores!
            Ad laboriosam odit hic tempore veritatis nesciunt, voluptates eaque expedita porro saepe animi laudantium quia. Sequi nobis laboriosam ipsa ea sit aliquam alias, dolorum deserunt, tempora consequatur quae, repellat corporis.
            Delectus ducimus rem natus quis, in possimus amet eaque maxime atque, inventore blanditiis veritatis, alias ex iusto. Saepe ducimus blanditiis suscipit, ullam, dolorem, voluptatum sunt repudiandae reiciendis praesentium natus at?
            Accusantium, cumque distinctio amet adipisci ratione sed unde, id dolorem aliquid voluptatibus, eveniet modi doloribus molestias tempore. Autem minus cumque ut fugiat dolores sit reprehenderit earum, suscipit velit maiores et.
            Vero natus officia aspernatur nam tempora atque saepe voluptas eos sit veniam a deserunt laborum, necessitatibus delectus eius labore unde hic ut autem tenetur aliquid sequi earum harum quia? Facere!
            Nesciunt quas adipisci mollitia molestias fugiat temporibus exercitationem labore unde numquam incidunt at aliquid omnis est hic repudiandae, quam dolor ea soluta qui error ab quos animi alias. A, doloremque?
            Corporis repellat neque in nisi sapiente enim ipsam? Error repellendus ea neque animi commodi labore optio, ducimus veniam temporibus magnam a quidem debitis soluta non maxime consequatur reiciendis architecto fugit.
            Doloremque eos tempora repudiandae vero recusandae mollitia dolore voluptatibus amet, voluptatum a. Modi optio, vel dolor quia quos recusandae at ex veritatis earum neque inventore sapiente est itaque velit? Minima.
            Quae, aliquam? Cupiditate, aut quis excepturi dolore consequuntur eligendi, officiis dicta corporis esse, sunt incidunt iste. Inventore asperiores saepe dolorem, impedit, deleniti perspiciatis dolor enim at eligendi, rerum necessitatibus ut?
            Repudiandae excepturi, quibusdam architecto accusantium molestias magnam. Voluptatem officia praesentium, culpa corrupti dignissimos eum odio alias doloribus obcaecati, sit, impedit similique delectus nihil illum officiis mollitia suscipit blanditiis id vel.
            Et, ipsum sit eius ipsa eligendi, natus consectetur rerum, veniam tempora eaque ducimus aliquid excepturi corporis aperiam fugiat. Doloribus ex doloremque aut accusamus rerum quo ipsa explicabo voluptate, iure recusandae!
            Odio, iste a quos saepe, aspernatur, obcaecati quisquam et doloremque quae corporis consequatur sed eligendi optio! Itaque debitis delectus libero commodi nobis a. Necessitatibus quibusdam laudantium nulla inventore animi incidunt!
            Provident vero quos ipsam vitae laboriosam cupiditate libero omnis placeat odit minima nesciunt delectus expedita quisquam non nostrum quia assumenda iure tempore culpa incidunt, perferendis iusto! Facilis, tempora! Aspernatur, qui!
            Consequatur ab eligendi repellat ullam repudiandae temporibus tempore, a fuga neque modi rerum beatae explicabo eius ratione, at nesciunt? Ratione molestiae ex modi voluptatibus est placeat at voluptates aperiam vel.
            Amet, reprehenderit reiciendis pariatur quidem repudiandae omnis autem sint, sed dolorem porro doloribus iure ipsum voluptates veniam natus? Consectetur atque laborum dicta officia amet cum possimus vitae id similique illum?
            Pariatur consequatur animi eligendi temporibus quidem impedit itaque sapiente tenetur, a suscipit totam accusantium inventore sunt alias atque eius dolor velit et assumenda iste? Enim minima iste perspiciatis ipsum aspernatur?
            Ratione ab dolorem modi non omnis error doloremque architecto, necessitatibus reprehenderit eaque commodi illo dignissimos sed quo quidem voluptatibus sint? Aspernatur illum quia et tempora sapiente, aliquid minus natus necessitatibus.
            Quibusdam cupiditate possimus ad deleniti! Ullam saepe nesciunt tempora rerum explicabo iste soluta nobis. Rerum ex accusamus obcaecati molestiae odio officiis error dignissimos ducimus consequatur. Adipisci aliquam alias quam at?
            Dolor sunt repellendus modi tenetur necessitatibus reiciendis, deleniti dolores suscipit culpa laudantium eos enim libero voluptatibus asperiores harum numquam voluptates fugiat optio architecto a ducimus sit cupiditate vitae. Ad, harum.
            Aspernatur laudantium at, repellat quia expedita velit, libero maiores placeat quaerat rem veritatis cumque aliquam repellendus nobis fugiat suscipit, dolorum odio reiciendis numquam impedit alias nemo consequatur sed dignissimos. Distinctio?
            Distinctio, aspernatur tenetur fugiat voluptatum animi tempora necessitatibus maiores aliquid ipsam laborum cupiditate, assumenda accusamus doloremque? Voluptatem et neque architecto veritatis. Amet qui tenetur quaerat reprehenderit magni eum adipisci quo!
            Ex, incidunt? Eius laborum ab ipsa vel beatae placeat nemo similique eveniet corporis veniam aperiam neque fugiat iusto, magni nam laudantium ut eos, natus sit aspernatur ratione atque possimus consequuntur.
            Amet nihil voluptas possimus id error quo fuga obcaecati voluptate distinctio sunt quidem ipsam illo odit laboriosam quos placeat sit odio velit at, consectetur accusamus! Excepturi placeat obcaecati modi perferendis.
            Quod doloribus illo optio aliquid id praesentium sequi ab quidem possimus, aut suscipit quaerat quibusdam, itaque vel modi laudantium veniam voluptas laborum rem officia ad? Corporis blanditiis illo adipisci aliquam.
            Officiis quos adipisci pariatur reiciendis consectetur et rerum corrupti ut perferendis. Quam ab distinctio ducimus facilis sint vero expedita ex, asperiores nobis quibusdam nostrum fugit quia tenetur eum esse id.
            Eligendi itaque hic a, porro commodi ducimus? Aut numquam provident illo dolor qui eligendi a quasi amet, at quibusdam repellat! Amet qui eaque neque? Quas repellendus tempore molestias dolorum velit?
            Reprehenderit, sed. Veniam earum corporis suscipit aliquid facilis sed autem temporibus ullam ratione odio. Aut aliquid facere eum cupiditate. Placeat sapiente tenetur vel adipisci. Aliquam tempore dolor tempora a neque!
            Ducimus deleniti alias commodi, dolor doloribus qui culpa eligendi, rem dignissimos consequuntur, aliquid quae fugiat blanditiis. Ab porro consectetur voluptatum iste repellat suscipit numquam ullam eligendi odio, totam, earum natus!
            Expedita corrupti magnam consequuntur doloribus, cumque, molestias est nobis eaque, numquam dolores eum fugit. Reprehenderit magnam ipsa, voluptatum unde, saepe vel ab dignissimos officia at magni praesentium consequuntur reiciendis accusamus!
            Nostrum eveniet itaque sequi doloremque libero repudiandae? Iure sequi tempora optio autem nostrum inventore distinctio reiciendis aut quasi hic? Optio omnis officiis quo animi at assumenda quod et consequatur in?
            Error ab sed non magni deserunt nisi adipisci nobis rerum aliquam enim quam quibusdam molestiae, dolorem quas. Accusamus ipsum aperiam, et dolorum est optio repellendus? Fuga nobis doloremque vitae unde?
            Harum, officiis quaerat incidunt est sed necessitatibus, voluptate nobis repellendus reiciendis tempora illo consectetur expedita explicabo, dolorem hic animi ratione dolore eum? Ipsum placeat quisquam enim quaerat, dolore amet magni.
            Consectetur fugiat distinctio recusandae itaque explicabo eveniet odit eum quia. Aspernatur iure excepturi sequi a porro saepe voluptatum quod modi perspiciatis, magni fugit quas, quos sint illo! Eligendi, libero cum!
            Ab sequi eaque dolorem nisi sint totam officiis accusantium cum. Quibusdam inventore doloribus adipisci doloremque quia, labore similique tenetur culpa laborum deserunt modi debitis dolores officiis nulla, corporis quidem deleniti.
            Quas illo dolores, vel laudantium officiis eius dignissimos sed, ducimus non ut corporis ipsam iure molestias ea neque ex repellat quae quia. Molestiae ad et atque sint saepe cupiditate eveniet?
            Libero, ratione nostrum quas delectus incidunt pariatur natus optio soluta magnam omnis est molestiae minus alias asperiores eos fugit eligendi labore dolorum? Ut doloremque perferendis dolor odit nobis alias ea.
            Alias, nobis odio nulla fugiat, a animi, dolorum laborum quia dicta in esse dolor. Vel eveniet libero dicta ea aperiam sapiente a veritatis ab dolor. Aspernatur est aliquam mollitia dicta?
            Sequi quisquam a deserunt quasi doloremque natus, nobis porro itaque velit culpa in aspernatur, laboriosam vero fugiat neque necessitatibus voluptatem eveniet eos aperiam maiores fuga. Nostrum cumque exercitationem incidunt illo?
            Accusamus animi sapiente qui fugit, cupiditate praesentium quasi soluta ex quo pariatur reprehenderit esse maiores fuga velit ratione ad dignissimos saepe. Iure omnis voluptatibus fugiat perspiciatis! Numquam, soluta? Quae, aliquid?
            Sit, dolore! Consequatur vero maxime, repudiandae vitae cupiditate sit dignissimos, fuga molestiae magni saepe consectetur tenetur natus, quia repellat consequuntur. Commodi tenetur vero, suscipit libero veritatis hic eligendi aut aperiam.</p>
            <SEO
                title='About us'
                description='Our platform is aimed at allowing students to write reviews about lecturers through our system'
                name='About'
                type='website'
            />
            <section className='my-12' id="contact">
                <h2 className="text-center text-3xl font-semibold mb-12 ">Contact Us</h2>
                {/* <h2 className="">Contact us the get started</h2> */}
                <div className="lg:flex justify-center gap-6">
                    <div className="lg:w-2/5 border-y-2 border-primary shadow-2xl p-6">
                        <div>
                            <Detail til='Location' det='A108 Adam Street, New York, NY 535022' icon='Geo' />
                            <Detail til='Location' det='A108 Adam Street, New York, NY 535022' icon='Envelope' />
                            <Detail til='Call' det='' icon='Phone' />
                        </div>
                        <div className="h-96 mt-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.325156009243!2d9.271245175103704!3d4.156325346136006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106133478cc3b989%3A0x6e46b6d1f8b23428!2sNDONGO!5e0!3m2!1sen!2scm!4v1688762384081!5m2!1sen!2scm" className="b-0 w-full h-full" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="lg:mt-0 mt-8 lg:w-7/12 border-y-2 border-primary shadow-2xl p-6">
                        <Formik
                            initialValues={{
                                Name: '',
                                Email: '',
                                Subject: '',
                                Message: ''

                            }}
                            validationSchema={Yup.object().shape({
                                Name: Required,
                                Email,
                                Subject: Required,
                                Message: Required
                            })}
                            onSubmit={values => alert(JSON.stringify(values))}
                        >

                            <Form>
                                <div className="lg:flex sm:flex gap-0 lg:gap-4 grid sm:gap-4 ">
                                    <Input
                                        label='Name'
                                        id='Name'
                                        name='Name'
                                        placeholder='your name'

                                    />
                                    <Input
                                        label='Email'
                                        id='Email'
                                        name='Email'
                                        type='email'
                                        placeholder='your email'

                                    />
                                </div>
                                <Input
                                    label='Subject'
                                    id='Subject'
                                    name='Subject'
                                    placeholder='your message subject'
                                />
                                <Input
                                    label='Message'
                                    textarea
                                    id='Message'
                                    name='Message'
                                />
                                <button type='submit' className='mt-4 sm:w-48 w-full btn btn-primary'>Send Message</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </div>
    )

}

const Detail = ({ til, det, icon }) => {

    return (
        <div className="flex gap-4 pr-3 mb-6 cursor-pointer">
            <div className="btn btn-circle"><Icon name={icon} className='text-primary transition-all text-lg' /> </div>
            <div >
                <h3 className='font-semibold text-lg'>{til}:</h3>
                <p className='text-sm text-slate-500'>{det}</p>
            </div>
        </div>)
}

