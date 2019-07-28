import{ Directive, HostListener, HostBinding} from "@angular/core";
@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') openDropdown: boolean = false;

    @HostListener('click')
    onOpenDropdown(){
        this.openDropdown = !this.openDropdown;
    }

}