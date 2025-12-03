"use client";
import { useHomepageQuery } from "@/hooks/useHomepageQuery";
// import { buildAbsoluteUrl } from "@/lib/utils";
import StyleSheet from './Hometop.module.scss';

interface TopItem {
  title: string;
  description: string;
  btn: string;
}

export function Hometop({ title, description, btn }: TopItem) {
  const { data, loading, error } = useHomepageQuery();
  const topContents = data?.homepage.topcontents;
  const words = title.split(' ');
  const topContentWords = topContents?.toptitle.split(' ');

  if(loading){
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
  if(error || !data){
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

  return (
    <section className={StyleSheet.hometop}>
      <div className={StyleSheet.hometopLeft}>
        <h2>
          {topContentWords?.map((word, index) => (
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
        <p>{topContents?.topdescription}</p>
        <button>{btn}</button>
      </div>
    </section>
  );
}
