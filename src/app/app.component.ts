import { Component } from "@angular/core";
import { ConnectionServiceService } from "./connection-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "online-status-demo";
  isconnected = true;
  status: string = "Online";
  constructor(private connectionService: ConnectionServiceService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isconnected = isConnected;
      if (this.isconnected) {
        this.status = "Online";
      } else {
        this.status = "Offline";
      }
    });
  }
}
