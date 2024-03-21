import { Injectable, TemplateRef } from '@angular/core';


export interface Toast {
	template: TemplateRef<any>;
	classname?: string;
	delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  toasts: Toast[] = [];

	show(toast: any) {
		this.toasts.push(toast);
	}

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}


