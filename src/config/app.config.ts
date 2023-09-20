interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage your freelancer profile',
    'Apply for jobs',
    'Manage your worklog',
    'Manage your applications',
  ],
  ownerAbilities: [
    'Manage hiring process',
    'Manage freelancer profiles',
    'Manage worklogs',
    'Manage company and job details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4b57632e-80db-495e-bb89-237ae23a296c',
};
