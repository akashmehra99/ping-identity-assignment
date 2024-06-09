export interface CountryApiType {
  date: number;
  states: number;
  positive: number | null;
  negative: number | null;
  pending: number | null;
  hospitalizedCurrently: number | null;
  hospitalizedCumulative: number | null;
  inIcuCurrently: number | null;
  inIcuCumulative: number | null;
  onVentilatorCurrently: number | null;
  onVentilatorCumulative: number | null;
  dateChecked: string;
  death: number | null;
  hospitalized: number | null;
  totalTestResults: number;
  lastModified: string;
  recovered: null;
  total: number;
  posNeg: number;
  deathIncrease: number;
  hospitalizedIncrease: number;
  negativeIncrease: number;
  positiveIncrease: number;
  totalTestResultsIncrease: number;
  hash: string;
}

export interface StatesCurrentApiType {
  date: number;
  state: string;
  positive: number;
  probableCases: number | null;
  negative: number | null;
  pending: number | null;
  totalTestResultsSource: TotalTestResultsSource;
  totalTestResults: number;
  hospitalizedCurrently: number | null;
  hospitalizedCumulative: number | null;
  inIcuCurrently: number | null;
  inIcuCumulative: number | null;
  onVentilatorCurrently: number | null;
  onVentilatorCumulative: number | null;
  recovered: number | null;
  lastUpdateEt: null | string;
  dateModified: Date | null;
  checkTimeEt: null | string;
  death: number;
  hospitalized: number | null;
  hospitalizedDischarged: number | null;
  dateChecked: Date | null | string;
  totalTestsViral: number | null;
  positiveTestsViral: number | null;
  negativeTestsViral: number | null;
  positiveCasesViral: number | null;
  deathConfirmed: number | null;
  deathProbable: number | null;
  totalTestEncountersViral: number | null;
  totalTestsPeopleViral: number | null;
  totalTestsAntibody: number | null;
  positiveTestsAntibody: number | null;
  negativeTestsAntibody: number | null;
  totalTestsPeopleAntibody: number | null;
  positiveTestsPeopleAntibody: number | null;
  negativeTestsPeopleAntibody: number | null;
  totalTestsPeopleAntigen: number | null;
  positiveTestsPeopleAntigen: number | null;
  totalTestsAntigen: number | null;
  positiveTestsAntigen: number | null;
  fips: string;
  positiveIncrease: number;
  negativeIncrease: number;
  total: number;
  totalTestResultsIncrease: number;
  posNeg: number;
  dataQualityGrade: null;
  deathIncrease: number;
  hospitalizedIncrease: number;
  hash: string;
  commercialScore: number;
  negativeRegularScore: number;
  negativeScore: number;
  positiveScore: number;
  score: number;
  grade: string;
}

export enum TotalTestResultsSource {
  PosNeg = "posNeg",
  TotalTestEncountersViral = "totalTestEncountersViral",
  TotalTestsPeopleViral = "totalTestsPeopleViral",
  TotalTestsViral = "totalTestsViral",
}
