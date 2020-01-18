import { Component,ViewChild,ComponentFactoryResolver } from '@angular/core';
import {HostDirective} from './host.directive';
import { HelloComponent, HiComponent } from './hello.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChild(HostDirective,{static:true})
  childRef:HostDirective;
  components=[HelloComponent,HiComponent];
  constructor(public componentFR:ComponentFactoryResolver){}
  load(id){
    this.childRef.viewCF.clear();
    const resolvedFact=this.componentFR.resolveComponentFactory(this.components[id]);
    const compRef=this.childRef.viewCF.createComponent(resolvedFact);
    compRef.instance.name='test';
  }
}
