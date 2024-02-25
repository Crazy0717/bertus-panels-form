import React, { useState } from "react";
import { FormText, Radio, TextArea } from "../ui";
import Loader from "./Loader";
import Image from "./Image";
const MainForm = () => {
  const [loader, setLoader] = useState(false);

  setTimeout(() => {
    setLoader(false);
  }, 2000);

  return (
    <div>
      {loader ? <Loader /> : ""}

      <h1 className="mt-3 text-center  Bertus_text ">
        «Bertus Panels» Янги ходимлар учун сўров анкетаси.
      </h1>
      <form>
        <Image />
        <TextArea label={"Исм/Шарифингиз:"} width={"350px"} />
        <FormText
          defaultValue={0}
          label={"Ёшингиз:"}
          type="number"
          width={"200px"}
          height={"`86px"}
        />
        <FormText
          label={"Телефон рақамингиз:"}
          type="tel"
          defaultValue={"+998 "}
          height={"`86px"}
        />

        <TextArea label={"Манзилингиз:"} height={"100px"} />
        <TextArea
          label={"Оилавий холатингиз:(оилали/неча фарзандингиз бор):"}
          height={"100px"}
        />
        <TextArea
          label={
            "Маълумотингиз:(кайси укув юртини тамомлагансиз/мутахасислигингиз):"
          }
          height={"100px"}
        />
        <Radio
          type={"radio"}
          id1={"id1"}
          id2={"id2"}
          name={"first-checket"}
          label={"Компьютерда ишлашни биласизми?"}
        />
        <Radio
          type={"radio"}
          id1={"id3"}
          id2={"id4"}
          name={"second-checket"}
          label={"Судланганмисиз?"}
        />
        <TextArea label={"Кайси тилларни мукаммал биласиз?"} height={"100px"} />
        <Radio
          type={"radio"}
          id1={"id5"}
          id2={"id6"}
          name={"three-checket"}
          label={"Хайдовчилик Гувохномангиз борми?"}
        />
        <TextArea
          label={"Суннги 1-3 йилларда ишлаган иш ерингиз:"}
          height={"100px"}
        />
        <TextArea label={"Қандай лавозимларда ишлагансиз"} height={"100px"} />
        <TextArea
          label={"Нима сабабдан эски иш ерингиздан кетдингиз? Сабаби нима!"}
          height={"100px"}
        />
        <TextArea
          label={"Эски иш ерингизда сизни нималар қониқтирмас эди?"}
          height={"100px"}
        />
        <TextArea
          label={"Эски иш ерингизда сизга нималар ёқар эди?"}
          height={"100px"}
        />
        <TextArea
          label={"Эски иш ерингиздаги  қанча маош олар эдингиз?"}
          height={"100px"}
        />
        <TextArea
          label={"Таклиф этилган иш учун қанча маош олишни хохлайсиз?"}
          height={"100px"}
        />
        <TextArea
          label={"Янги иш қидиришга сизни нима мажбур қилди?"}
          height={"100px"}
        />
        <TextArea
          label={"Биз билан ишлашдан кўзлаган мақсадингиз?"}
          height={"100px"}
        />
        <TextArea
          label={"Қанча муддат бизни корхонамизда ишламоқчисиз?"}
          height={"100px"}
        />
        <TextArea label={"Қандай яхши сифатларингиз бор?"} height={"100px"} />
        <TextArea
          label={
            "Нима камчиликларим бор деб уйлайсиз? Йўқотишни хохлаган ёмон одатларингиз борми?"
          }
          height={"100px"}
        />
        <TextArea
          label={"Коллектив билан чиқишиб ишлай оласизми?"}
          height={"100px"}
        />
        <TextArea
          label={"Бизни корхонамизда сизни энг қизиқтирган нарса нима?"}
          height={"100px"}
        />
        <TextArea
          label={
            "Иш жараёнида қилган ишингиз танқидга учраса, буни қандай қабул қиласиз?"
          }
          height={"100px"}
        />
        <TextArea
          label={
            "Ишга ўз вақтида келмасангиз, ўзингизга қандай чора кўрилишини хохлардингиз?"
          }
          height={"100px"}
        />

        <TextArea
          label={
            "Ўз вазифангизни келишилгандек бажармасангиз сизга қандай чора кўрилишини хохлардингиз:"
          }
          height={"100px"}
        />

        <div className="m-3">
          <label htmlFor="floatingTextarea2 " className="mb-3">
            Неча кун синов муддатида ишлай оласиз?
          </label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={"id4"} />
            <label className="form-check-label" htmlFor={"id4"}>
              3 кун
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={"id4"} />
            <label className="form-check-label" htmlFor={"id4"}>
              5 кун
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={"id4"} />
            <label className="form-check-label" htmlFor={"id4"}>
              7 кун
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={"id4"} />
            <label className="form-check-label" htmlFor={"id4"}>
              10 кун
            </label>
          </div>
        </div>
        <TextArea
          label={
            "Бу ерга эълон орқали келдингизми ёки танишингиз тавсияси биланми? "
          }
          height={"100px"}
        />

        <div className="d-grid gap-2 m-3">
          <button className="btn btn-primary" type="submit">Йубориш</button>
        </div>
      </form>
    </div>
  );
};

export default MainForm;
