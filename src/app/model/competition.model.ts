export class CompetitonModel{

  competitionId: number,
  title:string,
  description:string,
  startDate:string,
  endDate:string,
  status:string

  constructor(){
    this.competitionId=0;
    this.title='';
    this.description='';
  }

}