import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: string[] = []
    tarefaAdd: string = ''

    addTask() {
      if(this.tarefaAdd.length != 0) {
        this.tasks.push(this.tarefaAdd)
        this.tarefaAdd = ''
      }     
    }

    classe: string = ''

    excluirTask(tarefa: any) {
      if(window.confirm('Deseja deletar esta tarefa?')){
        this.tasks.splice(this.tasks.indexOf(tarefa), 1);
      }  
    }  
 }


 