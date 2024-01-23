import Image from "next/image";

export default function Home() {
  return (
  <div className="Home" style={{width: 1920, height: 1080, position: 'absolute', background: 'white'}}>
    <div className="Main" style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, #051421 0%, rgba(20.77, 51.56, 97.75, 0.80) 100%)'}}>
      <div className="SudokuFrame" style={{width: 900, height: 900, left: 510, top: 90, position: 'absolute', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '10px black solid'}}>
        <div className="I" style={{width: 300, height: 300, left: 600, top: 600, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}}>
          <div className="InsideSquareI" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="H" style={{width: 300, height: 300, left: 300, top: 600, position: 'absolute'}}>
          <div className="OutsideSquareH" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}} />
          <div className="InsideSquareH" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="G" style={{width: 300, height: 300, left: 0, top: 600, position: 'absolute'}}>
          <div className="OutsideSquareG" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}} />
          <div className="InsideSquareG" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="F" style={{width: 300, height: 300, left: 600, top: 300, position: 'absolute'}}>
          <div className="OutsideSquareF" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}} />
          <div className="InsideSquareF" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="E" style={{width: 300, height: 300, left: 300, top: 300, position: 'absolute'}}>
          <div className="OutsideSquareE" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}} />
          <div className="InsideSquareE" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="D" style={{width: 300, height: 300, left: 0, top: 300, position: 'absolute'}}>
          <div className="OutsideSquareD" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}} />
          <div className="InsideSquareD" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="C" style={{width: 300, height: 300, left: 600, top: 0, position: 'absolute'}}>
          <div className="OutsideSquareC" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}} />
          <div className="InsideSquareC" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="B" style={{width: 300, height: 300, left: 300, top: 0, position: 'absolute'}}>
          <div className="OutsideSquareB" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}}></div>
          <div className="InsideSquareB" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
        <div className="A" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
          <div className="OutsideSquareA" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '5px black solid'}} />
          <div className="InsideSquareA" style={{width: 300, height: 300, left: 0, top: 0, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 100, height: 100, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle2" style={{width: 100, height: 100, left: 100, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle3" style={{width: 100, height: 100, left: 200, top: 0, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle4" style={{width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle5" style={{width: 100, height: 100, left: 100, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle6" style={{width: 100, height: 100, left: 200, top: 100, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle7" style={{width: 100, height: 100, left: 0, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle8" style={{width: 100, height: 100, left: 100, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
            <div className="Rectangle9" style={{width: 100, height: 100, left: 200, top: 200, position: 'absolute', background: '#D9D9D9', border: '2px black solid'}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
