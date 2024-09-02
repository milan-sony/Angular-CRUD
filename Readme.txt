### Dot-net API Connection procedures

    1.visual studio 2022
    2.create new project
    3..net Api package
    4.next
    5.create
    6.right click the project and add manage nuggets project


###  5 package intallations

    1.browse microsoft entity server after installation pop up come allow apply then install .
    2.next instal microsoftenityframecore.tools 
    3.microsoft entitycore design install
    4.newtonSoft.json install
    5.Microsoft.AspNetCore.Cors install

### folder cration

    1.right click the folder => add => new folder => rename to model

    2.right click on model = >add => class => rename name to  product.cs

    3. and add the fields into this page

        
        using System.ComponentModel.DataAnnotations;

        namespace WebApplication3.models
        {
            public class Product
            {
                [Key]
                public int productid { get; set; }
                public string name { get; set; }  
                public int price { get; set; }
                public int stock { get; set; }

            }
        }


 ###  any imaport error occurd click the key and import the package from quick actions


    4.create another click model = > add = > class => name change into productDbContext.cs


        using Microsoft.EntityFrameworkCore;

        namespace WebApplication3.models
        {
            public class productDbContext:DbContext   //productDbContext inherite DbContext


            {
                public productDbContext(DbContextOptions<productDbContext> options) : base(options) { }

                public DbSet<Product> Products { get; set; }

                protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
                {
                    optionsBuilder.UseSqlServer(" Data Source =(localdb)\\MSSQLLocalDB; Initial Catalog = productDb1;Integrated Security = True;TrustServerCertificate=true");
                }
            }
        }


### program.cd page

        Add cores and mension DbContext


        using Microsoft.EntityFrameworkCore;
        using WebApplication3.models;

        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddDbContext<productDbContext>(opt =>
        opt.UseSqlServer(builder.Configuration.GetConnectionString("productDbContext")));

        var app = builder.Build();
        app.UseCors(policy =>  policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyOrigin());

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();


### take appsettings.json

    {
    "Logging": {
        "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
        }
    },
    "AllowedHosts": "*",

    "ConnectionStrings": {
        "productapiContext": "Server= (localdb)\\MSSQLLocalDB; Datebase = productdb1;Trusted_Connection=True;MultipleActiveResultSet=true"
    }
    }



### next

    1.tools = >nuget package manager = > nuget manager console
    2.inside the console type =>   Add-Migration "productmigration"  enter 
    3.after success full 
    4.type inside console = >update-database



 ### next

    1.click controller => add => controller
    2.click Api = > Add api controller ( 3rd option) = >next
    pop up window

    1.model clsss : product
    2.dbContext : productDbcontext

    Add

### last run the code you get many pop up messages allow all yes the you get swagger api window

    1.click post 
    2.click try it
    3.add the code with out adding id
    4.execute


    1.click get(first)
    2.execute
    3.you see the added products list



### come to angular page

    type terminal = >ng g class Product --type=model

    the created product come to ts page same as api connection

        export class Product {
            productid : number =0
            name : string =''
            price : number = 0
            stock : number = 0
        }

## import the product to the addproduct.ts page

        import { Product } from '../product.model';

### create service

        terminal = > ng g s productservice 

### import service inside addproduct.ts

        import { ProductserviceService } from '../productservice.service';

### add service inside addproduct ts constructor 

    constructor(private fb:FormBuilder,private sr:ProductserviceService,private r:Router) { }

### inside the onsubmit add this data

        ngOnInit(): void {
        }

        addProductForm=this.fb.group({
            id:[0],
            name:[''],
            price:[0],
            stock:[0],
        })

        submit=false;

        onSubmitted(){
            let details =this.addProductForm.value as Product;
            this.sr.insertproduct(details).subscribe((demo:any)=>
            
            {
            this.r.navigate(['/'])
            })

            this.submit=true;
            console.log(this.functional)

        }


### import HttpClientModule inside app module

### inside service add http inside consturctor and add swagger link

    constructor(private http:HttpClient) { }

    baseApiUrl:string = "https://localhost:7054"

    insertproduct(prd:Product){   // details ne reviceve cheyanulla temporaray value anu "prd"

    return this.http.post<Product>(this.baseApiUrl+'/api/Products',prd);
  }



#### view product

### view.ts add construnctor

    constructor(private sr:ProductserviceService, private r:Router ) { }

    datas:Product[]=[];

    ngOnInit(): void {

        this.sr.viewproduct().subscribe((datas1:Product[])=>
        {
        this.datas = datas1;
        })
    }


### chage view html table body page to 

    <tbody>
    <tr *ngFor="let details of datas">
        <td>{{details.productid}}</td>
        <td>{{details.name}}</td>
        <td>{{details.price}}</td>
        <td>{{details.stock}}</td>
    </tr>


### go go services page then add viewproduct page

        viewproduct(){

            return this.http.get<any>(this.baseApiUrl+'/api/Products');
        }


### remove product

    1.copy the view ts file then add remove function
         
            constructor(private sr:ProductserviceService,private r:Router) { }
            datas:Product[]=[];

            

            ngOnInit(): void {

                this.sr.viewproduct().subscribe((datas1:Product[])=>
                {
                this.datas = datas1;
                })
            } 
            deletedata(pid:number){

                this.sr.deleteproduct(pid).subscribe((Product:any)=>{

                this.ngOnInit();
                })


            }

### go services and add remove

            deleteproduct(pid:number){

            return  this.http.delete<any>(this.baseApiUrl+'/api/products/'+pid);
        }

#### change html remove page

    <tr *ngFor="let details of datas">
                    <td>{{details.productid}}</td>
                    <td>{{details.name}}</td>
                    <td>{{details.price}}</td>
                    <td>{{details.stock}}</td>
                    <td><button class="button-11" (click)="deletedata(details.productid)">Remove</button></td>
    <tr>

### update product

        updateproduct(pid:number){
        this.r.navigate(['/updateproduct',pid])
        }


### upadte.ts import activerouter

        constructor(private fb:UntypedFormBuilder,private sr:ProductserviceService,private ar:ActivatedRoute,private r:Router) { }


        addProductForm=this.fb.group({
            productid:[0],
            name:[''],
            price:[0],
            stock:[0],
        })

        // a variable to store the id
        p1:any
        ngOnInit(): void {

            //acces the value from the url

            this.p1=this.ar.snapshot.paramMap.get('pid')

            if(this.p1){

            this.sr.updateproduct(this.p1).subscribe({next:(response)=>
            {

                // patchvalue is used to split the value and display it on form
                
                this.addProductForm.patchValue(response)
            }
            })
            }

        }


        

