export const Item = (props) => (
  /*
   * name <string>
   * id <integer>
   * class <string>
   * type <string>
   * subType <string>
   * value <integer>
   * rarity <string>
   * description <list>
   *    desTitle <string>
   *    desText <string>
   * category <array>
   * imageBackground <url>
   * imageForeground <url>
   */
  <div className={props.value.rarity + "-frame" + " card n" + props.value.id}>
    <div className={props.value.rarity + "-background" + " card-content"}>
      <ul className={"content__title-bar item-" + props.value.subType}>
        <li className={props.value.rarity + " rarity title"}>
          {props.value.rarity}
        </li>

        {props.value.name.length > 17 && props.value.name.length < 20 && (
          <li className="name title size-small">{props.value.name}</li>
        )}
        {props.value.name.length > 19 && props.value.name.length < 22 && (
          <li className="name title size-xsmall">{props.value.name}</li>
        )}
        {props.value.name.length >= 22 && props.value.value == null && (
          <li className="name title size-xxsmall">{props.value.name}</li>
        )}
        {props.value.name.length >= 22 && props.value.value != null && (
          <li className="name title size-xxxsmall">{props.value.name}</li>
        )}
        {props.value.name.length < 18 && (
          <li className="name title">{props.value.name}</li>
        )}

        <li className={"value-" + props.value.subType + " value title nv"}>
          {props.value.value}
        </li>
      </ul>
      <div className="content__image">
        <div
          className="background"
          style={{
            backgroundImage: "url(" + props.value.imageBackground + ")",
          }}></div>
        <div
          className="foreground"
          style={{
            backgroundImage: "url(" + props.value.imageForeground + ")",
          }}></div>
      </div>
      <div className="content__description">
        <div className="des-categories">
          {props.value.categories.map((val) => {
            return (
              <>
                <div className={"cat-box cat-" + props.value.rarity}>
                  {val.toUpperCase()}
                </div>
              </>
            );
          })}
        </div>
        {/* For each 'descriptionBox do the following' */}
        {props.value.description.map((val) => {
          return (
            <>
              <div className="des-box">
                <div className="box__title">{val.desTitle}</div>
                <div className="box__text">{val.desText}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  </div>
);

/*
finished when:✔️
- change common/rare bg images ✔️
- add read rarity colors to '.rarity' ✔️
- fix knockdown shield lv 1 ✔️
- change health items title color ✔️ 
- add survival items  ✔️ 
- backpacks  ✔️ 
- add search bar  ✔️ 
- add footer  ✔️ 

*/
