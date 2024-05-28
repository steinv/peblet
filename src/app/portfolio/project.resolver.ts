import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import projects from './projects.json';

@Injectable()
export class ProjecResolver  {

    public resolve(route: ActivatedRouteSnapshot): Observable<Project> | Project {
        const projectName = route.params['project'];
        for(const project of projects) {
            if(projectName === project.name) {
                return project;
            }
        }
        return EMPTY;
    }
}

export interface Project {
    "image": string,
    "name": string
    "technology": string[],
    "description": string,
    "website"?: string,
    "source"?: string
}