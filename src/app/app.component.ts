import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-chips-custom';

  public tags = [];
  readonly toastrConfig = {
    positionClass: 'toast-top-full-width', disableTimeOut: true, closeButton: true, preventDuplicates: true
  };

  public mileageList: any[];
  public carDetailForm: FormGroup;
  public submitted = false;
  public dropdownData = [];
  public loading: boolean;
  public isMobile: boolean;
  public responseDropdown: any;
  public responseType: number;
  public placeholder = 'Select Make';
  public searchText: string;

  get f() { return this.carDetailForm; }
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.initializeForm();
    this.reloadDropdowns('');
  }

  private initializeForm() {
    this.carDetailForm = this.formBuilder.group({
      MakeResponse: [null],
      ModelResponse: [null],
      MonthResponse: [null],
      YearResponse: [null],
      BodyResponse: [null],
      FaceliftResponse: [null],
      SeatsResponse: [null],
      EngineResponse: [null],
      TransmissionResponse: [null],
      WheelDriveResponse: [null],
      TrimLevelResponse: [null],
      TrimLevelDetailResponse: [null],
      colorId: [null],
      mileageId: [1],
      mileageValue: [null, [Validators.required, Validators.min(1)]],
      registrationNumber: [null, [Validators.required, Validators.maxLength(25)]],
    });
  }

  public ngOnInit() {
  }


  public onSubmit = () => {
    this.submitted = true;
  }

  public reloadDropdowns = (value: any) => {
    if (!value) {
      this.responseDropdown = [];
      this.responseDropdown.push({
        href: 1, name: 'Audi',
        images: [{
          href: `https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=asphalt-auto-automobile-164634.jpg&fm=jpg`,
          name: ``
        }]
      });
      this.responseDropdown.push({
        href: 2, name: `Toyota`,
        images: [
          {
// tslint:disable-next-line: max-line-length
            href: `https://images.pexels.com/photos/445399/pexels-photo-445399.jpeg?cs=srgb&dl=auto-automobile-automotive-445399.jpg&fm=jpg`,
            name: ``
          }]
      });
      this.responseDropdown.push({
        href: 3, name: `Honda`,
        images: [
          {
// tslint:disable-next-line: max-line-length
            href: `https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?cs=srgb&dl=audi-automobile-car-lights-1149831.jpg&fm=jpg`,
            name: ``
          }]
      });
      this.responseDropdown.push(
        {
          href: 4,
          name: `Suzuki`,
          images: [
            {
// tslint:disable-next-line: max-line-length
              href: `https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?cs=srgb&dl=asphalt-auto-automobile-1164778.jpg&fm=jpg`,
              name: ``
            }]
        });
      this.responseDropdown.push(
        {
          href: 5, name:
            `BMW`, images: [
              {
                href: `https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg`,
                name: ``
              }]
        });
      this.dropdownData = this.responseDropdown;
    }
  }
  setPlaceHolder = (responseType: number) => {
  }
  public addTag = (selectedResponse) => {
    if (this.tags) {
      this.tags.push(selectedResponse);
    } else {
      this.tags = [];
    }

    this.searchText = '';
  }
  public onKeyUp = (event: any) => {
    this.responseDropdown = this.dropdownData.filter(response => {
      const name = response.name.toLowerCase();
      return name.includes(event.toLowerCase());
    });
  }

  public removeTag = (tag: any, previous: any, index: number): void => {
    if (!!tag) {
      this.removeRemaining(index);
      if (previous) {
        this.reloadDropdowns(previous);
      } else {
        this.ngOnInit();
      }

    } else {
      this.tags.splice(-1);
    }
  }
  public removeRemaining = (index: number) => {
    for (let i = index; i < this.tags.length; i++) {
      this.tags.splice(i, this.tags.length);
    }
  }
}
