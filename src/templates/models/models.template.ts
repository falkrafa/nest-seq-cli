import { execSync } from "node:child_process";

const modelsTemplate = (projectName: string) => {
  execSync(`mkdir -p ${projectName}/src/common/models`, { stdio: 'inherit' });
  execSync(`touch ${projectName}/src/common/models/index.ts`, { stdio: 'inherit' });
  execSync(`touch ${projectName}/src/common/models/user.models.ts`, { stdio: 'inherit' });

  const userContent = `import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table({
  timestamps: true,
  underscored: true,
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}`;

  execSync(`echo "${userContent}" > ${projectName}/src/common/models/user.models.ts`, { stdio: 'inherit' });

  const indexContent = `export * from './user.models';
`;

  execSync(`echo "${indexContent}" > ${projectName}/src/common/models/index.ts`, { stdio: 'inherit' });

}

export default modelsTemplate;
