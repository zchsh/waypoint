import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface ProjectSettingsArgs {
  project;
}

export default class AppFormProjectVariablesSettings extends Component<ProjectSettingsArgs> {
  @tracked args;
  @tracked project;
  @tracked isCreating: boolean;

  constructor(owner: any, args: any) {
    super(owner, args);
    let { project } = this.args;
    this.project = project;
    this.isCreating = false;
  }

  @action
  addVariable() {
    this.isCreating = true;
  }

  @action
  async saveVariableSettings(e: Event) {
    e.preventDefault();
  }
}
