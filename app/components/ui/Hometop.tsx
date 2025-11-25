import StyleSheet from './Hometop.module.scss';

interface TopItem {
  title: string;
  description: string;
  btn: string;
}

export function Hometop({ title, description, btn }: TopItem) {
  const words = title.split(' ');

  return (
    <section className={StyleSheet.hometop}>
      <div className={StyleSheet.hometopLeft}>
        <h2>
          {words.map((word, index) => (
            <span key={index}>
              {index === words.length - 2 || index === words.length - 4 ? (
                <span className={StyleSheet.green}>{word}</span>
              ) : (
                <span>{word}</span>
              )}{" "}
            </span>
          ))}
        </h2>
      </div>

      <div className={StyleSheet.hometopRight}>
        <p>{description}</p>
        <button>{btn}</button>
      </div>
    </section>
  );
}
