import { Guid } from "guid-typescript";

export class Word {

    public id: string = Guid.create().toString();
    public hun: string = '';
    public eng: string = '';
    public goods: number = 0;
    public bads: number = 0;

    public GetCopy(): Word{
        let w: Word = new Word();
        w.hun = this.hun;
        w.eng = this.eng;
        w.goods = this.goods;
        w.bads = this.bads;
        return w;
    };
}
