import localStorageM from "./localStorageKullan";

export default function usenightModeOn(key, baslangicDegeri) {
  const [acik, setAcik] = localStorageM(key, baslangicDegeri);

  const acikM = () => {
    acik === false ? setAcik(true) : setAcik(false);
  };

  return [acik, setAcik, acikM];
}
