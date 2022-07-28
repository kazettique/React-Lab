import FloatingKeyboard from '@/components/FloatingKeyboard';
import NumberInput, { IProps as NumberInputProps } from '@/components/NumberInput';
import { useEffect, useRef, useState } from 'react';

export default function FloatingKeyboardTest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerEl(containerRef.current);
    }
  }, []);

  const numberInputProps: NumberInputProps = {
    amount,
    updateAmount: (newAmount) => setAmount(newAmount),
    onCancel: () => setAmount(0),
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-300">
      <div ref={containerRef} className="w-1/2 h-1/2 bg-yellow-200 overflow-auto relative p-3">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ea ad exercitationem voluptatum voluptatem?
          Itaque ad necessitatibus dolore autem, veritatis exercitationem dolor tempora labore. Necessitatibus quo
          labore possimus vero, distinctio quia modi accusantium cupiditate, sint deserunt praesentium laboriosam vitae
          similique, nesciunt adipisci eveniet odit repudiandae deleniti consequuntur perferendis doloremque corrupti.
          Cupiditate quos perferendis odit incidunt earum at totam eum perspiciatis harum, adipisci laboriosam ullam
          omnis excepturi est. Vel blanditiis voluptatum magni ducimus dolores similique, nesciunt eveniet praesentium
          laborum ex ipsa rerum, dolorem doloribus eum natus beatae aut incidunt. Beatae accusantium error, id nostrum,
          ipsa non unde, quisquam nulla temporibus odit fugiat laborum asperiores hic pariatur molestiae itaque
          obcaecati! Architecto, quam ipsa at autem illum ipsam alias cupiditate magni! Veniam obcaecati rerum unde illo
          illum necessitatibus ab praesentium, dolorum harum ipsam aperiam est itaque atque animi eum, cumque labore
          explicabo totam placeat amet nesciunt qui! Eius natus modi dicta cumque ea placeat, expedita consectetur quod
          possimus consequuntur vitae iusto dignissimos minima perspiciatis odit libero? Iste facilis possimus maiores
          perferendis itaque? Debitis quaerat ad laborum consequuntur totam, perferendis dolorum, cumque, at
          necessitatibus saepe vero eum. Exercitationem unde tempore blanditiis, accusantium voluptatem reiciendis illum
          excepturi animi id recusandae tenetur fuga perferendis adipisci perspiciatis.
        </div>
        <FloatingKeyboard containerEl={containerEl} />
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo exercitationem error nobis ea blanditiis labore
          animi repudiandae minima ut, dolores eaque soluta placeat tenetur inventore voluptatum vel dicta, quas
          voluptatibus adipisci quos consequuntur dolor quod. Facere atque corporis iusto eaque officiis esse
          perspiciatis optio? Nesciunt esse aut eligendi minus rem.
        </div>
        <div className="w-full h-9">
          <NumberInput {...numberInputProps} />
        </div>
        <FloatingKeyboard containerEl={containerEl} />
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore labore placeat quo tempore minus eveniet
          sint corporis consequatur unde accusantium autem eaque, eligendi asperiores, maxime dolorum harum, distinctio
          quia necessitatibus impedit nulla laborum delectus voluptate. Praesentium, commodi nobis eaque sunt eos id
          laudantium incidunt accusantium reprehenderit ab quibusdam provident, eligendi alias numquam similique, vero
          neque. Harum quis tempore ducimus eaque tempora, aut dignissimos cum soluta saepe sunt accusantium molestiae
          consequatur ex hic architecto provident laboriosam non reiciendis. Alias voluptates repudiandae vel? Qui
          facere, aperiam minima odit eligendi pariatur distinctio sint hic delectus eveniet quibusdam fugit natus quis
          at debitis. Sapiente quibusdam vitae, cum necessitatibus animi voluptatum ipsa a explicabo non soluta illo
          similique laborum quasi accusantium repellat, voluptates facilis nulla itaque mollitia porro fugiat voluptas?
          Provident repudiandae tenetur, cupiditate blanditiis ullam ad neque inventore obcaecati non totam pariatur
          similique consequatur aut veritatis accusamus sed dolore aperiam a nihil. Unde eaque, sequi laudantium
          voluptate facere enim neque nostrum optio quam recusandae, corporis ea aut quidem veritatis iusto minus totam
          libero ipsum debitis ipsam? Numquam excepturi molestias natus atque accusamus ad porro quas animi dolores
          facilis, dolorem nihil id et quae incidunt ut deserunt debitis, repellendus quis consequatur quos autem culpa
          nisi? Numquam culpa odit ratione magnam et similique eum perspiciatis quo ea, dolores blanditiis enim
          dignissimos magni tenetur vel. Corrupti nostrum ullam eaque quasi. Eos corporis nulla nihil quas odio ad
          praesentium sit quisquam aperiam vero. Autem minima quos facere ut? Distinctio repellendus quisquam
          voluptatibus pariatur! Fugit consequuntur doloremque, sunt sit quam consectetur eveniet officiis incidunt amet
          est accusamus, quisquam sequi corporis reiciendis dicta, necessitatibus omnis odit. Reiciendis in, sequi
          reprehenderit itaque vitae porro magnam? Eos deleniti, in explicabo sed nam ullam deserunt esse, commodi
          dolorem facilis sunt! Eius, nesciunt perferendis aperiam minima similique totam dolorum commodi eum voluptatum
          neque adipisci porro asperiores minus dicta. Ipsum ullam tenetur deserunt earum nobis accusamus! Quae animi id
          ab delectus molestiae? Tempora optio atque dignissimos eligendi, perspiciatis beatae quas pariatur odit
          deserunt voluptate asperiores. Reiciendis voluptatem dolores illo deleniti et, earum magni fugit quia, dolore
          minima blanditiis consectetur cupiditate harum amet sunt. Totam voluptatem a magni reprehenderit, dignissimos,
          quod dolores itaque earum quia ipsum placeat hic dolorum! Vero, eum cum minima quisquam corporis saepe
          assumenda laudantium et quaerat necessitatibus fugiat. Ducimus pariatur nesciunt dolorem, animi dolore
          similique, porro a, consectetur ipsa sit voluptate hic! Laboriosam deserunt excepturi nam accusantium facere
          aperiam. Impedit, tempora aliquam.
        </div>
      </div>
    </div>
  );
}
