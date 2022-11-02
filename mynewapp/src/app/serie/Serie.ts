export class Serie  {
[x: string]: any;
  idSerie: number;
  nombre: string;
  canal: string;
  temporadas: number;
  descripcion: string;
  link: string;
  imagen: string;

  constructor(id: number,pnombre: string,pcanal: string,ptemporada:  number, pdescripcion: string, plink: string,pimagen: string) {
      this.idSerie = id;
      this.nombre = pnombre;
      this.canal = pcanal;
      this.temporadas = ptemporada;
      this.descripcion = pdescripcion;
      this.link = plink;
      this.imagen = pimagen

  }
}
