import React, {useState} from 'react'
import Layout from "../../components/layout"
import { HeaderWrapper, ContentWrapper } from './style'
import { toAbsoluteUrl } from '../../utils/assetHelper'
import AddMemberModal from '../../components/modals/addMemberModal'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const Index = () => {
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
  const [teamsData , setTeamsData] = useState([
    {
      id:1,
      type:'Leadership',
      teams: [
        {
          id:1,
          name:'Todd D. Wyman',
          position:'Chief Executive Officer Co-Founder',
          img:`${toAbsoluteUrl('/media/teams/Blank.png')}`,
        },
        {
          id:2,
          name:'Dr. Brian T. Bennett',
          position:'Chief Scientific officer Co-Founder',
          img:`${toAbsoluteUrl('/media/teams/Brian.png')}`,
        }
      ]
    },
    {
      id:2,
      type:'Teams',
      teams: [
        {
          id:3,
          name:'Dr. Chandra K. Dixit',
          position:'Director of protein chemistry',
          img:`${toAbsoluteUrl('/media/teams/Chandra.png')}`,
        },
        {
          id:4,
          name:'Dr. Liqin Ren',
          position:'senior scientist',
          img:`${toAbsoluteUrl('/media/teams/Liquin.png')}`,
        },
        {
          id:5,
          name:'Jessica K. Bennett',
          position:'Microscopy facility manager microscopist',
          img:`${toAbsoluteUrl('/media/teams/Jessica.png')}`,
        },
        {
          id:6,
          name:'Patrick D. Amistoso',
          position:'Materials & procurement manager Laboratory Technical Support ',
          img:`${toAbsoluteUrl('/media/teams/Patrick.png')}`,
        }
      ]
    },
    {
      id:3,
      type:'Advisors',
      teams: [
        {
          id:7,
          name:'Mike Lamach',
          position:'Advisor',
          img:`${toAbsoluteUrl('/media/teams/Blank.png')}`,
        },
        {
          id:8,
          name:'Kevin Lucey',
          position:'Advisor',
          img:`${toAbsoluteUrl('/media/teams/Blank.png')}`,
        },
      ]
    }
  ]
  )

  const reorderColumnList = (list, startIndex, endIndex) => {
    const [removed] = list.teams.splice(startIndex, 1);
    list.teams.splice(endIndex, 0, removed);
    return list;
  };


  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    // console.log(result);
    if (!destination) {
      return;
    }
    // drops in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // moves to the other position of the same column
    const sourceCol = teamsData.find((col) => col.id == source.droppableId);
    const destCol = teamsData.find((col) => col.id == destination.droppableId);

    console.log(sourceCol, "source col");
    console.log(destCol, "dest col");
    console.log(source, "source")
    console.log(destination, "destination")
    console.log(draggableId, "draggableID")


    if (sourceCol.id === destCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = teamsData.map((col) => {
        if (col.id === newColumn.id) {
          return newColumn;
        }
        return col;
      });
      setTeamsData(newState);

    }

    // moves to the other column
    if (sourceCol.id !== destCol.id) {
      const [sourceRemoved] = sourceCol.teams.splice(source.index, 1);
      destCol.teams.splice(destination.index, 0, sourceRemoved);
      const newState = teamsData.map((col) => {
        if (col.id === sourceCol.id) {
          return sourceCol;
        }
        if (col.id === destCol.id) {
          return destCol;
        }
        return col;
      });
      setTeamsData(newState);
    }
  };



  return (
    <Layout>
     <HeaderWrapper>
     <div className="header-title"><span className='sub-title'>Team Bios</span></div>
     <div className="header-search-container">    
       <button className='btn' onClick={() => setOpenAddMemberModal(true)}>Add New Member</button>  
     </div>
     </HeaderWrapper>
     <ContentWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
      <div className="teams-container">
        {teamsData.map((team) => (
          <Droppable key={team?.id} droppableId={team?.id?.toString()}>
          {(provided) => (
          <div className="team-card" key={team.id}
          ref={provided.innerRef} {...provided.droppableProps}
          >
            <div className="team-type">{team.type}</div>
            <div className="team-members">
            {team.teams.map((member, index) => (
              <Draggable key={member?.id} draggableId={member?.id?.toString()} index={index}>
                  {(provided) => (
              <div className="team-member" key={member.id}
              ref={provided.innerRef}
              {...provided.draggableProps}

              >
                <div className="left-container">
                  <i className='far fa-bars'  style={{color:'#9a9a9a', cursor:'grab'}}
                  {...provided.dragHandleProps}
                  />
                <div className="member-img">
                  <img src={member.img} alt="" />
                </div>
                  <div className="member-name">{member.name}</div>
                </div>
                <div className="member-info">
                  <div className="member-position">{member.position}</div>
                  <i className='far fa-pencil' style={{color:'var(--primary-color)', cursor:'pointer'}}
                  onClick={() => {
                    setOpenAddMemberModal(true)
                    setSelectedMember({
                      ...member,
                      role: team.type
                    })
                  }}
                  />
                </div>
              </div>
              )}
              </Draggable>
            ))}
            </div>
            {provided.placeholder}
          </div>
          )}
          </Droppable>
        ))}
      </div>
      </DragDropContext>
     </ContentWrapper>
     {openAddMemberModal && <AddMemberModal setOpenAddMemberModal={setOpenAddMemberModal} openAddMemberModal={openAddMemberModal} selectedMember={selectedMember} setSelectedMember={setSelectedMember} />}
    </Layout>
  )
}

export default Index