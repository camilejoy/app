import { Component, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'activity12';

  constructor(private userService: UserService,
              private modalService: NgbModal,
              private cdRef: ChangeDetectorRef) {}

  private users: User[];
  private user: User[];
  private id;

  private action;

  private addname;
  private addage;

  private edtname;
  private edtage;

  myform: FormGroup;
  name: FormControl;
  age: FormControl;

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  elements: any = [];
  previous: any = [];
  headElements = ['Name', 'Age', 'Action'];

  ngOnInit(){
    this.getUsers();
    this.createFormControls();
    this.createForm();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  

  createFormControls(){
    this.name = new FormControl('', [Validators.required, Validators.pattern("[^@#$*<>~`{}+=]*")]);
    this.age = new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(2)]);
  }

  createForm(){
    this.myform = new FormGroup({
      name: this.name,
      age: this.age
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.user = data;

      this.mdbTable.setDataSource(this.users);
      this.users = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();

      this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);

      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
    })
  }

  addNewUser(deletedModal){
    var bool = true;

    for(var i=0; i<this.users.length; i++){
      if(this.users[i].name == this.addname){
        bool = false
      }
    }

    if(bool){
      var user = new User();
      user.name = this.addname;
      user.age = this.addage;

      this.userService.addUser(user).subscribe((data) => {
        this.getUsers();
      });

      this.myform.reset();
      this.modalService.dismissAll();
      this.deletedModal(deletedModal, "add");
    }
    else{
      this.deletedModal(deletedModal, "exist");
    }
  }

  editNewUser(deletedModal){
    var bool = true;

    for(var i=0; i<this.users.length; i++){
      if(this.users[i].name == this.edtname){
        bool = false;
      }
    }

    if(bool){
      var user = new User();
      user.name = this.edtname;
      user.age = this.edtage;

      this.userService.updateUser(user, this.id).subscribe((data) => {
        this.getUsers();
      });

      this.myform.reset();
      this.modalService.dismissAll();
      this.deletedModal(deletedModal, "update");
    }
    else{
      this.deletedModal(deletedModal, "exist");
    }
  }

  deleteSeed(deletedModal){
    this.userService.deleteUser(this.id).subscribe((data)=>{
      this.getUsers();
    })
    
    this.modalService.dismissAll();
    this.deletedModal(deletedModal, "delete");
  }

  addUserModal(addUser){
    this.modalService.open(addUser, { centered: true });
  }

  editUserModal(editUser, id){
    this.id = id;
    this.userService.getUser(id).subscribe((data)=>{
      this.user = data;
      this.getUsers();
    });

    for(var i=0; i<this.user.length; i++){
      if(this.id == this.user[i]._id){
        this.edtname = this.user[i].name;
        this.edtage = this.user[i].age;
      }
    }
    this.modalService.open(editUser, { centered: true });
  }

  deleteModal(del, id){
    this.id = id;
    this.modalService.open(del, { centered: true });
  }

  deletedModal(deletedModal, action){
    this.modalService.open(deletedModal, { centered: true });
    this.action = action;
  }
}
